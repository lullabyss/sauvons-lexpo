window.addEventListener("load", function (event) {
	// Script Joni  pour les boutons PLUS

	// allPaint crée un tableau de tous les éléments ayant cette ".classe"
	// allMessage, pour les éléments à faire apparaître, ayant cette ".classe"
	// Attention, le tableau va être dans l'ordre.
	const allPaint = document.querySelectorAll(".tableau");
	const allMessage = document.querySelectorAll(".indice");
	// Définir mon bouton à faire apparaître
	const reussite = document.querySelector(".reussite");

	// Pour chaque tableau
	allPaint.forEach((element, index) => {
		// Lors d'un clique
		element.addEventListener("click", () => {
			// On retire tous les message vissibles.
			allMessage.forEach(msg => msg.classList.remove("visible"));
			// On affiche l'élément écho de allMessage.
			allMessage[index]?.classList.add("visible");

			// Si l'élément contient la classe .decoy
			if (element.classList.contains("decoy")) {
				// On lui ajoute la classe .cache
				element.classList.add("cache");
				setTimeout(() => {
					element.querySelector("img").style.opacity = "0";
				}, 250);
				return;
			}
			// Si l'élément est la clé :
			if (element.classList.contains("cle")) {
				// Alors on ajoute la classe .clickable au bouton .réussite
				reussite?.classList.add("clickable");
				return;
			}
		});
	});

});
