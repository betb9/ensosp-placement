const peoples = [
    'Le préfet',
    '',
    '',
    '',
    '',
    'Le président du conseil départemental',
    'Le maire',
    '',
    'Le président de la cour administrative d\'appel',
    '',
    'Les dignitaires de la Légion d\'honneur',
    '',
    '',
    'Les membres du conseil régional',
    '',
    // 'Les membres du conseil départemental',
    'Les membres du Conseil économique',
    '',
    'Le préfet adjoint pour la sécurité',
    '',
    'Les officiers généraux',
    '',
    '',
    'Ne doit pas venir 1',
    'Ne doit pas venir 2',
    'Ne doit pas venir 3',
    ''

];
const availablePlacement = 10;

renderPlacements();

function renderPlacements() {
    const renderDiv = document.getElementById('renderPlacements');
    let placementNumber = 0;

    renderDiv.innerHTML = '';
    for (const [i, people] of peoples.entries()) {
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