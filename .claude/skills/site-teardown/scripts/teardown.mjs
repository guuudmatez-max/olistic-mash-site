#!/usr/bin/env node
// Misura un sito dal vivo: librerie, token, animazioni, transizioni, hover e scroll.
// Uso: node teardown.mjs <url> [--selector ".hero h1"] [--out ./teardown-out]
//        [--widths 1440,390] [--scroll-steps 6] [--wait 1500] [--no-hover]

import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const require = createRequire(import.meta.url);

function loadPlaywright() {
  const tries = ["playwright", "playwright-core", "@playwright/test"];
  for (const name of tries) {
    try { return require(name); } catch {}
    try { return require(require.resolve(name, { paths: [process.cwd()] })); } catch {}
  }
  console.error("Playwright non trovato. Installa con: npm i -g playwright && npx playwright install chromium");
  process.exit(2);
}

function parseArgs(argv) {
  const a = { url: null, selector: null, out: "./teardown-out", widths: [1440, 390], scrollSteps: 6, wait: 1500, hover: true };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    if (k === "--selector") a.selector = argv[++i];
    else if (k === "--out") a.out = argv[++i];
    else if (k === "--widths") a.widths = argv[++i].split(",").map(Number).filter(Boolean);
    else if (k === "--scroll-steps") a.scrollSteps = Number(argv[++i]);
    else if (k === "--wait") a.wait = Number(argv[++i]);
    else if (k === "--no-hover") a.hover = false;
    else if (!k.startsWith("--")) a.url = k;
  }
  if (!a.url) {
    console.error("Uso: node teardown.mjs <url> [--selector css] [--out dir] [--widths 1440,390] [--scroll-steps 6] [--wait 1500] [--no-hover]");
    process.exit(1);
  }
  return a;
}

// Gira nella pagina prima di qualsiasi script: registra le chiamate a Element.animate
// (Motion/Framer Motion, Web Animations) che finiscono prima che le possiamo leggere.
const INIT_SCRIPT = () => {
  window.__td = { animateCalls: [] };
  const orig = Element.prototype.animate;
  Element.prototype.animate = function (keyframes, options) {
    try {
      const d = (el) => {
        let s = el.tagName.toLowerCase();
        if (el.id) s += "#" + el.id;
        if (el.classList.length) s += "." + [...el.classList].slice(0, 3).join(".");
        return s;
      };
      if (window.__td.animateCalls.length < 300)
        window.__td.animateCalls.push({
          target: d(this),
          keyframes: JSON.parse(JSON.stringify(keyframes ?? null)),
          options: typeof options === "number" ? { duration: options } : JSON.parse(JSON.stringify(options ?? {})),
          t: Math.round(performance.now()),
        });
    } catch {}
    return orig.apply(this, arguments);
  };

  // GSAP: registra ogni tween quando nasce, perché a fine animazione sparisce dalla timeline.
  const d = (el) => {
    if (typeof el === "string") return el;
    if (!el || !el.tagName) return typeof el;
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    if (el.classList?.length) s += "." + [...el.classList].slice(0, 3).join(".");
    return s;
  };
  const clean = (vars) => {
    const o = {};
    for (const [k, v] of Object.entries(vars || {})) {
      if (typeof v === "function") { o[k] = "ƒ"; continue; }
      if (k === "scrollTrigger" && v && typeof v === "object") {
        o[k] = { trigger: d(v.trigger), start: v.start ?? null, end: v.end ?? null, scrub: v.scrub ?? null, pin: v.pin ? true : null, toggleActions: v.toggleActions ?? null };
        continue;
      }
      if (["parent", "overwrite", "immediateRender", "lazy", "data", "callbackScope", "runBackwards", "startAt"].includes(k)) continue;
      try { o[k] = JSON.parse(JSON.stringify(v, (kk, vv) => (typeof vv === "function" ? "ƒ" : vv && vv.tagName ? d(vv) : vv && vv.nodeType ? "node" : vv))); } catch { o[k] = String(v); }
    }
    return o;
  };
  window.__td.gsapCalls = [];
  const rec = (method, targets, a, b) => {
    if (window.__td.gsapCalls.length >= 400) return;
    let list = [];
    try { list = typeof targets === "string" ? [targets] : [...(targets?.length !== undefined && !targets.tagName ? targets : [targets])]; } catch { list = [targets]; }
    window.__td.gsapCalls.push({ method, targets: list.slice(0, 4).map(d), count: list.length, vars: clean(b ?? a), from: b ? clean(a) : undefined, t: Math.round(performance.now()) });
  };
  const wrap = (obj, name, label) => {
    const f = obj?.[name];
    if (typeof f !== "function" || f.__td) return;
    obj[name] = function (targets, a, b) {
      try { rec(label + name, targets, a, name === "fromTo" ? b : undefined); } catch {}
      return f.apply(this, arguments);
    };
    obj[name].__td = true;
  };
  const hook = (g) => {
    if (!g || g.__tdHooked) return;
    g.__tdHooked = true;
    for (const m of ["to", "from", "fromTo"]) wrap(g, m, "gsap.");
    const proto = g.core?.Timeline?.prototype;
    if (proto) for (const m of ["to", "from", "fromTo"]) wrap(proto, m, "tl.");
  };
  let current = window.gsap;
  try {
    Object.defineProperty(window, "gsap", { configurable: true, get: () => current, set: (v) => { current = v; try { hook(v); } catch {} } });
  } catch {}
  hook(current);
};

// Funzioni eseguite nella pagina. Devono essere autonome.
const PAGE = {
  describe: `(el) => {
    if (!el || !el.tagName) return String(el);
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    if (el.classList && el.classList.length) s += "." + [...el.classList].slice(0, 3).join(".");
    return s;
  }`,
};

function libsProbe() {
  const w = window;
  const found = {};
  const v = (x) => (x && (x.version || x.VERSION)) || true;
  if (w.gsap) found.gsap = v(w.gsap);
  if (w.ScrollTrigger) found.ScrollTrigger = true;
  if (w.gsap?.plugins) found.gsapPlugins = Object.keys(w.gsap.plugins || {});
  if (w.Lenis || w.lenis || document.documentElement.classList.contains("lenis")) found.lenis = true;
  if (w.LocomotiveScroll || document.querySelector("[data-scroll-container]")) found.locomotiveScroll = true;
  if (w.Swiper || document.querySelector(".swiper")) found.swiper = true;
  if (w.THREE) found.three = w.THREE.REVISION || true;
  if (w.lottie || w.bodymovin || document.querySelector("lottie-player, dotlottie-player")) found.lottie = true;
  if (w.AOS || document.querySelector("[data-aos]")) found.aos = true;
  if (w.barba) found.barba = true;
  if (w.anime) found.anime = true;
  if (w.Splitting || document.querySelector("[data-splitting]")) found.splitting = true;
  if (w.SplitType) found.splitType = true;
  if (document.querySelector("[data-framer-component-type], [data-framer-name]")) found.framerSite = true;
  if (document.querySelector("[data-projection-id], [style*='--motion']")) found.framerMotion = true;
  if (w.__NEXT_DATA__ || document.querySelector("#__next")) found.nextjs = true;
  if (w.__NUXT__) found.nuxt = true;
  if (document.querySelector("[data-wf-page], html[data-wf-site]")) found.webflow = true;
  if (w.Webflow?.require) {
    try { if (w.Webflow.require("ix2")) found.webflowInteractions = true; } catch {}
  }
  if (document.querySelector("[data-astro-cid], astro-island")) found.astro = true;
  if (document.querySelector("[class*='svelte-']")) found.svelte = true;
  if (w.React || document.querySelector("[data-reactroot]")) found.react = true;
  if (w.Alpine) found.alpine = true;
  const scripts = [...document.scripts].map((s) => s.src).filter(Boolean);
  const hints = ["gsap", "scrolltrigger", "lenis", "locomotive", "swiper", "three", "lottie", "aos", "barba", "anime", "splitting", "split-type", "motion", "framer", "splide", "embla", "flickity", "rellax", "parallax", "typed", "particles", "matter", "pixi", "ogl", "curtains", "vanta"];
  found.scriptHints = [...new Set(scripts.flatMap((src) => hints.filter((h) => src.toLowerCase().includes(h))))];
  found.scripts = scripts.slice(0, 60);
  found.reducedMotionInCss = false;
  return found;
}

function tokensProbe() {
  const rootStyle = getComputedStyle(document.documentElement);
  const vars = {};
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules) {
      if (r.selectorText && /(^|,)\s*(:root|html)\s*(,|$)/.test(r.selectorText)) {
        for (const p of r.style) if (p.startsWith("--")) vars[p] = rootStyle.getPropertyValue(p).trim();
      }
    }
  }
  const count = (m, k) => k && m.set(k, (m.get(k) || 0) + 1);
  const colors = new Map(), bgs = new Map(), fonts = new Map(), sizes = new Map(), radii = new Map(), shadows = new Map(), eases = new Map(), durs = new Map();
  const els = [...document.querySelectorAll("body *")].slice(0, 4000);
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (hasText) {
      count(colors, cs.color);
      count(fonts, cs.fontFamily.split(",")[0].replace(/["']/g, "").trim() + " " + cs.fontWeight);
      count(sizes, cs.fontSize + " / " + cs.lineHeight + " / " + cs.letterSpacing);
    }
    if (cs.backgroundColor !== "rgba(0, 0, 0, 0)") count(bgs, cs.backgroundColor);
    if (cs.borderRadius !== "0px") count(radii, cs.borderRadius);
    if (cs.boxShadow !== "none") count(shadows, cs.boxShadow);
    if (cs.transitionDuration !== "0s") {
      count(durs, cs.transitionDuration);
      count(eases, cs.transitionTimingFunction);
    }
  }
  const top = (m, n = 12) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([value, uses]) => ({ value, uses }));
  const fontFaces = [...document.fonts].filter((f) => f.status === "loaded").map((f) => `${f.family} ${f.weight} ${f.style}`);
  return {
    cssVariables: vars,
    textColors: top(colors),
    backgrounds: top(bgs),
    fonts: top(fonts),
    fontSizes: top(sizes, 15),
    radii: top(radii, 8),
    shadows: top(shadows, 6),
    transitionDurations: top(durs, 8),
    transitionEasings: top(eases, 8),
    loadedFontFaces: [...new Set(fontFaces)].slice(0, 30),
  };
}

function animationsProbe(describeSrc) {
  const describe = eval(describeSrc);
  const out = [];
  for (const a of document.getAnimations()) {
    const t = a.effect?.getTiming?.() || {};
    let keyframes = [];
    try { keyframes = a.effect.getKeyframes().map(({ computedOffset, ...k }) => k); } catch {}
    out.push({
      type: a.constructor.name,
      name: a.animationName || a.transitionProperty || a.id || null,
      target: describe(a.effect?.target),
      pseudo: a.effect?.pseudoElement || null,
      duration: t.duration, delay: t.delay, endDelay: t.endDelay,
      easing: t.easing, iterations: t.iterations, direction: t.direction, fill: t.fill,
      playState: a.playState,
      timeline: a.timeline?.constructor?.name || null,
      keyframes: keyframes.slice(0, 12),
    });
  }
  return out.slice(0, 200);
}

function gsapProbe(describeSrc) {
  const describe = eval(describeSrc);
  const g = window.gsap;
  if (!g?.globalTimeline) return null;
  const tweens = [];
  const walk = (tl, depth) => {
    for (const c of tl.getChildren(false, true, true)) {
      if (c.getChildren) { tweens.push({ timeline: true, duration: c.duration(), depth, label: c.vars?.id || null }); walk(c, depth + 1); continue; }
      if (typeof c.duration !== "function" || (c.targets?.() || []).some((x) => typeof x === "function")) continue;
      const vars = {};
      for (const [k, val] of Object.entries(c.vars || {})) {
        if (typeof val === "function" || k === "scrollTrigger") continue;
        vars[k] = typeof val === "object" ? JSON.parse(JSON.stringify(val, (kk, vv) => (vv instanceof Element ? describe(vv) : vv))) : val;
      }
      tweens.push({ depth, targets: (c.targets?.() || []).slice(0, 5).map(describe), duration: c.duration(), delay: c.delay(), ease: typeof c.vars?.ease === "function" ? "funzione custom" : c.vars?.ease ?? "power1.out (default)", vars });
      if (tweens.length > 150) return;
    }
  };
  try { walk(g.globalTimeline, 0); } catch (e) { tweens.push({ error: String(e) }); }
  const triggers = (window.ScrollTrigger?.getAll?.() || []).slice(0, 60).map((st) => ({
    trigger: describe(st.trigger), start: st.vars?.start ?? null, end: st.vars?.end ?? null,
    scrub: st.vars?.scrub ?? null, pin: st.vars?.pin ? describe(st.pin) : null, toggleActions: st.vars?.toggleActions ?? null,
    animation: st.animation ? { duration: st.animation.duration(), tweens: (st.animation.getChildren ? st.animation.getChildren(true, true, false) : [st.animation]).slice(0, 8).map((tw) => ({ targets: (tw.targets?.() || []).slice(0, 3).map(describe), duration: tw.duration(), ease: typeof tw.vars?.ease === "function" ? "ƒ" : tw.vars?.ease ?? null, props: Object.keys(tw.vars || {}).filter((k) => !["ease", "duration", "delay", "scrollTrigger", "onComplete", "onUpdate", "onStart", "stagger", "parent", "immediateRender", "runBackwards", "overwrite", "lazy", "data", "startAt"].includes(k)) })) } : null,
  }));
  return { tweens, scrollTriggers: triggers };
}

function cssMotionRules(cssText) {
  // Estrae @keyframes, regole con transition/animation e media prefers-reduced-motion.
  const keyframes = [];
  const kfRe = /@(?:-webkit-)?keyframes\s+([\w-]+)\s*\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}/g;
  let m;
  while ((m = kfRe.exec(cssText)) && keyframes.length < 80) keyframes.push({ name: m[1], body: m[2].replace(/\s+/g, " ").trim().slice(0, 1200) });
  const rules = [];
  const ruleRe = /([^{}@;]+)\{([^{}]*(?:transition|animation)[^{}]*)\}/g;
  while ((m = ruleRe.exec(cssText)) && rules.length < 200) {
    const decls = m[2].split(";").map((d) => d.trim()).filter((d) => /^(-webkit-)?(transition|animation)/.test(d));
    if (decls.length) rules.push({ selector: m[1].trim().slice(0, 200), decls });
  }
  return { keyframes, rules, reducedMotion: /prefers-reduced-motion/.test(cssText) };
}

const PICK = [
  "display", "position", "width", "height", "margin", "padding", "color", "backgroundColor", "backgroundImage",
  "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textTransform",
  "borderRadius", "border", "boxShadow", "opacity", "transform", "transformOrigin", "filter", "backdropFilter",
  "clipPath", "mixBlendMode", "transition", "animation", "willChange", "gap", "gridTemplateColumns", "justifyContent", "alignItems",
];

function stylesOf({ sel, pick, describeSrc }) {
  const describe = eval(describeSrc);
  const els = [...document.querySelectorAll(sel)].slice(0, 5);
  return els.map((el) => {
    const cs = getComputedStyle(el);
    const o = { el: describe(el), rect: el.getBoundingClientRect().toJSON() };
    for (const p of pick) o[p] = cs[p];
    for (const pseudo of ["::before", "::after"]) {
      const ps = getComputedStyle(el, pseudo);
      if (ps.content && ps.content !== "none" && ps.content !== "normal")
        o[pseudo] = { content: ps.content, transform: ps.transform, opacity: ps.opacity, transition: ps.transition, background: ps.backgroundColor };
    }
    return o;
  });
}

function diff(a, b) {
  const d = {};
  for (const k of Object.keys(b)) if (k !== "rect" && JSON.stringify(a?.[k]) !== JSON.stringify(b[k])) d[k] = { from: a?.[k], to: b[k] };
  return d;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { chromium } = loadPlaywright();
  const out = resolve(args.out);
  mkdirSync(out, { recursive: true });

  const launchOpts = { headless: true };
  const exe = process.env.TEARDOWN_CHROMIUM;
  if (exe) launchOpts.executablePath = exe;
  const browser = await chromium.launch(launchOpts);
  const report = { url: args.url, at: new Date().toISOString(), selector: args.selector, viewports: [] };

  for (const [i, width] of args.widths.entries()) {
    const height = width < 600 ? 844 : 900;
    const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: "no-preference" });
    const page = await ctx.newPage();
    await page.addInitScript(INIT_SCRIPT);
    const cssTexts = [];
    page.on("response", async (r) => {
      try {
        if ((r.headers()["content-type"] || "").includes("text/css")) cssTexts.push(await r.text());
      } catch {}
    });
    const vp = { width, height };
    try {
      await page.goto(args.url, { waitUntil: "networkidle", timeout: 45000 });
    } catch {
      await page.goto(args.url, { waitUntil: "load", timeout: 45000 }).catch((e) => (vp.loadError = String(e)));
    }
    await page.waitForTimeout(args.wait);
    vp.title = await page.title();
    vp.pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    // Animazioni attive appena caricata la pagina (intro, loop, reveal iniziali).
    vp.animationsOnLoad = await page.evaluate(animationsProbe, PAGE.describe);
    await page.screenshot({ path: join(out, `w${width}-load.png`) });

    if (i === 0) {
      report.libraries = await page.evaluate(libsProbe);
      report.tokens = await page.evaluate(tokensProbe);
      const inline = await page.evaluate(() => [...document.querySelectorAll("style")].map((s) => s.textContent).join("\n"));
      const motion = cssMotionRules(cssTexts.join("\n") + "\n" + inline);
      report.css = motion;
      report.libraries.reducedMotionInCss = motion.reducedMotion;
    }

    // Selettore: stili calcolati, hover, screenshot dell'elemento.
    if (args.selector) {
      const exists = await page.locator(args.selector).count();
      vp.selectorMatches = exists;
      if (exists) {
        const first = page.locator(args.selector).first();
        await first.scrollIntoViewIfNeeded().catch(() => {});
        await page.waitForTimeout(600);
        const before = await page.evaluate(stylesOf, { sel: args.selector, pick: PICK, describeSrc: PAGE.describe });
        vp.selectorStyles = before;
        await first.screenshot({ path: join(out, `w${width}-selector.png`) }).catch(() => {});
        if (args.hover) {
          await first.hover({ timeout: 3000 }).catch(() => {});
          await page.waitForTimeout(80);
          vp.hoverAnimations = await page.evaluate(animationsProbe, PAGE.describe);
          await page.waitForTimeout(900);
          const after = await page.evaluate(stylesOf, { sel: args.selector, pick: PICK, describeSrc: PAGE.describe });
          vp.hoverDiff = after.map((a, k) => ({ el: a.el, changes: diff(before[k], a) }));
          await first.screenshot({ path: join(out, `w${width}-selector-hover.png`) }).catch(() => {});
          await page.mouse.move(0, 0);
        }
      }
    }

    // Scroll a passi: cosa parte, cosa cambia sul selettore, screenshot per passo.
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    vp.scroll = [];
    const steps = Math.max(0, args.scrollSteps);
    for (let s = 1; s <= steps; s++) {
      const y = await page.evaluate((f) => Math.round((document.documentElement.scrollHeight - innerHeight) * f), s / steps);
      await page.mouse.wheel(0, 0);
      await page.evaluate((yy) => window.scrollTo({ top: yy, behavior: "instant" }), y);
      await page.waitForTimeout(120);
      const started = await page.evaluate(animationsProbe, PAGE.describe);
      await page.waitForTimeout(700);
      const step = { step: s, scrollY: y, animationsStarted: started.filter((a) => a.playState === "running").slice(0, 40) };
      if (args.selector) step.selector = await page.evaluate(stylesOf, { sel: args.selector, pick: ["opacity", "transform", "filter", "clipPath"], describeSrc: PAGE.describe });
      vp.scroll.push(step);
      await page.screenshot({ path: join(out, `w${width}-scroll-${s}.png`) });
    }

    vp.animateCalls = await page.evaluate(() => window.__td?.animateCalls || []);
    vp.gsap = await page.evaluate(gsapProbe, PAGE.describe);
    vp.gsapCalls = await page.evaluate(() => window.__td?.gsapCalls || []);
    report.viewports.push(vp);
    await ctx.close();
  }
  await browser.close();

  writeFileSync(join(out, "report.json"), JSON.stringify(report, null, 2));
  writeFileSync(join(out, "summary.md"), summarize(report));
  console.log(`OK: ${join(out, "summary.md")}`);
}

function summarize(r) {
  const j = (x, n) => String(JSON.stringify(x) ?? x).slice(0, n);
  const L = [];
  const lib = r.libraries || {};
  const libNames = Object.entries(lib).filter(([k, v]) => v && !["scripts", "scriptHints", "reducedMotionInCss"].includes(k)).map(([k, v]) => (v === true ? k : `${k} ${JSON.stringify(v)}`));
  L.push(`# Teardown ${r.url}`, "", `Misurato il ${r.at}`, "");
  L.push("## Librerie", libNames.length ? libNames.map((x) => `- ${x}`).join("\n") : "- nessuna libreria di animazione riconosciuta (probabile CSS puro)");
  if (lib.scriptHints?.length) L.push(`- indizi nei nomi degli script: ${lib.scriptHints.join(", ")}`);
  L.push(`- prefers-reduced-motion nel CSS: ${lib.reducedMotionInCss ? "sì" : "no"}`, "");
  const t = r.tokens || {};
  const fmt = (arr) => (arr || []).map((x) => `\`${x.value}\` ×${x.uses}`).join(", ");
  L.push("## Token", `- font: ${fmt(t.fonts)}`, `- dimensioni testo (size / line-height / tracking): ${fmt(t.fontSizes)}`, `- colori testo: ${fmt(t.textColors)}`, `- sfondi: ${fmt(t.backgrounds)}`, `- raggi: ${fmt(t.radii)}`, `- ombre: ${fmt(t.shadows)}`, `- durate transizioni: ${fmt(t.transitionDurations)}`, `- easing transizioni: ${fmt(t.transitionEasings)}`);
  const vars = Object.entries(t.cssVariables || {});
  if (vars.length) L.push(`- variabili CSS su :root (${vars.length}): ${vars.slice(0, 40).map(([k, v]) => `\`${k}: ${v}\``).join(", ")}`);
  L.push("");
  const css = r.css || {};
  L.push(`## CSS di movimento (${css.keyframes?.length || 0} @keyframes, ${css.rules?.length || 0} regole)`);
  for (const k of (css.keyframes || []).slice(0, 15)) L.push(`- @keyframes **${k.name}**: \`${k.body.slice(0, 300)}\``);
  for (const rule of (css.rules || []).slice(0, 25)) L.push(`- \`${rule.selector}\` → ${rule.decls.map((d) => `\`${d}\``).join(" ")}`);
  L.push("");
  const anim = (a) => `- ${a.type} **${a.name ?? "?"}** su \`${a.target}\`${a.pseudo ? a.pseudo : ""}: ${a.duration}ms, delay ${a.delay}ms, easing \`${a.easing}\`, iter ${a.iterations}${a.timeline && a.timeline !== "DocumentTimeline" ? `, timeline ${a.timeline}` : ""}${a.keyframes?.length ? ` · keyframes ${j(a.keyframes, 220)}` : ""}`;
  for (const vp of r.viewports) {
    L.push(`## Viewport ${vp.width}px`);
    if (vp.loadError) L.push(`- errore di caricamento: ${vp.loadError}`);
    L.push(`### Animazioni al caricamento (${vp.animationsOnLoad.length})`, ...vp.animationsOnLoad.slice(0, 25).map(anim));
    if (vp.animateCalls?.length) L.push(`### Chiamate Element.animate (${vp.animateCalls.length})`, ...vp.animateCalls.slice(0, 20).map((c) => `- \`${c.target}\` a ${c.t}ms: ${JSON.stringify(c.options)} · ${j(c.keyframes, 200)}`));
    if (vp.gsapCalls?.length) {
      const groups = new Map();
      for (const c of vp.gsapCalls) {
        const key = `${c.method} ${j(c.vars, 400)} ${c.from ? "from " + j(c.from, 200) : ""}`;
        const g = groups.get(key) || { ...c, n: 0, targetsAll: new Set() };
        g.n++; c.targets.forEach((x) => g.targetsAll.add(x)); groups.set(key, g);
      }
      L.push(`### Tween GSAP creati (${vp.gsapCalls.length}, ${groups.size} distinti)`);
      for (const g of [...groups.values()].slice(0, 30)) L.push(`- ${g.method} ×${g.n} su \`${[...g.targetsAll].slice(0, 3).join(", ")}\`${g.from ? ` da ${j(g.from, 200)}` : ""} → ${j(g.vars, 320)}`);
    }
    if (vp.gsap) {
      const sts = new Map();
      for (const st of vp.gsap.scrollTriggers) {
        const key = j({ ...st, trigger: undefined }, 600);
        const g = sts.get(key) || { ...st, n: 0 };
        g.n++; sts.set(key, g);
      }
      L.push(`### ScrollTrigger attivi (${vp.gsap.scrollTriggers.length}, ${sts.size} distinti)`);
      for (const st of sts.values()) {
        L.push(`- ×${st.n} \`${st.trigger}\` start \`${st.start}\` end \`${st.end}\` scrub ${st.scrub} pin ${st.pin}${st.toggleActions ? ` toggleActions \`${st.toggleActions}\`` : ""}`);
        if (st.animation) for (const tw of st.animation.tweens) L.push(`  - \`${tw.targets.join(", ")}\` ${tw.duration}s ease \`${tw.ease}\` proprietà ${tw.props.join(", ")}`);
      }
    }
    if (r.selector) {
      L.push(`### Selettore \`${r.selector}\` (${vp.selectorMatches || 0} elementi)`);
      for (const s of vp.selectorStyles || []) L.push("```json", j(s, null, 1, 2500), "```");
      if (vp.hoverAnimations?.length) L.push("Animazioni partite all'hover:", ...vp.hoverAnimations.slice(0, 15).map(anim));
      for (const h of vp.hoverDiff || []) if (Object.keys(h.changes).length) L.push(`Hover su \`${h.el}\` cambia: ${Object.entries(h.changes).map(([k, v]) => `${k} \`${v.from}\` → \`${v.to}\``).join("; ")}`);
    }
    L.push("### Scroll");
    for (const st of vp.scroll) {
      L.push(`- passo ${st.step} (y=${st.scrollY}): ${st.animationsStarted.length} animazioni in corso${st.animationsStarted.length ? ": " + st.animationsStarted.slice(0, 6).map((a) => `${a.name ?? a.type}@\`${a.target}\` ${a.duration}ms \`${a.easing}\``).join(", ") : ""}`);
      for (const s of st.selector || []) L.push(`  - \`${s.el}\` opacity ${s.opacity}, transform \`${s.transform}\`, filter \`${s.filter}\`, clip \`${s.clipPath}\``);
    }
    L.push("");
  }
  L.push("Screenshot: `w<larghezza>-load.png`, `-selector.png`, `-selector-hover.png`, `-scroll-<n>.png`. Dati completi in `report.json`.");
  return L.join("\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
