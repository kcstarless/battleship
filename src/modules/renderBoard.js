// renderBoard.js
import { domCreator } from './domHelper';
import { xAxis, yAxis } from './gameboard';
import { gameModule } from './game';

export function displayBoard(board, cellStatus, defender) {
    board.innerHTML = '';
    for (let i = 0; i < yAxis; i++) {
        for (let j = 0; j < xAxis; j++) {
            const cell = domCreator('div');
            cell.className = 'board-cell';
            cell.id = 'board-cell';
            cell.dataset.position = `${[i, j]}`; // give coordinate on the board

            defender.playerType === 'computer' && cell.addEventListener('click', () => gameModule.attackCell(i, j, defender)); // add event to defender's board

            if (cellStatus[i][j]) {
                cell.classList.add('ship');
            } else {
                cell.classList.add('water');
            }
            board.append(cell);
        }
    }
}