const menuBtn = document.querySelector(".menu-icon");
const aaaBtn = document.querySelector(".aaa");
let menuOpenTl = gsap.timeline({ reversed: true });

menuBtn.addEventListener("click", () => {
  animateOpenNav();
});

const animateOpenNav = () => {
  menuOpenTl
    .to(".menu-page", {
      ease: "power4.out(1, 0.3)",
      x: 0,
      display: "flex",
      duration: 0.3,
    })
    .to(".nav-item", {
      x: 0,
      opacity: 1,
      duration: 0.1,
      stagger: { each: 0.1, ease: "power2.easeInOut" },
    });
  menuOpenTl.reversed(!menuOpenTl.reversed());
};

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
});
