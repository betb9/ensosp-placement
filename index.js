const parisPlacementOrder = [
	"Le Président de la République",
	"Le Premier ministre",
	"Le président du Sénat",
	"Le président de l'Assemblée nationale",
	"Les anciens présidents de la République dans l'ordre de préséance déterminé par l'ancienneté de leur prise de fonctions",
	"Le Gouvernement dans l'ordre de préséance arrêté par le Président de la République",
	"Les anciens premiers ministres dans l'ordre de préséance déterminé par l'ancienneté de leur prise de fonctions",
	"Le président du Conseil constitutionnel",
	"Le vice-président du Conseil d'Etat",
	"Le président du Conseil économique, social et environnemental",
	"Le Défenseur des droits",
	"Les députés",
	"Les sénateurs",
	"Les représentants au Parlement européen",
	"L'autorité judiciaire représentée par le premier président de la Cour de cassation et le procureur général près cette cour",
	"Le premier président de la Cour des comptes et le procureur général près cette cour",
	"Le grand chancelier de la Légion d'honneur, chancelier de l'ordre national du Mérite, et les membres des conseils de ces ordres",
	"Le chef d'état-major des armées",
	"Le délégué national de l'Ordre de la Libération",
	"Le préfet de la région d'Ile-de-France, préfet de Paris",
	"Le préfet de police de Paris",
	"Le maire de Paris, président du conseil de Paris",
	"Le président du conseil régional d'Ile-de-France",
	"Le chancelier de l'Institut de France, les secrétaires perpétuels de l'Académie française, de l'Académie des inscriptions et belles-lettres, de l'Académie des sciences, de l'Académie des beaux-arts et de l'Académie des sciences morales et politiques",
	"Le secrétaire général du Gouvernement, le secrétaire général de la défense et de la sécurité nationale et le secrétaire général du ministère des affaires étrangères",
	"Le président de la cour administrative d'appel de Paris, le premier président de la cour d'appel de Paris et le procureur général près cette cour",
	"Le délégué général pour l'armement, le secrétaire général pour l'administration du ministère de la défense, le chef d'état-major de l'armée de terre, le chef d'état-major de la marine, le chef d'état-major de l'armée de l'air et de l'espace, le gouverneur militaire de Paris, commandant de la région terre Ile-de-France",
	"Le président de la Haute Autorité pour la transparence de la vie publique",
	"Le président du Conseil supérieur de l'audiovisuel",
	"Le président de la Commission nationale de l'informatique et des libertés",
	"Le président de l'Autorité de la concurrence",
	"Le président de l'Autorité des marchés financiers",
	"Le recteur de l'académie de Paris, chancelier des universités",
	"Les hauts-commissaires, commissaires généraux, commissaires, délégués généraux, délégués, secrétaires généraux, directeurs de cabinet, le directeur général de la gendarmerie nationale, les directeurs généraux et directeurs d'administration centrale dans l'ordre de préséance des ministères déterminé par l'ordre protocolaire du Gouvernement et, au sein de chaque ministère, dans l'ordre de préséance déterminé par leur fonction ou leur grade",
	"Le gouverneur de la Banque de France, le directeur général de la Caisse des dépôts et consignations",
	"Le président du tribunal administratif de Paris, le président du tribunal judiciaire de Paris et le procureur de la République près ce tribunal, le président de la chambre régionale des comptes d'Ile-de-France",
	"Le préfet, secrétaire général aux politiques publiques de la préfecture de la région d'Ile-de-France, préfecture de Paris ; le préfet, directeur du cabinet du préfet de police ; le préfet, secrétaire général aux moyens mutualisés de la préfecture de la région d'Ile-de-France, préfecture de Paris ; le préfet, directeur du cabinet du préfet de la région d'Ile-de-France, préfet de Paris ; le préfet, secrétaire général pour l'administration ; le préfet, secrétaire général de la zone de défense et de sécurité de Paris ; le préfet délégué à l'immigration ; le préfet délégué pour la sécurité et la sûreté des plates-formes de Paris-Charles de Gaulle, du Bourget et de Paris-Orly",
	"Les membres du conseil de Paris, les membres du conseil régional d'Ile-de-France",
	"Le chef du contrôle général des armées, les généraux de division ayant rang et appellation de généraux d'armée, les vices-amiraux ayant rang et appellation d'amiraux, les généraux de division aérienne ayant rang et appellation de généraux d'armée aérienne, les généraux de division ayant rang et appellation de généraux de corps d'armée, les vice-amiraux ayant rang et appellation de vice-amiraux d'escadre, les généraux de division aérienne ayant rang et appellation de généraux de corps aérien",
	"Les présidents des universités de Paris, les directeurs des grandes écoles nationales, les directeurs des grands établissements nationaux de recherche",
	"Le président du tribunal de commerce de Paris",
	"Le président du conseil de prud'hommes de Paris",
	"Le secrétaire général de la ville de Paris",
	"Le directeur général des services administratifs de la région d'Ile-de-France",
	"Les présidents et secrétaires perpétuels des académies créées ou reconnues par une loi ou un décret",
	"Le président du Conseil économique, social et environnemental de la région d'Ile-de-France",
	"Les chefs des services déconcentrés de l'Etat dans la région d'Ile-de-France et dans le département de Paris dans l'ordre de préséance attribué au département ministériel dont ils relèvent et les directeurs généraux et directeurs de la préfecture de région, de la préfecture de la région d'Ile-de-France, préfecture de Paris et de la préfecture de police",
	"Le président de CCI France, le président de Chambres d'agriculture France, le président de CMA France",
	"Le président de la chambre de commerce et d'industrie de Paris, le président de la chambre régionale de commerce et d'industrie d'Ile-de-France",
	"Le président de la chambre régionale d'agriculture d'Ile-de-France, le président de la chambre interdépartementale d'agriculture d'Ile-de-France",
	"Le président de la chambre départementale de métiers de Paris",
	"Le président du conseil de l'ordre des avocats au Conseil d'Etat et à la Cour de cassation",
	"Le bâtonnier de l'ordre des avocats au barreau de Paris et le président de la conférence des bâtonniers",
	"Les présidents des conseils nationaux des ordres professionnels",
	"Les directeurs des services de la ville de Paris dans l'ordre de leur nomination",
	"Les commissaires de police, les officiers de gendarmerie et les officiers de la brigade de sapeurs-pompiers de Paris",
	"Le président de la Chambre nationale des avoués près les cours d'appel",
	"Le président du Conseil supérieur du notariat",
	"Le président de la Chambre nationale des commissaires-priseurs judiciaires",
	"Le président de la Chambre nationale des huissiers de justice",
	"Le président de la Compagnie nationale des commissaires aux comptes"
];
const departmentPlacementOrder = [
	"Le préfet, représentant de l'État dans le département ou la collectivité",
	"Les députés",
	"Les sénateurs",
	"Les représentants au Parlement européen élus en France",
	"Le président du conseil régional",
	"Le président du conseil départemental",
	"Le maire de la commune où se déroule la cérémonie",
	"Le président de l'établissement public de coopération intercommunale à fiscalité propre dont est membre la commune, lorsque la cérémonie se déroule dans une commune membre",
	"Les conseillers régionaux",
	"Les conseillers départementaux",
	"Les maires des autres communes du département",
	"Les adjoints au maire de la commune où se déroule la cérémonie",
	"Les conseillers municipaux de la commune où se déroule la cérémonie",
	"Le président du tribunal judiciaire",
	"Le procureur de la République près ledit tribunal",
	"Le président du tribunal administratif",
	"Le recteur d'académie",
	"Le vice-recteur",
	"Le directeur académique des services de l'éducation nationale agissant sur délégation du recteur d'académie",
	"Le directeur des services de greffe judiciaires du tribunal judiciaire",
	"Le président du conseil économique, social et environnemental régional",
	"Le président de la chambre de commerce et d'industrie territoriale",
	"Le président de la chambre de métiers et de l'artisanat de région",
	"Le président de la chambre d'agriculture",
	"Le bâtonnier de l'ordre des avocats",
	"Le président de l'université",
	"Le directeur du centre hospitalier régional ou du centre hospitalier de la commune",
	"Les officiers généraux et les officiers commandant les forces armées dans le département",
	"Les chefs de service des administrations civiles de l'État dans le département",
	"Les présidents des associations d'anciens combattants et victimes de guerre",
	"Les représentants des cultes"
];
const placementOrders = {
	parisPlacementOrder,
	departmentPlacementOrder
};
let currentLocationOrderType = document.getElementById('placementLocation').value;

printInputs();
document.getElementById('generateButton').addEventListener('click', () => {
	renderPlacements();
});
document.getElementById('availablePlacement').addEventListener('input', () => {
	renderPlacements()
});
document.getElementById('placementLocation').addEventListener('input', event => {
	currentLocationOrderType = event.currentTarget.value;
	printInputs();
});

function printInputs() {
	const inputTable = document.getElementById('peopleInputs').getElementsByTagName('tbody')[0];
	inputTable.innerHTML = '';

	const placementOrderList = getPlacementOrderList();

	placementOrderList.forEach((value, index) => {
		const row = document.createElement('tr');

		const labelColumn = document.createElement('td');
		const label = document.createElement('label');
		label.className = 'form-label'
		label.htmlFor = `ìnput-name-${index}`;
		label.textContent = value;
		labelColumn.appendChild(label);

		const inputNameColumn = document.createElement('td');
		inputNameColumn.className = 'col w-25';
		const inputName = document.createElement('input');
		inputName.id = `ìnput-name-${index}`;
		inputName.type = 'text';
		inputName.className = 'form-control';
		inputName.dataset.id = index;
		inputName.dataset.type = 'name';
		inputNameColumn.appendChild(inputName);

		const inputFunctionColumn = document.createElement('td');
		inputFunctionColumn.className = 'col w-25';
		const inputFunction = document.createElement('input');
		inputFunction.id = `input-function-${index}`;
		inputFunction.type = 'text';
		inputFunction.className = 'form-control';
		inputFunction.dataset.id = index;
		inputFunction.dataset.type = 'function';
		inputFunctionColumn.appendChild(inputFunction);

		row.appendChild(labelColumn);
		row.appendChild(inputNameColumn);
		row.appendChild(inputFunctionColumn);

		inputTable.appendChild(row)
	});
}
function renderPlacements() {
		const presentPeoples = getPresentPeoples();
		const availablePlacement = document.getElementById('availablePlacement').value;
    const renderDiv = document.getElementById('renderPlacements');
    let placementNumber = 0;

    renderDiv.innerHTML = '';
    for (const people in presentPeoples) {
			if (people === '') {
            continue;
        }

			const peopleCase = document.createElement('div');
			peopleCase.id = 'people-case-' + placementNumber;
			peopleCase.innerHTML = `<span class="people-name">${presentPeoples[people].name}</span><br><span class="people-function">${presentPeoples[people].function}</span>`;
			peopleCase.classList.add('people-case');

			const rowNumber = Math.floor(placementNumber / 5) + 1;
			peopleCase.style.gridRow = rowNumber;

			renderDiv.appendChild(peopleCase);

			placementNumber++;
			if (placementNumber >= availablePlacement) {
            break;
        }
    }
}
function getPresentPeoples() {
	const presentPeoples = {};
	let presentPeoplesNumber = 0;

	const inputsNames = document.querySelectorAll(`input[id^="ìnput-name-"]`);

	inputsNames.forEach((input, index) => {

		if (input.value.trim() === '') {
			return;
		}

		const peopleFunction = document.querySelector(`input[data-id="${index}"][data-type="function"]`);

		presentPeoples[presentPeoplesNumber] = {
			'name': input.value.trim(),
			'function': peopleFunction.value.trim()
		};
		presentPeoplesNumber++
	});

	return presentPeoples;
}
function getPlacementOrderList() {
	const placementName = `${currentLocationOrderType}PlacementOrder`;
	return placementOrders[placementName];
}
