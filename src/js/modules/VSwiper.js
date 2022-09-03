function VSwiper() {
	let defaultParams = {
		containerModifierClass:  'swiper-container-',
		slideClass:  'swiper-slide',
		slideActiveClass:  'swiper-slide-active',
		slideDuplicateActiveClass:  'swiper-slide-duplicate-active',
		slideVisibleClass:  'swiper-slide-visible',
		slideDuplicateClass:  'swiper-slide-duplicate',
		slideNextClass:  'swiper-slide-next',
		slideDuplicateNextClass:  'swiper-slide-duplicate-next',
		slidePrevClass:  'swiper-slide-prev',
		slideDuplicatePrevClass:  'swiper-slide-duplicate-prev',
		slideBlankClass:  'swiper-slide-invisible-blank',
		wrapperClass:  'swiper-wrapper',
		navigation: {
			disabledClass:  'swiper-button-disabled',
			hiddenClass:  'swiper-button-hidden',
			lockClass:  'swiper-button-lock'
		},
		pagination: {
			bulletClass:  'swiper-pagination-bullet',
			bulletActiveClass:  'swiper-pagination-bullet-active',
			modifierClass:  'swiper-pagination-',
			currentClass:  'swiper-pagination-current',
			totalClass:  'swiper-pagination-total',
			hiddenClass:  'swiper-pagination-hidden',
			progressbarFillClass:  'swiper-pagination-progressbar-fill',
			clickableClass:  'swiper-pagination-clickable',
			lockClass:  'swiper-pagination-lock',
			progressbarOppositeClass:  'swiper-pagination-progressbar-opposite',
		},
		scrollbar: {
			lockClass:  'swiper-scrollbar-lock',
			dragClass:  'swiper-scrollbar-drag',
		}
	};

	this.init = function (el, slierParams) {
		if (!slierParams) slierParams = {};

		let defaultParamsKeys = Object.keys(defaultParams);

		for(let i = 0; i < defaultParamsKeys.length; i++){
			let index = defaultParamsKeys[i],
				param = defaultParams[index];

			if(!slierParams[index]){
				slierParams[index] = param;
			}else if(param instanceof Object){
				let paramKeys = Object.keys(param);

				for(let i2 = 0; i2 < paramKeys.length; i2++){
					let index2 = paramKeys[i2],
						param2 = param[index2];

					if(!slierParams[index][index2]){
						slierParams[index][index2] = param2;
					}
				}
			}
		}

		return new Swiper(el, slierParams);
	}
}

export default VSwiper;
