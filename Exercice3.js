const { Echanger, NombreUn } = require('./Exercice2');

function triLignes(matrice) {
	for (let ligne = 0; ligne < matrice.length - 1; ligne++) {
		let ligneAvecLeMoinsDeUn = ligne;

		for (let suivante = ligne + 1; suivante < matrice.length; suivante++) {
			if (NombreUn(matrice[suivante]) < NombreUn(matrice[ligneAvecLeMoinsDeUn])) {
				ligneAvecLeMoinsDeUn = suivante;
			}
		}

		if (ligneAvecLeMoinsDeUn !== ligne) {
			Echanger(matrice, ligne, ligneAvecLeMoinsDeUn);
		}
	}

	return matrice;
}

module.exports = { triLignes };

if (require.main === module) {
	const matrice = [
		[0, 0, 1, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	];

	console.log(triLignes(matrice));
}
