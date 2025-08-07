
import '../js/click';
import '../js/tabs'
import Swiper from 'swiper';
import {Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../scss/style.scss';


const swiper = new Swiper('.swiper', {
    modules: [Pagination, Autoplay],
    autoplay:true,
    pagination:{
        el: '.swiper-pagination',
    }
})


