import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "75%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
