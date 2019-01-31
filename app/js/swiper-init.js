'use strict';

import Swiper from './swiper.js';

var banners = new Swiper ('.swiper-container', {

  direction: 'horizontal',
  loop: false,
  touchRatio: 1,

  pagination: {
    el: '.pagination--banners',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.banners__paginationArrow--right',
    prevEl: '.banners__paginationArrow--left',
  }
});


var sale = new Swiper ('.swiper-container--sale', {

  direction: 'horizontal',
  loop: false,
  touchRatio: 1,
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,

  breakpoints: {
    
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },

  pagination: {
    el: '.pagination--sale',
    bulletClass: 'pagination__item--sale',
    bulletActiveClass: 'pagination__item--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.sale__arrow--next',
    prevEl: '.sale__arrow--prev',
  }
});


var saleHits = new Swiper ('.swiper-container--saleHits', {

  direction: 'horizontal',
  loop: false,
  touchRatio: 1,
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,

  breakpoints: {
    
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },

  pagination: {
    el: '.pagination--sale',
    bulletClass: 'pagination__item--sale',
    bulletActiveClass: 'pagination__item--active',
    clickable: true,
  },

  navigation: {
    nextEl: '.saleHits__arrow--next',
    prevEl: '.saleHits__arrow--prev',
  }
});