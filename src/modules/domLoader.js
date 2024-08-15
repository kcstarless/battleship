// domLoader.js
/** Setsup dom elements for display */

import { domOpponentBoard, domPlayerBoard, domPlaceShips } from './domHelper'
import { displayBoard, } from './renderBoard';
import { displayFleet, displayPlacement } from './renderFleet';

export function placeShips(player) {
    const { divFleet, divBoard, board } = domPlaceShips(player); // See domHelper

    displayPlacement(player, divFleet);
    displayBoard(divBoard, board, player);
}

export function playerBoard(player){
    const { divPlayerBoard, board, divFleet } = domPlayerBoard(player); // See domHelper
    
    displayBoard(divPlayerBoard, board, player);
    displayFleet(player, divFleet);
}

export function opponentBoard(player) {
    const { divOpponentBoard, board, divFleet } = domOpponentBoard(player); // See domHelper

    displayBoard(divOpponentBoard, board, player);
    displayFleet(player, divFleet);
}



