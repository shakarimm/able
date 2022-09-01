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
			
	const tabsBtn = document.querySelectorAll(".tmpl-hh__tabs__nav-btn")
	const tabsItem = document.querySelectorAll(".tmpl-hh__tabs__item")

	tabsBtn.forEach(onTabClick)

	function onTabClick(item) {
		item.addEventListener("click", function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab")
			let currentTab = document.querySelector(tabId)

			if( !currentBtn.classList.contains("tmpl-hh__tabs__nav-btn--active") ) {
				tabsBtn.forEach(function(item) {
					item.classList.remove("tmpl-hh__tabs__nav-btn--active")
				})
	
				tabsItem.forEach(function(item) {
					item.classList.remove("tmpl-hh__tabs__item--active")
				})
	
				currentBtn.classList.add("tmpl-hh__tabs__nav-btn--active")
				currentTab.classList.add("tmpl-hh__tabs__item--active")
			}
		})
	}

	document.querySelector(".tmpl-hh__tabs__nav-btn").click()
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