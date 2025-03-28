const menuOpenButton = document.querySelector("#menu-open-button");
const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;

menuOpenButton.addEventListener("click", () => {
    body.classList.add("show-mobile-menu");
});
navLinks.forEach(link => {
  link.addEventListener("click",() => menuOpenButton.click());
});

menuCloseButton.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
});
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  spaceBetween:25,
  grapCursor:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   additional by himself i.e responsive breakpoints
breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
   
}
});
