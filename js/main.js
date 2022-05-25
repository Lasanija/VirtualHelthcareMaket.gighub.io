const swiper = new Swiper('.swiper', {
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
let navbar = document.getElementById('navbar').classList
let burger = document.getElementById('burger')

window.addEventListener('scroll', e => {
  if(pageYOffset > 300) {
    navbar.add('nav-scrolled')
    burger.classList.add('burger-scrolled')
  }
  else {
    navbar.remove('nav-scrolled')
    burger.classList.remove('burger-scrolled')
  }
})
