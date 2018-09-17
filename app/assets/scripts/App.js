import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
