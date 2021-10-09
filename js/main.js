const swiper = new Swiper('.ex1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

const swiper2 = new Swiper('.ex2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const swiper3 = new Swiper('.ex3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,

  autoplay: {
      delay: 1750,
  },

  pagination: {
      el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});