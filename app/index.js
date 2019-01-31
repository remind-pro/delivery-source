import './sass/style.scss';
import './sass/normalize.min.css';
import './js/swiper-init';
import SelectCity from './blocks/selectСity/selectСity';
import ProductCard from './blocks/productCard/productCard';
import Catalog from './blocks/catalog/catalog';
import MobileMenu from './blocks/mobileMenu/mobileMenu';
import PageNav from './blocks/pageNav/pageNav';

document.addEventListener('DOMContentLoaded',()=>{
  
  let selectCity = new SelectCity();
  let productCard = new ProductCard();
  let catalog = new Catalog();
  let mobileMenu = new MobileMenu();
  let pageNav = new PageNav();

});