(function indexIIFE() {
	function homePageAnim() {
		const $background = document.querySelector(".background");
		const $frontText = document.querySelector(".front-text");
		const $firstBtn = document.querySelector("#passion");
		const $secondBtn = document.querySelector("#dropout");
		const $thirdBtn = document.querySelector("#yay");
		const $main = document.querySelector(".content");
		const tltransition = new TimelineMax({ paused: true })
			.fromTo(
				$background,
				1.6,
				{
					autoAlpha: 0,
					xPercent: -100,
					clipPath: "polygon(0 0, 83% 0, 83% 100%, 0 100%)",
				},
				{
					autoAlpha: 1,
					ease: Power3.easeOut,
					xPercent: 0,
					clipPath: "polygon(0 0, 62% 0, 51% 100%, 0% 100%)",
				}
			)
			// .fromTo(
			// 	$firstBtn,
			// 	1,
			// 	{ xPercent: -100 },
			// 	{
			// 		xPercent: 0,
			// 		ease: Bounce.easeOut,
			// 	},
			// 	"-=0.5"
			// )
			// .fromTo(
			// 	$secondBtn,
			// 	1,
			// 	{ xPercent: -100 },
			// 	{
			// 		xPercent: 0,
			// 		ease: Bounce.easeOut,
			// 	},
			// 	"-=0.5"
			// )
			// .fromTo(
			// 	$thirdBtn,
			// 	1,
			// 	{ xPercent: -100 },
			// 	{
			// 		xPercent: 0,
			// 		ease: Bounce.easeOut,
			// 	},
			// 	"-=0.5"
			// )
			.fromTo(
				$main,
				1,
				{ xPercent: -100, opacity: 0 },
				{
					xPercent: 0,
					opacity: 1,
					ease: Power3.easeOut,
				},
				"-=1"
			);

		tltransition.play();
	}
	function videoPageAnim() {
		const $videoPage = document.querySelector(".video-page");
		const $frameBlack = document.querySelector(".page-transition-white");
		const $frameRed = document.querySelector(".page-transition-green");
		const $button = document.querySelector("#button");
		const $closeVideoBtn = document.querySelector("#close-video");

		const tltransition = new TimelineMax({ paused: true })
			.fromTo(
				$frameRed,
				2.2,
				{ scaleX: 0 },
				{ scaleX: 1, transformOrigin: "left", ease: Power4.easeInOut }
			)
			.fromTo(
				$frameBlack,
				2.2,
				{ scaleX: 0 },
				{ scaleX: 1, transformOrigin: "left", ease: Power4.easeInOut },
				0.2
			)
			.fromTo(
				$videoPage,
				1.6,
				{ xPercent: -100, autoAlpha: 0 },
				{ xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut },
				0.7
			)
			.set($frameRed, { scaleX: 0 });

		$button.addEventListener("click", (e) => {
			e.preventDefault();
			tltransition.play();
		});
		$closeVideoBtn.addEventListener("click", (e) => {
			e.preventDefault();
			tltransition.reverse();
		});
	}
	homePageAnim();
	videoPageAnim();
})();
