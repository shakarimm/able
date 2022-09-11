import closest from "./Closest";

function Nav() {
	let nav, btn, opened = false;
	let classes = {
		nav: {
			base: 'nav',
			opened: 'nav--opened'
		},
		btn: {
			base: 'nav-btn',
			active: 'nav-btn--active',
			closed: 'nav-btn--closed'
		}
	};

	let close = function () {
		opened = false;
		nav.classList.remove(classes.nav.opened);
		btn.classList.remove(classes.btn.active);
		btn.classList.add(classes.btn.closed);
	};
	let open = function () {
		opened = true;
		nav.classList.add(classes.nav.opened);
		btn.classList.remove(classes.btn.closed);
		btn.classList.add(classes.btn.active);
	};

	let headerNav = document.querySelector('.header__nav')
	let tabs = document.querySelectorAll('.content-tab')
	// let navs = document.querySelectorAll('.nav__item--parent')
	headerNav.addEventListener('click', function () {
		opened = true;
		nav.classList.add(classes.nav.opened);
		btn.classList.remove(classes.btn.closed);
		btn.classList.add(classes.btn.active);
	})
	for (let tab of tabs){
		tab.addEventListener('click', function (event) {
			event.stopPropagation()
			opened = false;
			nav.classList.remove(classes.nav.opened);
			btn.classList.remove(classes.btn.active);
			btn.classList.add(classes.btn.closed);
		})
	}
	// let currentNav = null
	// for (let nav of navs){
	// 	nav.addEventListener('click', () => {
	// 		if (currentNav === nav){
	// 			nav.firstElementChild.classList.remove('nav__item-menu--active')
	// 			currentNav = null
	// 		}else{
	// 			navs.forEach(nav => nav.firstElementChild.classList.remove('nav__item-menu--active'))
	// 			nav.firstElementChild.classList.add('nav__item-menu--active')
	// 			currentNav = nav
	// 		}
	// 	})
	// }

	let toggle = function () {
		if(opened){
			close();
		}else{
			open();
		}
	};
	let listenBtnClick = function () {
		btn.addEventListener('click', toggle);
	};
	let listenOutClick = function (){
		document.addEventListener('mousedown', function (event) {
			if (!event.target) return;
			if(!opened) return;
			if(event.target !== btn && !closest(event.target, '.' + classes.btn.base)){
				close();
			}
		});
	}
	let init = function () {
		nav = document.querySelector('.' + classes.nav.base);
		btn = document.querySelector('.' + classes.btn.base);

		listenOutClick();
		listenBtnClick();
	};

	init();
}

export default Nav;
