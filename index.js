const availablePlacement = 10;
const officialPlacementOrder = [
	'Président de la République',
	'Premier ministre',
	'Président du Sénat',
	'Président de l\'Assemblée Nationale',
	'Anciens Présidents de la République',
	'Gouvernement',
	'Anciens Premiers ministres',
	'Président du Conseil constitutionnel',
	'Vice-président du Conseil d\'Etat',
	'Président du Conseil économique, social et environnemental',
	'Défenseur des droits',
	'Députés',
	'Sénateurs',
	'Représentants au Parlement européen',
	'Autorité judiciaire représentée par le premier président de la Cour de cassation et le procureur général près cette cour',
	'Premier président de la Cour des comptes et le procureur général près cette cour',
	'Grand chancelier de la Légion d\'honneur, chancelier de l\'ordre national du Mérite, et les membres des conseils de ces ordres',
	'Chef d\'état-major des armées',
	'Délégué national de l\'Ordre de la Libération',
	'Préfet de la région d\'Ile-de-France, préfet de Paris',
	'Préfet de police de Paris',
	'Maire de Paris, président du conseil de Paris',
	'Président du conseil régional d\'Ile-de-France',
	'Chancelier de l\'Institut de France, les secrétaires perpétuels de l\'Académie française, de l\'Académie des inscriptions et belles-lettres, de l\'Académie des sciences, de l\'Académie des beaux-arts et de l\'Académie des sciences morales et politiques',
	'Secrétaire général du Gouvernement, le secrétaire général de la défense et de la sécurité nationale et le secrétaire général du ministère des affaires étrangères',
	'Président de la cour administrative d\'appel de Paris, le premier président de la cour d\'appel de Paris et le procureur général près cette cour',
	'Délégué général pour l\'armement, le secrétaire général pour l\'administration du ministère de la défense, le chef d\'état-major de l\'armée de terre, le chef d\'état-major de la marine, le chef d\'état-major de l\'armée de l\'air et de l\'espace, le gouverneur militaire de Paris, commandant de la région terre Ile-de-France',
	'Président de la Haute Autorité pour la transparence de la vie publique',
	'Président du Conseil supérieur de l\'audiovisuel',
	'Président de la Commission nationale de l\'informatique et des libertés',
	'Président de l\'Autorité de la concurrence',
	'Président de l\'Autorité des marchés financiers',
	'Recteur de l\'académie de Paris, chancelier des universités',
	'Hauts-commissaires, commissaires généraux, commissaires, délégués généraux, délégués, secrétaires généraux, directeurs de cabinet, le directeur général de la gendarmerie nationale, les directeurs généraux et directeurs d\'administration centrale',
	'Gouverneur de la Banque de France, le directeur général de la Caisse des dépôts et consignations',
	'Président du tribunal administratif de Paris, le président du tribunal judiciaire de Paris et le procureur de la République près ce tribunal, le président de la chambre régionale des comptes d\'Ile-de-France',
	'Préfet, secrétaire général aux politiques publiques de la préfecture de la région d\'Ile-de-France, préfecture de Paris ; le préfet, directeur du cabinet du préfet de police ; le préfet, secrétaire général aux moyens mutualisés de la préfecture de la région d\'Ile-de-France, préfecture de Paris ; le préfet, directeur du cabinet du préfet de la région d\'Ile-de-France, préfet de Paris ; le préfet, secrétaire général pour l\'administration ; le préfet, secrétaire général de la zone de défense et de sécurité de Paris ; le préfet délégué à l\'immigration ; le préfet délégué pour la sécurité et la sûreté des plates-formes de Paris-Charles de Gaulle, du Bourget et de Paris-Orly',
	'Membres du conseil de Paris, les membres du conseil régional d\'Ile-de-France',
	'Chef du contrôle général des armées, les généraux de division ayant rang et appellation de généraux d\'armée, les vices-amiraux ayant rang et appellation d\'amiraux, les généraux de division aérienne ayant rang et appellation de généraux d\'armée aérienne, les généraux de division ayant rang et appellation de généraux de corps d\'armée, les vice-amiraux ayant rang et appellation de vice-amiraux d\'escadre, les généraux de division aérienne ayant rang et appellation de généraux de corps aérien',
	'Présidents des universités de Paris, les directeurs des grandes écoles nationales, les directeurs des grands établissements nationaux de recherche',
	'Président du tribunal de commerce de Paris',
	'Président du conseil de prud\'hommes de Paris',
	'Secrétaire général de la ville de Paris',
	'Directeur général des services administratifs de la région d\'Ile-de-France',
	'Présidents et secrétaires perpétuels des académies créées ou reconnues par une loi ou un décret',
	'Président du Conseil économique, social et environnemental de la région d\'Ile-de-France',
	'Chefs des services déconcentrés de l\'Etat dans la région d\'Ile-de-France et dans le département de Paris dans l\'ordre de préséance attribué au département ministériel dont ils relèvent et les directeurs généraux et directeurs de la préfecture de région, de la préfecture de la région d\'Ile-de-France, préfecture de Paris et de la préfecture de police',
	'Président de CCI France, le président de Chambres d\'agriculture France, le président de CMA France',
	'Président de la chambre de commerce et d\'industrie de Paris, le président de la chambre régionale de commerce et d\'industrie d\'Ile-de-France',
	'Président de la chambre régionale d\'agriculture d\'Ile-de-France, le président de la chambre interdépartementale d\'agriculture d\'Ile-de-France',
	'Président de la chambre départementale de métiers de Paris',
	'Président du conseil de l\'ordre des avocats au Conseil d\'Etat et à la Cour de cassation',
	'Bâtonnier de l\'ordre des avocats au barreau de Paris et le président de la conférence des bâtonniers',
	'Présidents des conseils nationaux des ordres professionnels',
	'Directeurs des services de la ville de Paris dans l\'ordre de leur nomination',
	'Commissaires de police, les officiers de gendarmerie et les officiers de la brigade de sapeurs-pompiers de Paris',
	'Président de la Chambre nationale des avoués près les cours d\'appel',
	'Président du Conseil supérieur du notariat',
	'Président de la Chambre nationale des commissaires-priseurs judiciaires',
	'Président de la Chambre nationale des huissiers de justice',
	'Président de la Compagnie nationale des commissaires aux comptes'
];

printInputs();
document.getElementById('generateButton').addEventListener('click', () => {
	const presentPeoples = getPresentPeoples();
	renderPlacements(presentPeoples);
});

function printInputs() {
	const inputTable = document.getElementById('peopleInputs');
	const tbody = document.createElement('tbody');

	officialPlacementOrder.forEach((value, index) => {
		const row = document.createElement('tr');

		const labelColumn = document.createElement('td');
		const label = document.createElement('label');
		label.className = 'form-label'
		label.htmlFor = `ìnput-${index}`;
		label.textContent = value;
		labelColumn.appendChild(label);

		const inputColumn = document.createElement('td');
		inputColumn.className = 'col w-25';
		const input = document.createElement('input');
		input.id = `ìnput-${index}`;
		input.type = 'text';
		input.className = 'form-control';
		inputColumn.appendChild(input);

		row.appendChild(labelColumn);
		row.appendChild(inputColumn);

		tbody.appendChild(row)
	});
	inputTable.appendChild(tbody);
}
function renderPlacements(presentPeoples) {
    const renderDiv = document.getElementById('renderPlacements');
    let placementNumber = 0;

    renderDiv.innerHTML = '';
    for (const [i, people] of presentPeoples.entries()) {
        if (people === '') {
            continue;
        }

        const peopleCase = document.createElement('div');
        peopleCase.id = 'people-case-' + placementNumber;
        peopleCase.textContent = people;
        peopleCase.classList.add('people-case');

        const rowNumber = Math.floor(placementNumber / 5) + 1;
        console.log(i);
        console.log('rownumber' + rowNumber);
        peopleCase.style.gridRow = rowNumber;

        renderDiv.appendChild(peopleCase);

        placementNumber++;
        if (placementNumber >= availablePlacement) {
            break;
        }
    }
}
function getPresentPeoples() {
	const presentPeoples = [];
	const inputs = document.querySelectorAll(`input[id^="ìnput-"]`);

	inputs.forEach(input => {
		if (input.value.trim() !== '') {
			presentPeoples.push(input.value.trim());
		}
	});

	return presentPeoples;
}
