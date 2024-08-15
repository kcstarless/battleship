// dragndropHandler.js
import { updateBoardDisplay } from './renderBoard.js'
import { domSelector } from './domHelper';
import { feedback } from "./feedbackHelper.js";

/** handles drag and drop for initial ships placement */ 
let direction = 'horizontal';
let draggedShipIndex = null;

// Flag to ensure keydown listener is added only once
let keyListenerAdded = false;

// export function resetKeyListenerAdded() {
//     keyListenerAdded = false; //resets when game is played again.
// }
// let isDragging = false; /** My attempt at right clicking while dragging failed for now.. */

export function dragndropEvent(player, coord, cell) {
    // Ensure listeners are only added once
    const divModal = domSelector('.place-ships');

    // Add conteextmenu event only once 
    if (!keyListenerAdded) {
        divModal.addEventListener('contextmenu', handleContextMenu);
        keyListenerAdded = true;
    }
    // removes contextmune event(right click)
    window.addEventListener('fleetComplete', () => {
        divModal.removeEventListener('contextmenu', handleContextMenu);
        keyListenerAdded = false;
    }, { once: true });

    // Drag item only inside modal
    divModal.addEventListener('dragstart', event => draggedShipIndex = event.dataTransfer.getData('text/plain')); // When drags tarts set ship index
    divModal.addEventListener('dragend', () => draggedShipIndex = null); // Sets index to null when drag ends

    cell.addEventListener('dragenter', dragEntry); // Highlight cells if suitable for placments on entry
    cell.addEventListener('dragleave', dragLeave); // Clears the cells when leaving
    cell.addEventListener('drop', dragDrop); // When droped if cell is valid places ship
    cell.addEventListener('dragover', (event) => event.preventDefault()); // Cells are placed on cells
    

    function dragDrop(event) {
        event.preventDefault();
        const shipIndex = event.dataTransfer.getData('text/plain');
        const ship = player.getBoard().getBoardStatus().fleet[shipIndex];

        const cell = event.target.closest('.board-cell'); // Ensure the target is a board cell
        if (cell) {
            const coord = cell.dataset.position.split(',').map(Number);
            placeShipOnBoard(ship, coord, player);
        }
        clearHighlights();
    }

    function dragLeave(event) {
        event.preventDefault();
        if (!event.relatedTarget || !event.relatedTarget.classList.contains('board-cell')) {
            clearHighlights(); // clears highlight when u leave the cell
        }
    }
    function dragEntry(event) {
        event.preventDefault();
        if (draggedShipIndex !== null) {
            const ship = player.getBoard().getBoardStatus().fleet[draggedShipIndex];
            const [y, x] = coord.split(',').map(Number);
            const isValidPlacement = player.getBoard().validPositions(y, x, ship.getStatus().length, direction);
            highlightCells(y, x, ship.getStatus().length, direction, isValidPlacement);
        }
    }


}

// Function to highlight cells based on validity
function highlightCells(y, x, length, direction, isValid) {
    clearHighlights();
    for (let i = 0; i < length; i++) {
        // Calculate cell position based on direction
        const cellPosition = direction === 'horizontal'
            ? `${y},${x + i}`
            : `${y + i},${x}`;
        
        const cell = document.querySelector(`[data-position="${cellPosition}"]`);
        if (cell) {
            cell.classList.add(isValid ? 'highlight-valid' : 'highlight-invalid');
        }
    }
}
// Function to clear highlighting from all cells
function clearHighlights() {
    document.querySelectorAll('.highlight-valid, .highlight-invalid').forEach(cell => {
        cell.classList.remove('highlight-valid', 'highlight-invalid');
    });
}


// Handles ship placement on board
function placeShipOnBoard(ship, coord, player) {
    const [y, x] = coord;

    if (player.getBoard().validPositions(y, x, ship.getStatus().length, direction)) {
        player.getBoard().placeShip(y, x, ship, direction);
        updateBoardDisplay(player);
        window.dispatchEvent(new Event('shipPlaced')); // Trigger event to indicate ship is placed
    } else {
        console.log("Cannot place ship here.");
    }
}

// Toggles direction on right click
const handleContextMenu = (event) => {
    event.preventDefault();
    direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
    feedback.direction(direction);
    console.log(direction);
};
