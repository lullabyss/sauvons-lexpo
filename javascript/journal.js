window.addEventListener("DOMContentLoaded", function () {
	// Récupère l’ID du canva
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	// Choisir ici le diamètre du cercle
	const radius = 75;
	// Créer une variable pour éviter de le chercher plusieurs fois
	const suivante = document.querySelectorAll(".reussite");
	// Crée une nouvelle image
	const img = new Image();

	// Quand l’image est chargée → appelle la fonction start()
	img.onload = start;

	// Définit la source de l’image
	img.src = "../img/journal-russe.jpg";

	function start() {
		// Dessine l’image sur tout le canvas
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		// Ce qu’on dessine efface l’image
		ctx.globalCompositeOperation = 'destination-out';
		// Sur mouvement de la souris : appel de la fonction du mouvement.
		canvas.onmousemove = handleMouseMove;
	}

	// Calcule la position de la souris par rapport au canvas
	const getXY = e => {
		let rect = canvas.getBoundingClientRect();
		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
	};

	// Mouvement de la souris
	function handleMouseMove(e) {
		// Récupère les coordonnées souris
		let { x, y } = getXY(e);
		// Efface un cercle centré sur ces coordonnées
		erase(x, y);
		// Affiche les coordonnées dans la console
		console.log(`${x}-${y}`);
		// Vérifie si la souris passe sur la zone de Giverny
		checkGiverny(x, y);
	}

	// Effect d'effacement
	function erase(x, y) {
		// Commence un nouveau chemin
		ctx.beginPath();

		// Trace un cercle complet centré sur (x,y)
		ctx.arc(x, y, radius, 0, Math.PI * 2);

		// Remplit le cercle → efface la zone correspondante
		ctx.fill();
	}

	function checkGiverny(x, y) {
		// Zone cible : autour de (970, 545), dans un rectangle de 40px × 40px
		if (x > 950 && x < 990 && y > 525 && y < 565) {
			// Si on gratte dans la zone → affiche l’élément #suivante
			suivante.forEach(el => el.style.display = "block");
			
		}
	}
});