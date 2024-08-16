// gameboard.js

import { createShip } from "./ship";
import { feedback } from "./feedbackHelper.js";
import hit from '../assets/images/hit.png';
import miss from '../assets/images/miss.png';
import fire from '../assets/sounds/fire.mp3';
import missed from '../assets/sounds/water.mp3'


// Global board size;
export const xAxis = 10; 
export const yAxis = 10;

export function createGameboard() {

    // Players board, ships and attack records. 
    let board = Array.from({ length: yAxis }, () => Array(xAxis).fill(null));
    let playerFleet = [];
    let shots =  new Map();
    let hasHit = false;

    createFleet();

    function resetBoard() {
        board = Array.from({ length: yAxis }, () => Array(xAxis).fill(null));
    }

    // Create ships
    function createFleet() {
        const carrier = createShip('carrier');
        const battleship = createShip('battleship');
        const destroyer = createShip('destroyer');
        const submarine = createShip('submarine');
        const patrolboat = createShip('patrolboat');
        // Add to fleet
        playerFleet.push(carrier,battleship, destroyer, submarine, patrolboat); 
    }

    function randomlyPlace() {
        playerFleet.forEach(ship => {
            const len = ship.getStatus().length;
            let placed = false;

            // Check if position and required cells are valid
            while (!placed) {
                const [y, x] = randomCoord();
                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical'; 
                if(validPositions(y, x, len, direction)) {
                    placeShip(y, x, ship, direction); // place the ship
                    placed = true;
                }
            }
        });
    }

    function randomCoord() {
        const y = Math.floor(Math.random() * yAxis);
        const x = Math.floor(Math.random() * xAxis);

        return [y, x];
    }
    // Places each ships
    // if (type == 'human'){
    //     placeShip(0, 0, carrier, 'horizontal');
    //     placeShip(1, 0, battleship, 'horizontal');
    //     placeShip(2, 0, destroyer, 'horizontal');
    //     placeShip(3, 0, submarine, 'horizontal');
    //     placeShip(4, 0, patrolboat, 'horizontal');
    // } else {
    //     placeShip(9, 0, carrier, 'horizontal');
    //     placeShip(8, 0, battleship, 'horizontal');
    //     placeShip(7, 0, destroyer, 'horizontal');
    //     placeShip(6, 0, submarine, 'horizontal');
    //     placeShip(5, 0, patrolboat, 'horizontal');
    // }

    // Board returns
    function getBoardStatus() {
        return {
            board: board,
            fleet: playerFleet,
            shots: shots,
            hit: hasHit
        }
    }

    // Places ships if postion is valid. 
    function placeShip(y, x, ship, orientation) {
        const len = ship.getStatus().length;

        if (!validPositions(y, x, len, orientation)) {
            return false;
        }

        if (orientation === 'vertical') {
            for(let i = 0; i < len; i++) {
                board[y + i][x] = ship;
            }
        } else {
            for(let i = 0; i < len; i++) {
                board[y][x + i] = ship;
            }
        }
        // playerFleet.push(ship); // keep record of players ships
    }

    /** Attacks! */

    // Determines if an attack with coordinate hit a ship.
    function receiveAttack(y, x) {

        if (shots.has(`${y},${x}`)) {
            feedback.bottom('Check your coord.')
            return false
        }

        const cell = board[y][x];
        if (cell?.type === 'ship') {
            hasHit = true;
            cell.hit();
            shots.set(`${y},${x}`, hit); // if hit keep record with img
            feedback.middle(`HIT!`);
            playSound(fire);
            checkShip(cell);
        } else {
            hasHit = false;
            shots.set(`${y},${x}`, miss); // if miss keep record
            feedback.middle(`MISS!`);
            playSound(missed);
        }
        return true;
    }

    function playSound(soundUrl) {
        const sound = new Audio(soundUrl);
        sound.play(); // allows sounds to play again in quick sucession
    }
    // Check ship status that was hit
    function checkShip(cell){
        const ship = cell.getStatus();
        if (ship.sunk) {
            feedback.middle(`${ship.name.toUpperCase()} SUNK!`, true);
        }
    }

    // Check players fleet status
    function checkFleet() {
        return (playerFleet.every(ship => ship.getStatus().sunk)); // return true if all sunk
    }

    /** Valid ship placement on the board **/
    // Return true if both conditions are true else false
    function validPositions(y, x, len, orientation) {
        const cellLengthValid = validCellLength(y, x, len, orientation);
        const edgeValid = validEdge(y, x);
        return cellLengthValid && edgeValid;
    }

    // Check if position have enough free cells for the length of the ship
    function validCellLength(y, x, len, orientation) {
        if (orientation === 'vertical') {
            if (y + len > yAxis) return false;

        // Check if each cell is within bounds and is free
            for (let i = 0; i < len; i++) {
                if (!validCell(y + i, x) || !validEdge(y + i, x)) return false;
            }
        } else {
        // Horizontal placement
            if (x + len > xAxis) return false; // Not enough space horizontally

            // Check if each cell is within bounds and is free
            for (let i = 0; i < len; i++) {
                if (!validCell(y, x + i) || !validEdge(y, x + i)) return false;
            }
        }
        return true;
    }

    // Check if coordinates is within board boundaries.
    function validEdge(y, x) {
        return (x >= 0 && x < xAxis && y >= 0 && y < yAxis);
    }

    // Check if cell is free. 
    function validCell(y, x) {
       return board[y][x] === null
    }

    return { resetBoard, getBoardStatus, placeShip, receiveAttack, checkFleet, validPositions, randomlyPlace }
}