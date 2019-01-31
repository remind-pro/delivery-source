export default class SelectCity{

  constructor(){

    this.selectWrap = document.querySelector('.selectCity');
    this.overlay = document.querySelector('.overlay');
    this.firstScreen = document.querySelector('.firstScreen');

    document.addEventListener('click', e => this.openSelectCity(e));
    document.addEventListener('click', e => this.closeCity(e));
    
    window.addEventListener('resize', e=>{

      this.closeCity(e);
  
    });
    
  }

  closeCity(e){
    
    if(e.type === 'resize'){

      if (window.matchMedia('(max-width: 640px)').matches){

        this.selectWrap.classList.remove('selectCity--active');
        this.overlay.style.display = 'none';
        this.firstScreen.style.visibility = 'visible';
        
      }

      return;
    }

    let t = e.target;

    if(t.classList.contains('overlay')){

      this.selectWrap.classList.remove('selectCity--active');
      this.overlay.style.display = 'none';
      this.firstScreen.style.visibility = 'visible';

      return;
    }

    while(t !== document.body){

      if(t.classList.contains('selectCity__close')){

        this.selectWrap.classList.remove('selectCity--active');
        this.overlay.style.display = 'none';
        this.firstScreen.style.visibility = 'visible';

        return;
      }

      t = t.parentNode;

    }

  }

  openSelectCity(e){

    let t = e.target;

    while(t !== document.body){

      if(t.classList.contains('location')){

        this.selectWrap.classList.add('selectCity--active');
        this.overlay.style.display = 'block';
        this.firstScreen.style.visibility = 'hidden';

        return;

      }

      t = t.parentNode;
    }

  }

}