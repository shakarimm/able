import closest from "./Closest";

function Nav() {
	let nav, btn, opened = false;
	let classes = {
		nav: {
			base: 'tmpl-hh__nav',
			opened: 'tmpl-hh__nav--opened'
		},
		btn: {
			base: 'tmpl-hh__nav-btn',
			active: 'tmpl-hh__nav-btn--active',
			closed: 'tmpl-hh__nav-btn--closed'
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
