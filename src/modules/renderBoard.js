// renderBoard.js
import { xAxis, yAxis } from './gameboard';
import { domCreator, domCreateCell } from './domHelper';
import { gameModule } from './gameModule';
import { opponentBoard } from './domLoader';
import { dragndropEvent } from './dragndropHandler';

// Render board 
export function displayBoard(divBoard, board, player) {
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
    const { cell } = domCreateCell(player, coord, cellType); // See domHelper
    const img = hitOrMiss(player, coord);
    cell.append(img);
    
    !gameModule.getIsInitialized() && dragndropEvent(player, coord, cell); // drag and drop events for initial placement of ships only

    // Adds event on opponents board if player is computer, is attacking and game not over.
    if (player.getPlayerType() === 'computer' && !player.getIsAttacking() && !gameModule.getIsGameOver()) {
        cell.addEventListener('click', () => handleCellAttack(player, coord));   
    }
    return cell;
}

// If cell has been hit or miss return img else empty
function hitOrMiss(player, coord){
    const shotsFired = player.getBoard().getBoardStatus().shots.has(coord);
    if (shotsFired) {
        const img = domCreator('img');
        img.src = player.getBoard().getBoardStatus().shots.get(coord);
        return img;
    }
    return '';
}

// Handles click when user attacks a cell
async function handleCellAttack(player, coord) {
    const [y, x] = coord.split(',').map(Number);
    if (player.getBoard().receiveAttack(y, x)) { // if attack is sucessful
        opponentBoard(player); // updates board and ensure to remove click event if isGameOver
        gameModule.gameOver();
    }
}

// Update board display after placing a ship
export function updateBoardDisplay(player) {
    const divBoard = document.querySelector('#p1');
    displayBoard(divBoard, player.getBoard().getBoardStatus().board, player);
}

export function clearBoard() {
    const playerBoard = document.querySelector('.p1-board');
    const playerFleet = document.querySelector('.p1-fleet');
    const opponentBoard = document.querySelector('.p2-board');
    const opponentFleet = document.querySelector('.p2-fleet');
    const gameInfo = document.querySelector('.top');
    
    playerBoard.textContent = '';
    opponentBoard.textContent ='';
    playerFleet.textContent = '';
    opponentFleet.textContent ='';
    gameInfo.textContent = '';
}