import VSwiper from "./modules/VSwiper";
import Countup from './custom_modules/Countup';
import Video from "./modules/Video";
import Content from "./modules/Content";
import Nav from "./modules/Nav";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
	function initCompanySlider() {
		swiper.init(".tmpl-hh__company-slider", {
			loop: true,
			slidesPerView: 6,
			autoHeight: true,
			bulletActiveClass: '.tmpl-hh__company-slider-pagination-active',
			pagination: {
				el: '.tmpl-hh__company-slider__pagination',
				clickable: true,
			},
		});
	}

	const scrollElements = document.querySelectorAll(".tmpl-hh__s-stats");
	const elementInView = (el, dividend = 1) => {  
		const elementTop = el.getBoundingClientRect().top;  
		return (    
			elementTop <=    
			(window.innerHeight || document.documentElement.clientHeight) / dividend  );};
			const handleScrollAnimation = () => {  
				scrollElements.forEach((el) => {    
					if (elementInView(el, 1.25)) {      
						new Countup(".tmpl-hh__s-stats");
					}  
				})
			}
			window.addEventListener("scroll", () => {   handleScrollAnimation();});
			
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	const swiper = new VSwiper();
	new Video();
	new Content();
	new Nav();

	initCompanySlider()