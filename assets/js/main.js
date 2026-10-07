// ----------------------------
// IMPORTS VITE
// ----------------------------
import "@fontsource-variable/inter";
import "@fontsource-variable/bodoni-moda/opsz.css";
import "@fontsource-variable/bodoni-moda/opsz-italic.css";
import "../css/main.css";



// ----------------------------
// NAVBAR MOBILE (usa .nav.nav--open)
// ----------------------------
function initMobileNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const toggle = nav.querySelector(".nav__toggle");
  if (!toggle) return;

  const links = nav.querySelectorAll(".nav__link");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  links.forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}


// ----------------------------
// TESTIMONIAL CAROUSEL
// ----------------------------
function initTestimonialCarousels() {
  const carousels = document.querySelectorAll("[data-testimonial-carousel]");

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll("[data-testimonial-slide]"));
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");

    if (!slides.length) return;

    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, n) => {
        slide.classList.toggle("testimonial-slide--active", n === i);
      });
    }

    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 10000);

    showSlide(index);
  });
}


// ----------------------------
// VIDEO LAZY
// ----------------------------
function initLazyVideos() {
  document.querySelectorAll(".video-lazy").forEach((container) => {
    container.addEventListener("click", () => {
      const id = container.dataset.videoId;
      container.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    });
  });
}


// ----------------------------
// ON LOAD — BOOTSTRAP EVERYTHING
// ----------------------------
// ----------------------------
// STACCO FOTOGRAFICO: si apre una volta quando entra nello schermo
// ----------------------------
function initStacchi() {
  const stacchi = document.querySelectorAll(".stacco[data-apri]");
  if (!("IntersectionObserver" in window)) {
    stacchi.forEach((s) => s.classList.add("aperto"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("aperto");
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.25 },
  );
  stacchi.forEach((s) => io.observe(s));
}

// ----------------------------
// INVITO ALLA GUIDA: compare una volta, quando si arriva a metà pagina
// ----------------------------
function initInvitoGuida() {
  const invito = document.querySelector("dialog.invito-guida");
  const punto = document.querySelector("[data-invito-guida]");
  if (!invito || !punto || !("IntersectionObserver" in window) || !invito.showModal) return;
  let giaVisto = false;
  try { giaVisto = sessionStorage.getItem("invito-guida") === "visto"; } catch {}
  if (giaVisto) return;

  invito.querySelector(".invito-guida__chiudi")?.addEventListener("click", () => invito.close());
  // tocco fuori dalla finestra: chiude
  invito.addEventListener("click", (e) => { if (e.target === invito) invito.close(); });

  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    invito.showModal();
    try { sessionStorage.setItem("invito-guida", "visto"); } catch {}
  });
  io.observe(punto);
}

// ----------------------------
// MENU: «Servizi» si apre anche con il tocco e con la tastiera
// ----------------------------
function initMenuServizi() {
  document.querySelectorAll(".nav__gruppo").forEach((gruppo) => {
    const bottone = gruppo.querySelector(".nav__apri");
    const chiudi = () => { gruppo.classList.remove("aperto"); bottone.setAttribute("aria-expanded", "false"); };
    bottone.addEventListener("click", () => {
      const aperto = gruppo.classList.toggle("aperto");
      bottone.setAttribute("aria-expanded", String(aperto));
    });
    document.addEventListener("click", (e) => { if (!gruppo.contains(e.target)) chiudi(); });
    gruppo.addEventListener("keydown", (e) => { if (e.key === "Escape") { chiudi(); bottone.focus(); } });
  });
}

// ----------------------------
// MODULO GUIDA: dopo l'invio un grazie al posto del modulo; nel popup si chiude da solo
// ponytail: l'invio vero (servizio di email) arriva nel ticket della guida PDF
// ----------------------------
function initModuliGuida() {
  document.querySelectorAll("form.modulo-guida").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.classList.add("inviato");
      setTimeout(() => {
        const grazie = document.createElement("p");
        grazie.className = "grazie";
        grazie.setAttribute("role", "status");
        grazie.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>Grazie! Spero che ti sia utile. Ti aspetto nella tua casella di posta.</span>';
        form.replaceWith(grazie);
        const finestra = grazie.closest("dialog");
        if (finestra) setTimeout(() => finestra.close(), 1500);
      }, 380);
    });
  });
}

// ----------------------------
// DOMANDE FREQUENTI: ricerca nel testo di domande e risposte
// ----------------------------
function initCercaFaq() {
  const lista = document.querySelector("[data-faq]");
  if (!lista) return;
  const campo = document.querySelector("[data-faq-cerca]");
  const schede = [...document.querySelectorAll("[data-faq-tab]")];
  const voci = [...lista.querySelectorAll("details")];
  const vuota = lista.querySelector("[data-faq-vuota]");
  const conta = document.querySelector("[data-faq-conta]");
  const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let categoria = schede[0]?.dataset.faqTab;

  // ricerca vuota: mostra l'argomento scelto; con parole: cerca in tutte le domande
  const aggiorna = () => {
    const parole = campo ? norm(campo.value).split(/\s+/).filter(Boolean) : [];
    let visibili = 0;
    voci.forEach((v) => {
      const ok = parole.length
        ? parole.every((p) => norm(v.textContent).includes(p))
        : !categoria || v.dataset.faqCat === categoria;
      v.hidden = !ok;
      if (ok) visibili++;
    });
    vuota.hidden = visibili > 0;
    if (conta) conta.textContent = parole.length ? `${visibili} ${visibili === 1 ? "domanda" : "domande"}` : "";
    schede.forEach((t) => t.classList.toggle("attivo", !parole.length && t.dataset.faqTab === categoria));
  };

  schede.forEach((t) =>
    t.addEventListener("click", () => {
      categoria = t.dataset.faqTab;
      schede.forEach((x) => x.setAttribute("aria-selected", String(x === t)));
      if (campo) campo.value = "";
      aggiorna();
    }),
  );
  campo?.addEventListener("input", aggiorna);
}

// Testimonianze: sul computer le colonne si muovono con la pagina a velocità diverse
function initParallasse() {
  const box = document.querySelector("[data-parallasse]");
  if (!box) return;
  const mq = matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
  const colonne = [...box.children];
  const velocita = [-60, 50, -30]; // spostamento massimo in px, verso alto o basso
  let attesa = false;
  const muovi = () => {
    attesa = false;
    if (!mq.matches) return colonne.forEach((c) => (c.style.transform = ""));
    const r = box.getBoundingClientRect();
    const p = Math.min(0.5, Math.max(-0.5, (innerHeight - r.top) / (innerHeight + r.height) - 0.5)); // da -0.5 a 0.5 mentre attraversa lo schermo
    colonne.forEach((c, i) => (c.style.transform = `translateY(${(p * 2 * (velocita[i] ?? 0)).toFixed(1)}px)`));
  };
  const chiedi = () => { if (!attesa) { attesa = true; requestAnimationFrame(muovi); } };
  addEventListener("scroll", chiedi, { passive: true });
  mq.addEventListener("change", chiedi);
  muovi();
}

// Barra WhatsApp sul telefono: visibile dopo l'apertura, nascosta quando si vede l'invito finale
function initBarraWhatsapp() {
  const barra = document.querySelector("[data-barra-wa]");
  const dopo = document.querySelector("[data-barra-dopo]");
  const fine = document.querySelector("[data-barra-fine]");
  if (!barra || !dopo) return;
  let oltreApertura = false, allaFine = false;
  const aggiorna = () => barra.classList.toggle("visibile", oltreApertura && !allaFine);
  new IntersectionObserver(([e]) => { oltreApertura = !e.isIntersecting && e.boundingClientRect.top < 0; aggiorna(); }).observe(dopo);
  if (fine) new IntersectionObserver(([e]) => { allaFine = e.isIntersecting; aggiorna(); }).observe(fine);
}

document.addEventListener("DOMContentLoaded", () => {
  initParallasse();
  initBarraWhatsapp();
  initStacchi();
  initCercaFaq();
  initModuliGuida();
  initInvitoGuida();
  initMenuServizi();
  initMobileNav();
  initTestimonialCarousels();
  initLazyVideos();
});
