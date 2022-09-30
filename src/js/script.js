import VSwiper from "./modules/VSwiper";
import Countup from './custom_modules/Countup';
import Video from "./modules/Video";
import Content from "./modules/Content";
import Nav from "./modules/Nav";
import Modal from "./modules/Modal";

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

	function initTeacherSlider1() {
		swiper.init(".teacher-slider1", {
			loop: true,
			slidesPerView: 1,
			autoHeight: true,
			bulletActiveClass: '.teacher-slider1-pagination-active',
			navigation: {
				prevEl: ".teacher-slider1-arrow-prev",
				nextEl: ".teacher-slider1-arrow-next",
			},
			pagination: {
				el: '.teacher-slider1__pagination',
				clickable: true,
			},
		});
	}

	function initTeacherSlider2() {
		swiper.init(".teacher-slider2", {
			loop: true,
			slidesPerView: 1,
			autoHeight: true,
			bulletActiveClass: '.teacher-slider2-pagination-active',
			navigation: {
				prevEl: ".teacher-slider2-arrow-prev",
				nextEl: ".teacher-slider2-arrow-next",
			},
			pagination: {
				el: '.teacher-slider2__pagination',
				clickable: true,
			},
		});
	}

	function initTeacherSlider3() {
		swiper.init(".teacher-slider3", {
			loop: true,
			slidesPerView: 1,
			autoHeight: true,
			bulletActiveClass: '.teacher-slider3-pagination-active',
			navigation: {
				prevEl: ".teacher-slider3-arrow-prev",
				nextEl: ".teacher-slider3-arrow-next",
			},
			pagination: {
				el: '.teacher-slider3__pagination',
				clickable: true,
			},
		});
	}

	function initTeacherSlider4() {
		swiper.init(".teacher-slider4", {
			loop: true,
			slidesPerView: 1,
			autoHeight: true,
			bulletActiveClass: '.teacher-slider4-pagination-active',
			navigation: {
				prevEl: ".teacher-slider4-arrow-prev",
				nextEl: ".teacher-slider4-arrow-next",
			},
			pagination: {
				el: '.teacher-slider4__pagination',
				clickable: true,
			},
		});
	}

	function initVideoSlider() {
		swiper.init(".video-slider", {
			loop: false,
			slidesPerView: 3,
			autoHeight: true,
			bulletActiveClass: '.video-slider-pagination-active',
			spaceBetween: 32,
			pagination: {
				el: '.video-slider__pagination',
				clickable: true,
			},
			breakpoints: {
				699: {
					slidesPerView: 1,
					spaceBetween: 0,
				}
			} 
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

	const scrollElementsSecond = document.querySelectorAll(".s-stats-second");
	const elementInViewSecond = (el, dividend = 1) => {  
		const elementTop = el.getBoundingClientRect().top;  
		return (    
			elementTop <=    
			(window.innerHeight || document.documentElement.clientHeight) / dividend  );};
			const handleScrollAnimationSecond = () => {  
				scrollElementsSecond.forEach((el) => {    
					if (elementInViewSecond(el, 1.25)) {      
						new Countup(".s-stats-second");
					}  
				})
			}
			window.addEventListener("scroll", () => {   handleScrollAnimationSecond();});
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
						INPUT MASK and FORM
	--------------------------------------------
	--------------------------------------------
 */

	const form1 = document.querySelector(".form1");
	const telSelector1 = form1.querySelector('input[type="tel"]')
	const inputMask1 = new Inputmask('+7 (999) 999-99-99')
	inputMask1.mask(telSelector1);

	const form2 = document.querySelector(".form2");
	const telSelector2 = form2.querySelector('input[type="tel"]')
	const inputMask2 = new Inputmask('+7 (999) 999-99-99')
	inputMask2.mask(telSelector2);

	const form3 = document.querySelector(".form3");
	const telSelector3 = form3.querySelector('input[type="tel"]')
	const inputMask3 = new Inputmask('+7 (999) 999-99-99')
	inputMask3.mask(telSelector3);

	const form4 = document.querySelector(".form4");
	const telSelector4 = form4.querySelector('input[type="tel"]')
	const inputMask4 = new Inputmask('+7 (999) 999-99-99')
	inputMask4.mask(telSelector4);

	new window.JustValidate('.form1', {
		rules: {
			tel: {
				required: true,
				function: () => {
					const phone = telSelector1.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10;
				}
			}
		}, 
		messages: {
			name: {
				required: 'Введите имя'
			},
			email: {
				email: 'Введите корректный email',
				required: 'Введите email'
			},
			tel: {
				required: 'Введите телефон'
			}
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						alert("Отправлено")
						console.log('Отправлено');
					}
				}
			}
	
			xhr.open('POST', 'https://formsubmit.co/shakarim-m@mail.ru', true);
			xhr.send(formData);
	
			thisForm.reset();
		}
	})

	new window.JustValidate('.form2', {
		rules: {
			tel: {
				required: true,
				function: () => {
					const phone = telSelector2.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10;
				}
			}
		}, 
		messages: {
			name: {
				required: 'Введите имя'
			},
			email: {
				email: 'Введите корректный email',
				required: 'Введите email'
			},
			tel: {
				required: 'Введите телефон'
			}
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						alert("Отправлено")
						console.log('Отправлено');
					}
				}
			}
	
			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);
	
			thisForm.reset();
		}
	})

	new window.JustValidate('.form3', {
		rules: {
			tel: {
				required: true,
				function: () => {
					const phone = telSelector3.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10;
				}
			}
		}, 
		messages: {
			name: {
				required: 'Введите имя'
			},
			email: {
				email: 'Введите корректный email',
				required: 'Введите email'
			},
			tel: {
				required: 'Введите телефон'
			}
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						alert("Отправлено")
						console.log('Отправлено');
					}
				}
			}
	
			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);
	
			thisForm.reset();
		}
	})

	new window.JustValidate('.form4', {
		rules: {
			tel: {
				required: true,
				function: () => {
					const phone = telSelector4.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10;
				}
			}
		}, 
		messages: {
			name: {
				required: 'Введите имя'
			},
			email: {
				email: 'Введите корректный email',
				required: 'Введите email'
			},
			tel: {
				required: 'Введите телефон'
			}
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						alert("Отправлено")
						console.log('Отправлено');
					}
				}
			}
	
			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);
	
			thisForm.reset();
		}
	})


	window.addEventListener('load', function(){
		let loc = document.getElementById("74518063311cbf90d5a");
		loc.value = window.location.href;
		let ref = document.getElementById("74518063311cbf90d5aref");
		ref.value = document.referrer;
		
		let statUrl = "https://ableacademy.getcourse.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
		 + "&loc=" + encodeURIComponent(document.location.href);
		document.getElementById('gccounterImgContainer').innerHTML
		 = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
	 });

	//  let formWrapper = document.getElementById("formWrapper");
	//  let fsBtn = document.getElementById("fsBtn");
	//  let wrapper = document.getElementById("wrapper")

	//  fsBtn.addEventListener("click", ()=> {
	// 	formWrapper.classList.add("s-fs__form-wrapper--active")
	// 	wrapper.classList.add("wrapper--active")
	//  })
/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	function listenTestModalBtnClick() {
		document.getElementById('fsBtn').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickOne() {
		document.getElementById('fsBtnOne').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickTwo() {
		document.getElementById('fsBtnTwo').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickThree() {
		document.getElementById('fsBtnThree').addEventListener('click', function () {
			testModal.show();
		});
	}
/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	function listenTestModalBtnClickss() {
		document.getElementById('ssBtn').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickssOne() {
		document.getElementById('ssBtnOne').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickssTwo() {
		document.getElementById('ssBtnTwo').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickssThree() {
		document.getElementById('ssBtnThree').addEventListener('click', function () {
			testModal.show();
		});
	}
/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	function listenTestModalBtnClickts() {
		document.getElementById('tsBtn').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClicktsOne() {
		document.getElementById('tsBtnOne').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClicktsTwo() {
		document.getElementById('tsBtnTwo').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClicktsThree() {
		document.getElementById('tsBtnThree').addEventListener('click', function () {
			testModal.show();
		});
	}
	/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	function listenTestModalBtnClickbs() {
		document.getElementById('bsBtn').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickbsOne() {
		document.getElementById('bsBtnOne').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickbsTwo() {
		document.getElementById('bsBtnTwo').addEventListener('click', function () {
			testModal.show();
		});
	}

	function listenTestModalBtnClickbsThree() {
		document.getElementById('bsBtnThree').addEventListener('click', function () {
			testModal.show();
		});
	}
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
	const testModal = new Modal('#test-modal');

	listenTestModalBtnClick();
	listenTestModalBtnClickOne();
	listenTestModalBtnClickTwo();
	listenTestModalBtnClickThree();
/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	listenTestModalBtnClickss();
	listenTestModalBtnClickssOne();
	listenTestModalBtnClickssTwo();
	listenTestModalBtnClickssThree();

/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	listenTestModalBtnClickts();
	listenTestModalBtnClicktsOne();
	listenTestModalBtnClicktsTwo();
	listenTestModalBtnClicktsThree();

/*
	--------------------------------------------
	--------------------------------------------
						MODAL
	--------------------------------------------
	--------------------------------------------
 */
	listenTestModalBtnClickbs();
	listenTestModalBtnClickbsOne();
	listenTestModalBtnClickbsTwo();
	listenTestModalBtnClickbsThree();

	initCompanySlider()
	initCompanySecondSlider()
	initCompanyThirdSlider()
	initGallerySlider()
	initVideoSlider()
	initTeacherSlider1()
	initTeacherSlider2()
	initTeacherSlider3()
	initTeacherSlider4()