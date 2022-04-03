(function arrowsIIFE() {
	const $firstSection = document.querySelectorAll(
		".passion-page__image-text"
	)[0];
	const $secondSection = document.querySelectorAll(
		".passion-page__image-text"
	)[1];
	const $thirdSection = document.querySelectorAll(
		".passion-page__image-text"
	)[2];
	const $firstArrow = document.querySelectorAll(".arrow")[0];
	const $secondArrow = document.querySelectorAll(".arrow")[1];
	const firstSectionAnim = anime({
		targets: $firstSection,
		translateY: [-50, 0],
		opacity: [0, 1],
		easing: "easeOutSine",
		duration: 1500,
		autoplay: false,
	});
	const firstArrowAnim = () => {
		const arrowTimeLine = anime.timeline({
			duration: 1,
		});
		$firstArrow.querySelectorAll("path,line,polyline").forEach((el) => {
			arrowTimeLine.add({
				targets: el,
				strokeDashoffset: [anime.setDashoffset, 0],
				duration: 300,
				easing: "easeOutSine",
			});
		});
		arrowTimeLine.play();
	};
	const secondSectionAnim = anime({
		targets: $secondSection,
		translateY: [-50, 0],
		opacity: [0, 1],
		easing: "easeOutSine",
		duration: 1500,
		autoplay: false,
	});
	const secondArrowAnim = () => {
		const arrowTimeLine = anime.timeline({
			duration: 1,
		});
		$secondArrow.querySelectorAll("path,line,polyline").forEach((el) => {
			arrowTimeLine.add({
				targets: el,
				strokeDashoffset: [anime.setDashoffset, 0],
				duration: 300,
				easing: "easeOutSine",
				autoplay: false,
			});
		});
		arrowTimeLine.play();
	};
	const thirdSectionAnim = anime({
		targets: $thirdSection,
		opacity: [0, 1],
		translateY: [50, 0],
		easing: "easeOutSine",
		duration: 1500,
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
	const firstArrowObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			firstArrowAnim();
			firstArrowObserver.unobserve($firstArrow);
		}
	}, options);
	firstArrowObserver.observe($firstArrow);
	const secondSectionObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			secondSectionAnim.play();
			secondSectionObserver.unobserve($secondSection);
		}
	}, options);
	secondSectionObserver.observe($secondSection);
	const secondArrowObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			secondArrowAnim();
			secondArrowObserver.unobserve($secondArrow);
		}
	}, options);
	secondArrowObserver.observe($secondArrow);
	const thirdSectionObserver = new IntersectionObserver(([entry]) => {
		if (entry && entry.isIntersecting) {
			thirdSectionAnim.play();
			thirdSectionObserver.unobserve($thirdSection);
		}
	}, options);
	thirdSectionObserver.observe($thirdSection);
})();
