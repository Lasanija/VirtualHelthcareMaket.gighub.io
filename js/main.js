new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//  navbar animation on scroll
const navbar = document.getElementById('navbar'),
burger = document.getElementById('burger'),
menu = document.getElementById('menu')

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.classList.add('nav-scrolled')
    burger.classList.add('burger-scrolled')
  }
  else {
    navbar.classList.remove('nav-scrolled')
    burger.classList.remove('burger-scrolled')
  }
});
//active class for nav elements
navbar.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navbar.querySelector("a.active")?.classList.remove("active");
    a.classList.add("active");
  });
});
//burger change lines on cross, display menu, remove active class from nav a classList
burger.addEventListener('click',() => {
  burger.classList.toggle('burger-on-cross')
  menu.classList.toggle('burger-menu-active')
  navbar.querySelectorAll("a").forEach(a => {
   navbar.querySelector("a.active")?.classList.remove("active")});
})
