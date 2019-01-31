export default class Catalog{

  constructor(){

    this.catalog = document.querySelector('.catalog');
    this.firstScreen = document.querySelector('.firstScreen');
    this.catalogHeading = document.querySelector('.catalog__heading');
    this.catalogBtn = document.querySelector('.catalogBtn');
    this.catalogBtnSvg = document.querySelector('.catalogBtn__btn');
    this.overlay = document.querySelector('.overlay');
    this.pageHeader = document.querySelector('.pageHeader');
    this.svg = document.querySelectorAll('.pageNav__svg');
    this.pageNav = document.querySelector('.pageNav');

    document.addEventListener('mouseover', e => this.openCatalog(e));

  }

  closeCatalog(){

    let activeLink = document.querySelector('.pageNav__link--active');
    let activeArrow = document.querySelector('.pageNav__arrow--active');

    if(activeLink){
      activeLink.classList.remove('pageNav__link--active');
    }

    if(activeArrow){
      activeArrow.classList.remove('pageNav__arrow--active');
    }

    this.catalog.classList.remove('catalog--active');
    this.overlay.classList.remove('overlay--active');
    this.catalogBtn.classList.remove('catalogBtn--active');
    this.pageNav.classList.remove('pageNav--active');
    this.catalogBtnSvg.classList.remove('catalogBtn__btn--active');
        
    for(let i = 0; i < this.svg.length; i++){

      this.svg[i].classList.remove('pageNav__svg--active');

    }

  }

  openCatalog(e){

    if (window.matchMedia('(max-width: 1100px)').matches){
      return;
    }

    let t = e.target;
    
    if(!this.firstScreen.contains(t) && !t.classList.contains('openCatalog')){

      if(!t.classList.contains('openCatalog')){
        this.closeCatalog();
      }

      return;

    }
    while(t !== document.body){

      if(t.classList.contains('pageNav__link')){

        let activeLink = document.querySelector('.pageNav__link--active');
        let activeArrow = document.querySelector('.pageNav__arrow--active');
        let arrow = t.querySelector('.pageNav__arrow');

        if(activeLink){
          activeLink.classList.remove('pageNav__link--active');
          activeArrow.classList.remove('pageNav__arrow--active');
        }

        t.classList.add('pageNav__link--active');
        arrow.classList.add('pageNav__arrow--active');
        this.catalogHeading.innerHTML = t.innerText;

      }

      if(t.classList.contains('openCatalog')){

        this.catalog.classList.add('catalog--active');
        this.overlay.classList.add('overlay--active');
        this.catalogBtn.classList.add('catalogBtn--active');
        this.pageNav.classList.add('pageNav--active');
        this.catalogBtnSvg.classList.add('catalogBtn__btn--active');
        
        for(let i = 0; i < this.svg.length; i++){

          this.svg[i].classList.add('pageNav__svg--active');

        }

      }

      t = t.parentNode;
    }

  }

}