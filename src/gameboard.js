// gameboard.js
import { createShip } from './ship';

export function createGameboard() {
    // Declare board size & board
    const xAxis = 10;
    const yAxis = 10;

    // Players board, ships and attack records. 
    const board = [];
    const playerFleet = [];
    const missedAttacks = [];
    const landedAttacks = []

    // Creates 2D xAxis x yAxis grid
    for (let i = 0; i < yAxis; i++) {
        const row = [];
        for (let j = 0; j < xAxis; j++) {
            row.push(null);
        }
        board.push(row);
    }

    // Display board
    function displayBoard() {

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
        playerFleet.push(ship);
    }

    /** Attacks! */
    // Determines if an attack with coordinate hit a ship.
    function receiveAttack(y, x) {
        const cell = board[y][x];

        if (cell && cell.type === 'ship') {
            cell.hit();
            landedAttacks.push([y, x]);
            checkFleet();
            return 'HIT'
        } else {
            missedAttacks.push([y, x]);
            // board[y][x] = 'miss';
            return 'MISS'
        }
    }

    // Check your fleet status
    function checkFleet() {
        return (playerFleet.every(ship => ship.getStatus().sunk)); // return true if all sunk
    }


    /** Valid Position **/
    // Return true if both conditions are true else false
    function validPositions(y, x, len, orientation) {
        return (validCellLength(y, x, len, orientation) && validEdge(y, x));
    }

    // Check if position have enough free cells for the length of the ship
    function validCellLength(y, x, len, orientation) {
        if (orientation === 'vertical') {
            for(let i = y; i < len; i++) {
                !validCell(i, x) && false; // return false
                !validEdge(i, x) && false; // return false
            }
        } else {
            for(let i = x; i < len; i++) {
                !validCell(y, i) && false;
                !validEdge(y, i) && false;
            }
        }
        return true;
    }

    // Check if coordinates is within board parameters.
    function validEdge(y, x) {
        return (x >= 0 && x < xAxis && y >= 0 && y < yAxis);
    }

    // Check if cell is free. 
    function validCell(y, x) {
        board[y][x] === null && true
    }

    return { board, missedAttacks, landedAttacks, placeShip, receiveAttack, checkFleet }
}