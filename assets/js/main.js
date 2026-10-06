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
  const campo = document.querySelector("[data-faq-cerca]");
  const lista = document.querySelector("[data-faq]");
  if (!campo || !lista) return;
  const voci = [...lista.querySelectorAll("details")];
  const vuota = lista.querySelector("[data-faq-vuota]");
  const conta = document.querySelector("[data-faq-conta]");
  const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  campo.addEventListener("input", () => {
    const parole = norm(campo.value).split(/\s+/).filter(Boolean);
    let visibili = 0;
    voci.forEach((v) => {
      const testo = norm(v.textContent);
      const ok = parole.every((p) => testo.includes(p));
      v.hidden = !ok;
      if (ok) visibili++;
      if (ok && parole.length) v.open = false;
    });
    vuota.hidden = visibili > 0;
    conta.textContent = parole.length ? `${visibili} ${visibili === 1 ? "domanda" : "domande"}` : "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initStacchi();
  initCercaFaq();
  initModuliGuida();
  initInvitoGuida();
  initMenuServizi();
  initMobileNav();
  initTestimonialCarousels();
  initLazyVideos();
});
