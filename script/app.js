const menuBtn = document.querySelecor(".menu-icon");
const menuBtn = document.querySelector("");
let tl = gsap.timeline();
const handleMenu = () => {
  tl.to(".menu-page", { y: 0, ease: "elastic" });
};
menuBtn.addEventListener("click", handleeMenu);
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
});
