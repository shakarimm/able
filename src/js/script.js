import VSwiper from "./modules/VSwiper";
import Countup from './custom_modules/Countup';
import Video from "./modules/Video";
import Content from "./modules/Content";
import Nav from "./modules/Nav";
// import closest from "./modules/Closest";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
	function initCompanySlider() {
		swiper.init(".company-slider", {
			loop: true,
			slidesPerView: 6,
			autoHeight: true,
			bulletActiveClass: '.company-slider-pagination-active',
			pagination: {
				el: '.company-slider__pagination',
				clickable: true,
			},
		});
	}

	function initCompanySecondSlider() {
		swiper.init(".company-slider__second", {
			loop: true,
			slidesPerView: 6,
			autoHeight: true,
			bulletActiveClass: '.company-slider__second-pagination-active',
			pagination: {
				el: '.company-slider__second__pagination',
				clickable: true,
			},
		});
	}

	function initCompanyThirdSlider() {
		swiper.init(".company-slider__third", {
			loop: true,
			slidesPerView: 6,
			autoHeight: true,
			bulletActiveClass: '.company-slider__third-pagination-active',
			pagination: {
				el: '.company-slider__third__pagination',
				clickable: true,
			},
		});
	}

	function initGallerySlider() {
		swiper.init(".gallery-slider", {
			loop: true,
			slidesPerView: 1,
			autoHeight: true,
			bulletActiveClass: '.gallery-slider-pagination-active',
			navigation: {
				prevEl: ".gallery-slider-arrow-prev",
				nextEl: ".gallery-slider-arrow-next",
			},
			pagination: {
				el: '.gallery-slider__pagination',
				clickable: true,
			},
		});
	}
/*
	--------------------------------------------
	--------------------------------------------
						STATS
	--------------------------------------------
	--------------------------------------------
 */
	const scrollElements = document.querySelectorAll(".s-stats");
	const elementInView = (el, dividend = 1) => {  
		const elementTop = el.getBoundingClientRect().top;  
		return (    
			elementTop <=    
			(window.innerHeight || document.documentElement.clientHeight) / dividend  );};
			const handleScrollAnimation = () => {  
				scrollElements.forEach((el) => {    
					if (elementInView(el, 1.25)) {      
						new Countup(".s-stats");
					}  
				})
			}
			window.addEventListener("scroll", () => {   handleScrollAnimation();});

	/*
	--------------------------------------------
	--------------------------------------------
						TABS
	--------------------------------------------
	--------------------------------------------
 */
			
	const tabsBtn = document.querySelectorAll(".tabs__nav-btn")
	const tabsItem = document.querySelectorAll(".tabs__item")
	tabsBtn.forEach(onTabClick)

	function onTabClick(item) {
		item.addEventListener("click", function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab")
			let currentTab = document.querySelector(tabId)
			if( !currentBtn.classList.contains("tabs__nav-btn--active") ) {
				tabsBtn.forEach(function(item) {
					item.classList.remove("tabs__nav-btn--active")
				})
				tabsItem.forEach(function(item) {
					item.classList.remove("tabs__item--active")
				})
				currentBtn.classList.add("tabs__nav-btn--active")
				currentTab.classList.add("tabs__item--active")
			}else{
				currentBtn.classList.remove('tabs__nav-btn--active')
				currentTab.classList.remove('tabs__item--active')
			}
		})
	}

	document.querySelector(".tabs__nav-btn").click()

	/*
	--------------------------------------------
	--------------------------------------------
						INPUT MASK
	--------------------------------------------
	--------------------------------------------
 */
		
	let phoneMask = document.getElementById('phone-mask');
	let phoneMask2 = document.getElementById('phone-mask-two');
	let phoneMask3 = document.getElementById('phone-mask-three');
	let phoneMask4 = document.getElementById('phone-mask-four');
	let maskOptions = {
		mask: '+{7}(000)000-00-00'
	};
	let mask = IMask(phoneMask, maskOptions);
	let mask2 = IMask(phoneMask2, maskOptions);
	let mask3 = IMask(phoneMask3, maskOptions);
	let mask4 = IMask(phoneMask4, maskOptions);
/*
	--------------------------------------------
	--------------------------------------------
						FORM
	--------------------------------------------
	--------------------------------------------
 */

	document.addEventListener('DOMContentLoaded', function (){
		const form1 = document.getElementById('form1')
		const form2 = document.getElementById('form2')
		const form3 = document.getElementById('form3')
		const form4 = document.getElementById('form4')
		form1.addEventListener('submit', formSend1)
		form2.addEventListener('submit', formSend2)
		form3.addEventListener('submit', formSend3)
		form4.addEventListener('submit', formSend4)

		async function formSend1(e){
			e.preventDefault()
			let error = formValidate1(form1)
			let formData = new FormData(form1)
			if(error === 0){
				debugger
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				})
				if (response.ok){
					let result = await response.json()
					alert(result.message)
					form1.reset()
				}else{
					alert('Error')
				}
			}
		}
		async function formSend2(e){
			e.preventDefault()
			let error = formValidate2(form2)
			let formData = new FormData(form2)
			if(error === 0){
				debugger
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				})
				if (response.ok){
					let result = await response.json()
					alert(result.message)
					form2.reset()
				}else{
					alert('Error')
				}
			}
		}
		async function formSend3(e){
			e.preventDefault()
			let error = formValidate3(form3)
			let formData = new FormData(form3)
			if(error === 0){
				debugger
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				})
				if (response.ok){
					let result = await response.json()
					alert(result.message)
					form3.reset()
				}else{
					alert('Error')
				}
			}
		}
		async function formSend4(e){
			e.preventDefault()
			let error = formValidate4(form4)
			let formData = new FormData(form4)
			if(error === 0){
				debugger
				let response = await fetch('sendmail.php', {
					method: 'POST',
					body: formData
				})
				if (response.ok){
					let result = await response.json()
					alert(result.message)
					form4.reset()
				}else{
					alert('Error')
				}
			}
		}


		function formValidate1(form){
			let error = 0
			let formReq = document.querySelectorAll('.req1')
			for (let i=0; i<formReq.length; i++){
				const input = formReq[i]
				formRemoveError1(input)
				if (input.classList.contains('mail')){
					if (!emailTest(input)){
						formAddError1(input)
						error++
					}
				}else{
					if(input.value === ''){
						formAddError1(input)
						error++
					}
				}
			}
			return error
		}
		function formValidate2(form){
			let error = 0
			let formReq = document.querySelectorAll('.req2')
			for (let i=0; i<formReq.length; i++){
				const input = formReq[i]
				formRemoveError2(input)
				if (input.classList.contains('mail')){
					if (!emailTest(input)){
						formAddError2(input)
						error++
					}
				}else{
					if(input.value === ''){
						formAddError2(input)
						error++
					}
				}
			}
			return error
		}
		function formValidate3(form){
			let error = 0
			let formReq = document.querySelectorAll('.req3')
			for (let i=0; i<formReq.length; i++){
				const input = formReq[i]
				formRemoveError3(input)
				if (input.classList.contains('mail')){
					if (!emailTest(input)){
						formAddError3(input)
						error++
					}
				}else{
					if(input.value === ''){
						formAddError3(input)
						error++
					}
				}
			}
			return error
		}
		function formValidate4(form){
			let error = 0
			let formReq = document.querySelectorAll('.req4')
			for (let i=0; i<formReq.length; i++){
				const input = formReq[i]
				formRemoveError4(input)
				if (input.classList.contains('mail')){
					if (!emailTest(input)){
						formAddError4(input)
						error++
					}
				}else{
					if(input.value === ''){
						formAddError4(input)
						error++
					}
				}
			}
			return error
		}
		function formAddError1(input){
			input.parentElement.classList.add('error1')
			input.classList.add('error1')
		}
		function formRemoveError1(input){
			input.parentElement.classList.remove('error1')
			input.classList.remove('error1')
		}
		function formAddError2(input){
			input.parentElement.classList.add('error2')
			input.classList.add('error2')
		}
		function formRemoveError2(input){
			input.parentElement.classList.remove('error2')
			input.classList.remove('error2')
		}
		function formAddError3(input){
			input.parentElement.classList.add('error3')
			input.classList.add('error3')
		}
		function formRemoveError3(input){
			input.parentElement.classList.remove('error3')
			input.classList.remove('error3')
		}
		function formAddError4(input){
			input.parentElement.classList.add('error4')
			input.classList.add('error4')
		}
		function formRemoveError4(input){
			input.parentElement.classList.remove('error4')
			input.classList.remove('error4')
		}
		function emailTest(input){
			let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
			return reg.test(input.value)
		}
	})

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
	initCompanySecondSlider()
	initCompanyThirdSlider()
	initGallerySlider()