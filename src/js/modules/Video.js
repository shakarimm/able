function Video() {
	let classes = {
		item: 'tmpl-hh__video',
		itemPlaying: 'tmpl-hh__video--playing',
	};

	let getVideoFrame = function (videoId, source) {
		let iframe = document.createElement('iframe');
			iframe.frameBorder = "0";
			iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
			iframe.allowFullscreen = "";

		switch (source) {
			case "vimeo":
				iframe.src = 'https://player.vimeo.com/video/' + videoId + '?autoplay=1';
				break;
			default:
				iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&controls=1&showinfo=0';
		}

		return iframe;
	};
	let play = function (item) {
		if (item.classList.contains(classes.itemPlaying)) {
			return false;
		}

		let videoId = item.getAttribute('data-video-id'),
			source = item.getAttribute('data-video-source'),
			iframe = getVideoFrame(videoId, source);

		item.classList.add(classes.itemPlaying);
		item.appendChild(iframe);
	};
	let listenPlayClick = function () {
		let items = document.getElementsByClassName(classes.item);

		for (let i = 0; i < items.length; i++) {
			let item = items[i];

			item.addEventListener('click', function () {
				play(item);
			});
		}
	};
	let init = function () {
		listenPlayClick();
	};

	this.destroy = function (item) {
		item.classList.remove(classes.itemPlaying);
		item.removeChild(item.querySelector('iframe'));
	};

	init();
}

export default Video;
