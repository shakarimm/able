function VSwiper() {
	let prefix = "tmpl-hh__";
	let defaultParams = {
		containerModifierClass: prefix + 'swiper-container-',
		slideClass: prefix + 'swiper-slide',
		slideActiveClass: prefix + 'swiper-slide-active',
		slideDuplicateActiveClass: prefix + 'swiper-slide-duplicate-active',
		slideVisibleClass: prefix + 'swiper-slide-visible',
		slideDuplicateClass: prefix + 'swiper-slide-duplicate',
		slideNextClass: prefix + 'swiper-slide-next',
		slideDuplicateNextClass: prefix + 'swiper-slide-duplicate-next',
		slidePrevClass: prefix + 'swiper-slide-prev',
		slideDuplicatePrevClass: prefix + 'swiper-slide-duplicate-prev',
		slideBlankClass: prefix + 'swiper-slide-invisible-blank',
		wrapperClass: prefix + 'swiper-wrapper',
		navigation: {
			disabledClass: prefix + 'swiper-button-disabled',
			hiddenClass: prefix + 'swiper-button-hidden',
			lockClass: prefix + 'swiper-button-lock'
		},
		pagination: {
			bulletClass: prefix + 'swiper-pagination-bullet',
			bulletActiveClass: prefix + 'swiper-pagination-bullet-active',
			modifierClass: prefix + 'swiper-pagination-',
			currentClass: prefix + 'swiper-pagination-current',
			totalClass: prefix + 'swiper-pagination-total',
			hiddenClass: prefix + 'swiper-pagination-hidden',
			progressbarFillClass: prefix + 'swiper-pagination-progressbar-fill',
			clickableClass: prefix + 'swiper-pagination-clickable',
			lockClass: prefix + 'swiper-pagination-lock',
			progressbarOppositeClass: prefix + 'swiper-pagination-progressbar-opposite',
		},
		scrollbar: {
			lockClass: prefix + 'swiper-scrollbar-lock',
			dragClass: prefix + 'swiper-scrollbar-drag',
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
