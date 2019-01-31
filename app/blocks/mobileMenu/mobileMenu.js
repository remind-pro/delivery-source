export default class MobileMenu{

  constructor(){

    this.body = document.querySelector('body');
    this.menu = document.querySelector('.mobileMenu');
    this.menuWrap = document.querySelector('.mobileMenu__wrap');

    document.addEventListener('click', e => this.openClose(e));

  }

  openClose(e){
    
    let t = e.target;

    while( t !== document.body){

      if(t.classList.contains('menuControl')){

        this.menu.classList.toggle('mobileMenu--active');
        this.body.classList.toggle('pageBody--hidden');
        this.menuWrap.classList.remove('mobileMenu__wrap--active');

      }

      if(t.classList.contains('mobileMenu__openNav')){

        this.menuWrap.classList.toggle('mobileMenu__wrap--active');
        
      }

      t = t.parentNode;

    }

  }

}