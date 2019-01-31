export default class ProductCard{

  constructor(){

    this.productCard = document.querySelectorAll('.productCard');

    this.hideDropdownItem();

    document.addEventListener('click', e => this.dropDown(e));
    window.addEventListener('resize', ()=>{

      this.hideDropdownItem();
  
    });

  }

  hideDropdownItem(){

    if (window.matchMedia('(max-width: 640px)').matches){

      for(let i = 0; i < this.productCard.length; i++){

        this.dropDownItem = this.productCard[i].querySelectorAll('.productCard__item');
  
        for(let i = 0; i < this.dropDownItem.length; i++){
  
          if(i !== 0){
            this.dropDownItem[i].classList.remove('productCard__item--hidden');
          }
  
        }
  
      }

      return;
    }

    for(let i = 0; i < this.productCard.length; i++){

      this.dropDownItem = this.productCard[i].querySelectorAll('.productCard__item');

      for(let i = 0; i < this.dropDownItem.length; i++){

        this.dropDownItem[0].style.zIndex = '2';

        if(i !== 0){
          this.dropDownItem[i].classList.add('productCard__item--hidden');
        }

      }

    }

  }

  dropDown(e){

    if (window.matchMedia('(max-width: 640px)').matches){
      return;
    }

    let t = e.target;

    while(t != document.body){

      if(t.classList.contains('productCard__dropDown')){

        let dropDownItem = t.querySelectorAll('.productCard__item');
        let arrow = t.querySelector('.productCard__arrow');

        if(arrow){
          arrow.classList.toggle('productCard__arrow--active');

        }
  
        for(let i = 0; i < dropDownItem.length; i++){
  
          if(i !== 0){

            dropDownItem[i].classList.toggle('productCard__item--hidden');

          }
  
        }

        return;

      }

      t = t.parentNode;
      
    }

  }

}