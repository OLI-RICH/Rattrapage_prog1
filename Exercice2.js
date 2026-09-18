function Echanger(tableau, premierIndex, deuxiemeIndex) {
	const temporaire = tableau[premierIndex];
	tableau[premierIndex] = tableau[deuxiemeIndex];
	tableau[deuxiemeIndex] = temporaire;
}

function Ranger(tableau) {
	let debut = 0;
	let fin = tableau.length - 1;

	while (debut < fin) {
		while (debut < fin && tableau[debut] === 0) {
			debut++;
		}

		while (debut < fin && tableau[fin] === 1) {
			fin--;
		}

		if (debut < fin) {
			Echanger(tableau, debut, fin);
			debut++;
			fin--;
		}
	}

	return tableau;
}

function NombreUn(tableau) {
	let nombre = 0;

	for (let index = 0; index < tableau.length; index++) {
		if (tableau[index] === 1) {
			nombre++;
		}
	}

	return nombre;
}

module.exports = { Echanger, Ranger, NombreUn };

if (require.main === module) {
	const tableau = [0, 1, 0, 0, 1, 0];
	console.log(Ranger(tableau));
	console.log(NombreUn(tableau));
}
