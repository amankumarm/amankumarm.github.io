gsap.from(".intro_illus", {opacity: 0, y: -30, duration: 0.7});
gsap.from(".mynav", {opacity: 0, y: -30, duration: 1,delay:1});
gsap.from("#name", {opacity: 0, x: -40, duration: 1,delay:1});
gsap.from(".desc", {opacity: 0, y: -40, duration: 1,delay:2});
gsap.from("#work_btn", {opacity: 0, y: -30, duration: 1,delay:2});
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






