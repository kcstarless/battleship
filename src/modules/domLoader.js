// domLoader.js

import { domSelector } from './domHelper';
import { displayBoard } from './renderBoard';
import { displayFleet } from './renderFleet';

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



