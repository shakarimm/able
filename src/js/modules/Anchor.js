function Anchor() {
	let init = function () {
		let anchors = document.querySelectorAll('.tmpl-hh__anchor[href^="#"]');
		for (let i = 0; i < anchors.length; i++) {
			const anchor = anchors[i];
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(anchor.getAttribute("href")).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
					inline: 'start',
				});
			});
		}
	}

	init();
}

export default Anchor;
