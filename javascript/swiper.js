window.addEventListener("DOMContentLoaded", function () {
	// Swiper
	// Besoin d'une bliblothèque JS dans le HTML pour fonctionner.
	var swiper = new Swiper(".swiper-explore", {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	})
})