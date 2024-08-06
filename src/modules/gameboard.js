// gameboard.js

import { createShip } from "./ship";

// Global board size;
export const xAxis = 10; 
export const yAxis = 10;

export function createGameboard() {
    // Declare board size & board


    // Players board, ships and attack records. 
    let board = Array.from({ length: yAxis }, () => Array(xAxis).fill(null));
    let playerFleet = [];
    let missedAttacks = [];
    let landedAttacks = [];

    // Create ships
    const carrier = createShip('carrier');
    const battleship = createShip('battleship');
    const destroyer = createShip('destroyer');
    const submarine = createShip('submarine');
    const patrolboat = createShip('patrolboat');

    // Places each ships
    placeShip(0, 0, carrier, 'horizontal');
    placeShip(1, 0, battleship, 'horizontal');
    placeShip(2, 0, destroyer, 'horizontal');
    placeShip(3, 0, submarine, 'horizontal');
    placeShip(4, 0, patrolboat, 'horizontal');

    // Display board
    function getBoardStatus() {
        return {
            board: board,
            fleet: playerFleet,
            missed: missedAttacks,
            landed: landedAttacks
        }
    }

    // Places ships if postion is valid. 
    function placeShip(y, x, ship, orientation) {
        const len = ship.getStatus().length;

        if (!validPositions(y, x, len, orientation)) {
            return 'Invalid Position';
        }

        if (orientation === 'vertical') {
            for(let i = y; i < len; i++) {
                board[i][x] = ship;
            }
        } else {
            for(let i = x; i < len; i++) {
                board[y][i] = ship;
            }
        }
        playerFleet.push(ship); // keep record of players ships
    }

    /** Attacks! */

    // Determines if an attack with coordinate hit a ship.
    function receiveAttack(y, x) {
        const cell = board[y][x];

        if (cell && cell.type === 'ship') {
            cell.hit();
            landedAttacks.push([y, x]); // if hit keep record 
            checkFleet();
            return 'HIT'
        } else {
            missedAttacks.push([y, x]); // if miss keep record
            // board[y][x] = 'miss';
            return 'MISS'
        }
    }

    // Check players fleet status
    function checkFleet() {
        return (playerFleet.every(ship => ship.getStatus().sunk)); // return true if all sunk
    }


    /** Valid ship placement on the board **/

    // Return true if both conditions are true else false
    function validPositions(y, x, len, orientation) {
        return (validCellLength(y, x, len, orientation) && validEdge(y, x));
    }

    // Check if position have enough free cells for the length of the ship
    function validCellLength(y, x, len, orientation) {
        if (orientation === 'vertical') {
            for(let i = y; i < len; i++) {
                !validCell(i, x) && false; 
                !validEdge(i, x) && false; 
            }
        } else {
            for(let i = x; i < len; i++) {
                !validCell(y, i) && false;
                !validEdge(y, i) && false;
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
        board[y][x] === null && true
    }

    return { board, missedAttacks, landedAttacks, getBoardStatus, placeShip, receiveAttack, checkFleet }
}