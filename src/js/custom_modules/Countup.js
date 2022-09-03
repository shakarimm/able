/*
--------------------------------------------
--------------------------------------------
		  		COUNTUP
--------------------------------------------
--------------------------------------------
*/
function Countup(block) {
	let classes = {
		base: 'countup',
		withoutSeparate: 'countup--without-separate',
		initialized: 'countup--initialized'
	};

	let duration = 2000,
		frameCount = 1000 / 60;

	let easeOutCubic = function (val) {
		return 1 - Math.pow(1 - val, 3);
	};
	let animate = function (el) {
		if(el.classList.contains(classes.initialized)){
			return false;
		}
		el.classList.add(classes.initialized);

		let frame = 0,
			totalFrames = Math.round(duration / frameCount),
			dataVal = el.getAttribute('data-value').replace(/,/, "."),
			decimalCount = parseInt(el.dataset.decimalCount || 0),
			decimalSymbol = el.dataset.decimalSymbol || "",
			thousandSymbol = el.dataset.thousandSymbol || " ",
			isFloat = dataVal.indexOf(',') !== -1 || dataVal.indexOf('.') !== -1,
			countTo = parseFloat(dataVal);

		let counter = setInterval(function(){
			frame++;

			const progress = easeOutCubic(frame / totalFrames);
			let currentCount = countTo * progress;

			if(isFloat){
				currentCount = currentCount.toFixed(2).toString(1);
			}else{
				currentCount = Math.round(currentCount);
			}

			if (parseFloat(el.innerHTML) !== currentCount) {
				if(currentCount > 999 && !el.classList.contains(classes.withoutSeparate)){
					currentCount = currentCount.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSymbol);
				}
				el.innerHTML = currentCount;
			}

			if (frame === totalFrames) {
				clearInterval(counter);
			}
		}, frameCount);
	};
	let init = function () {
		if (typeof block === "string")
			block = document.querySelector(block);
		let blockElement = block;
		let items = blockElement.getElementsByClassName(classes.base);

		for (let i = 0; i < items.length; i++){
			animate(items[i]);
		}
	};

	init();
}

export default Countup;
