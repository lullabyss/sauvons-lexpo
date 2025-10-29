window.addEventListener("DOMContentLoaded", function () {

	// Sélection du conteneur principal, puis des bulles mise en mémoire en tableau
	const conversation = document.querySelector('.dialogue');
	const bubbles = [...conversation.querySelectorAll('.bulle')];

	// Valeur par défaut utilisée si aucune valeur data-delay n'est définie sur une bulle
	const DEFAULT_DELAY = 1500;
	// Tolérance en pixels : si l’utilisateur est à moins de 80px du bas, on considère qu’il est "en bas"
	const THRESHOLD = 50;

	// Compteur du délai cumulé : il augmente au fur et à mesure pour enchaîner les bulles
	let currentDelay = 0;
	let totalDelay = 0;

	// Boucle sur chaque bulle
	bubbles.forEach((bubble) => {

		// Ici, on vérifie qu'il y a un data-delay dans le HTML
		let delayAttr = parseInt(bubble.dataset.delay, 10);
		// Sinon, on utilise le délais par défault
		if (isNaN(delayAttr) || delayAttr < 0) {
			delayAttr = DEFAULT_DELAY;
		}

		// Ici on calcule les délais cumulés
		currentDelay += delayAttr;

		// Ici, on fait apparaîte la bulle après un délais.
		setTimeout(() => {
			// Vérifie avant si l’utilisateur est actuellement proche du bas du conteneur
			const nearBottom =
				conversation.scrollHeight - (conversation.scrollTop + conversation.clientHeight) < THRESHOLD;

			// Ici on ajoute la classe à notre bulle pour la faire apparaître.
			bubble.classList.add('visible');

			// Utilisation de requestAnimationFrame pour attendre la mise à jour du DOM avant le scroll
			requestAnimationFrame(() => {
				// Si l’utilisateur était en bas, on force le scroll pour rester calé sur la dernière bulle
				if (nearBottom) {
					conversation.scrollTo({
						top: conversation.scrollHeight, // scroll tout en bas
						behavior: "smooth"              // défilement fluide
					});
				}
			});
		}, currentDelay); // fin du setTimeout pour cette bulle, et on recommence la boucle
	});

	
	// Gestion du bouton après toutes les bulles
	const button = document.querySelector('.scene .suivant');
	if (button) {
		let buttonDelay = parseInt(button.dataset.delay, 10);
		if (isNaN(buttonDelay) || buttonDelay < 0) {
			buttonDelay = DEFAULT_DELAY;
		}

		setTimeout(() => {
			button.classList.add('clickable');
		}, currentDelay + buttonDelay);
	}


});
