// renderBoard.js
import { xAxis, yAxis } from './gameboard';
import { domCreator } from './domHelper';
import { gameModule } from './gameModule';
import { opponentBoard } from './domLoader';

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