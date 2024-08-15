// renderFleet.js
import { domCreator, domDisplayPlacement, domCreateShipsCells } from './domHelper';

// Render fleet for ship placement
export async function displayPlacement(player, divFleet) {
    const { divTitle, divShip, fleet } = domDisplayPlacement(player);
    
    let counter = 0;
    
    for (let index = 0; index < fleet.length; index++) {
        const ship = fleet[index];
        const cells = createShipsCells(ship, player);
     
        divTitle.innerHTML = `<h3>${ship.getStatus().name}</h3>`;
        cells.forEach(cell => {
            divShip.appendChild(cell);
            cell.setAttribute('draggable', 'true');
        });
        // Add dragstart event listener and pass in index of ship in fleet
        divShip.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', index);
        });
        divFleet.append(divTitle);
        divFleet.append(divShip);

        await waitForShipPlacement(); // Wait for the ship placed confirmation
        counter++;
        console.log(counter);
        divTitle.innerHTML = '';
        divShip.innerHTML = '';
    }
    // return true;
    window.dispatchEvent(new Event('fleetComplete')); 

    function waitForShipPlacement() {
        return new Promise((resolve) => {
            window.addEventListener('shipPlaced', resolve, { once: true });
        });
    }


}

//Render fleet for main game
export function displayFleet(player, divFleet) {
    const { fleet } = domDisplayPlacement(player, divFleet);
    
    divFleet.innerHTML = '';
    
    fleet.forEach(ship => {       
        const divShip = domCreator('div', 'ship');
        const divTitle = domCreator('div', 'title');
        divTitle.innerHTML = `<h5>${ship.getStatus().name}</h5>`;
        divFleet.append(divTitle);
        const cells = createShipsCells(ship, player);
        cells.forEach(cell => divShip.appendChild(cell));
        divFleet.append(divShip);
    });
}

// Create ship cells for fleet display
function createShipsCells(ship, player) {
    const { shipLength, shipSunk } = domCreateShipsCells(ship);
    let shipHits = ship.getStatus().hits;
    const cells = [];
    for (let i = 0; i < shipLength; i++) {
        const cell = domCreator('div', 'board-cell');
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

