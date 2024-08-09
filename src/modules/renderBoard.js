// renderBoard.js
import { domCreator,domSelector } from './domHelper';
import { xAxis, yAxis } from './gameboard';
import { gameModule } from './gameModule';

export function playerBoard(player){
    const divPlayerBoard = domSelector('#p1-board');
    const divFleet = domSelector('#p1-fleet');
    const board = player.getBoard().getBoardStatus().board;
    
    displayBoard(divPlayerBoard, board, player);
    displayFleet(player, divFleet);
}

export function opponentBoard(player) {
    const divOpponentBoard = domSelector('#p2-board');
    const divFleet = domSelector('#p2-fleet');
    const board = player.getBoard().getBoardStatus().board;

    displayBoard(divOpponentBoard, board, player);
    displayFleet(player, divFleet);
}

// Render board 
function displayBoard(divBoard, board, player) {
    divBoard.innerHTML = '';

    for (let y = 0; y < yAxis; y++) {
        for (let x = 0; x < xAxis; x++) {
            const coord = `${y},${x}`;
            const cellType = board[y][x];
            const cell = createCell(player, coord, cellType);
            divBoard.append(cell);
        }
    }
}

// Return each cell to display board
function createCell(player, coord, cellType) { 
    const cell = domCreator('div');
    cell.className = 'board-cell';
    cell.id = 'board-cell';
    cell.dataset.position = coord;
    const img = checkHitsAndMisses(player, coord);
    cell.classList.add(cellType ? 'ship' : 'water'); // Add ship or water class depending on the cell content
    cell.append(img);
    // Adds click event on opponents board if player is computer, is attacking and game not over.
    if (player.playerType === 'computer' && !player.isAttacking && !gameModule.getIsGameOver()) {
        cell.addEventListener('click', () => handleCellClick(player, coord));   
    }
    return cell;
}

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

// Loads image file for shots thats hit and miss
function checkHitsAndMisses(player, coord){
    const shotsFired = player.getBoard().getBoardStatus().shots.has(coord);
    if (shotsFired) {
        const img = domCreator('img');
        img.src = player.getBoard().getBoardStatus().shots.get(coord);
        return img;
    }
    return '';
}

function handleCellClick(player, coord) {
    const [y, x] = coord.split(',').map(Number);
    if (player.getBoard().receiveAttack(y, x)) { // if attack is sucessful
        gameModule.gameOver();
        opponentBoard(player); // updates board and ensure to remove click event if isGameOver
    }
}