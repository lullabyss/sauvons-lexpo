window.addEventListener("DOMContentLoaded", function () {
	// Jeu en drag and drop
	// Besoin d'une bliblothèque JS pour fonctionner.

	const droppable = new Draggable.Droppable(
		document.querySelectorAll(".container"),
		{
			//Ici, je détermine les classes
			draggable: ".item",
			dropzone: ".dropzone",
		}
	);

	let droppableOrigin;

	// --- Draggable events --- //
	droppable.on("drag:start", (evt) => {
		droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
		document.body.style.cursor = "grabbing";
	});


	//Les fonctions qui font que si tout est remplis, ça débloque un truc.
	droppable.on("droppable:dropped", (evt) => {
		if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
			evt.cancel();
		}
		document.body.style.cursor = "default";

		setTimeout(function () {
			areAllElementsPlaced();
		}, 250);
	});
	

	
	// Quand le tableau est au bon endroit :
	function areAllElementsPlaced() {
		let all_emplacement_are_occupied = true;

		document
			.querySelectorAll(".emplacement")
			.forEach(function (emplacement) {
				if (
					emplacement.classList.contains("draggable-dropzone--occupied") ===
					false
				)
					all_emplacement_are_occupied = false;
			});
		// Si le tableau est bon endroit, le bouton .reussite apparait.
		if (all_emplacement_are_occupied === true) {
			document.querySelector(".reussite")?.classList.add("clickable");
		} else {
			document.querySelector(".reussite")?.classList.remove("clickable");
		}
	}
});