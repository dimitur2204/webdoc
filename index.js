(function indexIIFE() {
	const $logo = document.querySelector(".transition__logo");
	const $frameBlack = document.querySelector(".page-transition__black");
	const $frameRed = document.querySelector(".page-transition__red");
	const $button = document.querySelector("#button");

	let tltransition = new TimelineMax({ paused: true })
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
			$logo,
			1.6,
			{ xPercent: -100, autoAlpha: 0 },
			{ xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut },
			0.7
		)
		.set($frameRed, { scaleX: 0 });
	// .to($frameBlack, 2.2, {
	// 	scaleX: 0,
	// 	transformOrigin: "right",
	// 	ease: Power4.easeInOut,
	// })
	// .to($logo, 0.2, { autoAlpha: 0 }, "-=1.2");
	document.getElementById("reverse").addEventListener("click", () => {
		tltransition.reverse();
	});
	const $scaleUpBtn = document.querySelector("#scaleup-btn");
	const $pageScaleUpFrame = document.querySelector(".page-scaleup-frame");
	const $pageScaleUp = document.querySelector(".page-scaleup");
	const originTop = $scaleUpBtn.offsetTop + $scaleUpBtn.clientHeight / 2;
	const originLeft = $scaleUpBtn.offsetLeft + $scaleUpBtn.clientWidth / 2;
	let scaleUpTransition = new TimelineMax({ paused: true })
		.fromTo(
			$pageScaleUpFrame,
			2.5,
			{ scale: 0 },
			{
				scale: 1,
				ease: Power2.easeOut,
				transformOrigin: `${originLeft}px ${originTop}px`,
			}
		)
		.fromTo(
			$pageScaleUp,
			2.5,
			{ scale: 0 },
			{
				scale: 0.9,
				ease: Back.easeOut.config(1.8),
				transformOrigin: `${originLeft}px ${originTop}px`,
			},
			"-=2.2"
		);
	$button.addEventListener("click", () => {
		tltransition.play(0);
	});
	$scaleUpBtn.addEventListener("click", () => {
		scaleUpTransition.play(0);
	});
})();
