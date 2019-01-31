import Swiper from '../../js/swiper';

export default class PageNav{

  constructor(){

    this.setScroll();

    window.addEventListener('resize', ()=>{

      this.setScroll();
  
    });

  }

  setScroll(){

    let list =  document.querySelector('.pageNav__list');
    let item =  document.querySelectorAll('.pageNav__item');

    if (window.matchMedia('(max-width: 1100px)').matches) {

      list.classList.add('swiper-wrapper');

      for(let i = 0; i < item.length; i++){

        item[i].classList.add('swiper-slide');

      }

      var scrollSlider = new Swiper ('.pageNav', {

        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: false,
        touchRatio: 1,
        freeMode: true,
      
      });

    } else{

      list.classList.remove('swiper-wrapper');

      for(let i = 0; i < item.length; i++){

        item[i].classList.remove('swiper-slide');

      }

    }

  }

}