(function bigVideoIIFE() {
	anime({
		targets: "h1.big",
		opacity: [0, 1],
		translateY: [-100, 0],
		easing: "easeOutSine",
		duration: 1300,
	});
	const $firstSection = document.querySelector(".videobox");
	const $secondSection = document.querySelector(".extra");
	const firstSectionAnim = anime({
		targets: $firstSection,
		opacity: [0, 1],
		translateX: [-100, 0],
		easing: "easeOutSine",
		duration: 1300,
		autoplay: false,
	});
	const secondSectionAnim = anime({
		targets: $secondSection,
		opacity: [0, 1],
		translateX: [100, 0],
		easing: "easeOutSine",
		duration: 1300,
		autoplay: false,
	});
	const options = {
		rootMargin: "20px",
		threshold: 0.6,
	};
	const firstSectionObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			firstSectionAnim.play();
			firstSectionObserver.unobserve($firstSection);
		}
	}, options);
	firstSectionObserver.observe($firstSection);
	const secondSectionObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			secondSectionAnim.play();
			secondSectionObserver.unobserve($secondSection);
		}
	}, options);
	secondSectionObserver.observe($secondSection);
})();
