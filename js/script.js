const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function menuanimation(){
  var menu = document.querySelector("nav h3")
var fullscr = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var sum = 0
menu.addEventListener(
  "click",
  function () {
    if (sum == 0) {
      fullscr.style.top ="12%"
      navimg.style.opacity = 0
      sum = 1
    } else {
      fullscr.style.top = "-100%"
      navimg.style.opacity = 1
      sum = 0
    }
  })
 } 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
    loader.style.top = "-100%"
  }, 4200)
}
loaderAnimation()
menuanimation()

// var loader=document.querySelector("#loader")
// setTimeout(function(){
//  loader.style.top="-100%"
// },3000)


function scrollToServices() {
  const servicesSection = document.querySelector('.services-list');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
}



 