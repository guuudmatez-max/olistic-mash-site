// ----------------------------
// IMPORTS VITE
// ----------------------------
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
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initTestimonialCarousels();
  initLazyVideos();
});
