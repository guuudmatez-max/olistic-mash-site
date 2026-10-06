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

document.addEventListener("DOMContentLoaded", () => {
  initStacchi();
  initInvitoGuida();
  initMenuServizi();
  initMobileNav();
  initTestimonialCarousels();
  initLazyVideos();
});
