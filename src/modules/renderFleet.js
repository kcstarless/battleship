// renderFleet.js
import { domCreator } from './domHelper';

//Render fleet
export function displayFleet(player, divFleet) {
    const fleet = player.getBoard().getBoardStatus().fleet;
    divFleet.innerHTML = '';
    const divFleetLegend = domCreator('legend');
    
    divFleetLegend.textContent = 'My Fleet';
    divFleet.append(divFleetLegend);

    fleet.forEach(ship => {       
        const divShip = domCreator('div');
        const divTitle = domCreator('div');

        divTitle.className = "title";
        divShip.className = "ship";
        divTitle.innerHTML = `<h5>${ship.getStatus().name}</h5>`;
        divFleet.append(divTitle);
        const cells = createShipsCells(ship, player);
        cells.forEach(cell => divShip.appendChild(cell));
        divFleet.append(divShip);
    });
}

// Create ship cells for fleet display
function createShipsCells(ship, player) {
    const shipLength = ship.getStatus().length;
    let shipHits = ship.getStatus().hits;
    const shipSunk = ship.getStatus().sunk;

    const cells = [];
    for (let i = 0; i < shipLength; i++) {
        const cell = domCreator('div');
        cell.className = 'board-cell';
        cell.classList.add('ship'); // Ensure it matches the ship class used on the board
        if (shipHits > 0 && player.playerType !== 'computer' ) { // if ships has hits add hit class
            cell.classList.add('hit');
            shipHits = Math.max(0, shipHits - 1); // ensure shipHits doesn't go below 0
        }
        if (shipSunk) {
            cell.classList.add('hit');      
        }
        cells.push(cell);
    }
    return cells;
}

