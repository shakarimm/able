import closest from "./Closest";

/*
available options:
onInit: Function
onBeforeShow: Function
onAfterShow: Function
onBeforeHide: Function
onAfterHide: Function
*/
function Modal(modalSelector, options) {
	let classes = {
		pageWrapper: 'tmpl-hh__wrapper',
		modal: 'tmpl-hh__modal',
		modalShow: 'tmpl-hh__modal--show',
		window: 'tmpl-hh__modal__window',
		closeBtn: 'tmpl-hh__modal__close-btn',
	};
	let modal;
	let onInit = function (){},
		onBeforeShow = function (){},
		onAfterShow = function (){},
		onBeforeHide = function (){},
		onAfterHide = function (){};

	let hide = function(){
		onBeforeHide();
		modal.classList.remove(classes.modalShow);
		onAfterHide();
	};
	let show = function(){
		onBeforeShow();
		modal.classList.add(classes.modalShow);
		onAfterShow();
	};
	let center = function (){
		let wrapperPos = document.querySelector('.' + classes.pageWrapper).offsetTop,
			modalWindow = modal.querySelector('.' + classes.window),
			modalWindowHeight = parseInt(getComputedStyle(modalWindow)['height']);

		modalWindow.style.top = (window.pageYOffset - wrapperPos + (window.innerHeight / 2 - modalWindowHeight / 2)) + "px";
	};
	let listenModalOutClick = function (){
		document.addEventListener('mousedown', function (event) {
			if (!event.target) return;
			if (!event.target.classList.contains(classes.window) && !closest(event.target, '.' + classes.window)) {
				hide();
			}
		});
	}
	let listenCloseBtnClick = function (){
		const closeBtn = modal.querySelector('.' + classes.closeBtn);
		if (!closeBtn) return;
		closeBtn.addEventListener('click', hide);
	}
	let init = function(){
		modal = document.querySelector(modalSelector);
		if (!modal) {
			console.error('Modal with selector ' + modalSelector + ' not found');
			return;
		}
		if (options !== undefined && options instanceof Object) {
			if (options.onInit !== undefined && options.onInit instanceof Function) {
				onInit = options.onInit;
			}
			if (options.onBeforeShow !== undefined && options.onBeforeShow instanceof Function) {
				onBeforeShow = options.onBeforeShow;
			}
			if (options.onAfterShow !== undefined && options.onAfterShow instanceof Function) {
				onAfterShow = options.onAfterShow;
			}
			if (options.onBeforeHide !== undefined && options.onBeforeHide instanceof Function) {
				onBeforeHide = options.onBeforeHide;
			}
			if (options.onAfterHide !== undefined && options.onAfterHide instanceof Function) {
				onAfterHide = options.onAfterHide;
			}
		}
		listenModalOutClick();
		listenCloseBtnClick();
		onInit();
	}

	this.hide = hide;
	this.show = function(){
		center();
		show();
	};

	init();
}

export default Modal;
