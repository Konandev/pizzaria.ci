const openbtn = document.getElementById("menu-open-button");
const closebtn = document.getElementById("menu-close-button");
const menu = document.querySelector("nav ul");

//ouverture du menu
openbtn.addEventListener("click", () => {
  menu.style.left= "0";
});
//fermerture du menu
closebtn.addEventListener("click", () => {
  menu.style.left= "-300px";
});

//swiper du temoignage
const swiper = new Swiper('.temoignage-swiper', {
  loop: true,
  spaceBetween: 30,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },
});

  
/*SLIDER*/

constswiper = new Swiper('.slider-wrapper', {
  
  loop: false,
  grabCursor:true,
  spaceBetween:20 ,

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

  //responsive breakpoints
  breakpoints :{
     0:{
      slidesPerView:1
     },

     600:{
      slidesPerView:2
     },

     1024:{
      slidesPerView:3
     }
  },

});