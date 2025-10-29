window.addEventListener("load", function (event) {

	// Est-ce la bonne position du tuyau ?
	function verifierSiReussi() {
		// pour chaque tuyau
		let succes = true;
		document.querySelectorAll('.tuyau').forEach(tuyau => {
			// vérifier si data-rotationactuelle = data-bonnerotation
			if (tuyau.dataset.rotationactuelle != tuyau.dataset.bonnerotation)
				succes = false;

		});
		// Si oui, on lance l'animation du zeppelin
		var anim = document.querySelector('.zeppelin');
		if (succes === true) {
			anim.style.animationPlayState = 'running';
			// et on fait apparaître le bouton après un délai
			setTimeout(() => {
				document.querySelector(".reussite")?.classList.add("clickable");
			}, 6500);

		} else {
			// en cas d’échec, on fait pause et on retire la classe clickable du bouton
			anim.style.animationPlayState = 'paused';
			  document.querySelector(".pageSuivante")?.classList.remove("clickable");
		}
	}

	// Placement random des tuyaux
	document.querySelectorAll('.tuyau').forEach(tuyau => {

		const aleatoire = Math.random();
		let rotation = 0;

		if (aleatoire < 0.25)
			rotation = 0;
		else if (aleatoire < 0.5)
			rotation = 90;
		else if (aleatoire < 0.75)
			rotation = 180;
		else if (aleatoire < 1)
			rotation = 270;

		tuyau.dataset.rotationactuelle = rotation;
		tuyau.style.opacity = 1;

		tuyau.addEventListener('click', () => {
			const rotationActuelle = Number(tuyau.dataset.rotationactuelle);
			tuyau.dataset.rotationactuelle = (rotationActuelle + 90) % 360;

			verifierSiReussi();
		});
	});
});
