function NegatifPositif(tableau) {
	let gauche = 0;
	let droite = tableau.length - 1;

	while (gauche <= droite) {
		if (tableau[gauche] <= 0) {
			gauche++;
		} else if (tableau[droite] > 0) {
			droite--;
		} else {
			const temporaire = tableau[gauche];
			tableau[gauche] = tableau[droite];
			tableau[droite] = temporaire;
			gauche++;
			droite--;
		}
	}

	return tableau;
}

module.exports = { NegatifPositif };

if (require.main === module) {
	const tableau = [3, -1, 0, 4, -2, 5, -3];
	console.log(NegatifPositif(tableau));
}
