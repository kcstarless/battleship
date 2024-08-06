// game.js

import { domSelector } from './domHelper';
import { displayBoard } from './renderBoard';

export const gameModule = (function () {
    let currentPlayerIndex = 0;
    let players = [];

    function init(playerList) {
        players = playerList;
        round();
    }

    function round() {
        const attacker = players[currentPlayerIndex]
        console.log(`attacker type: ${attacker.playerType}`)
        const defender = players[(currentPlayerIndex + 1) % players.length];
    
        // when attacker is type of human
        if (attacker.playerType === 'human') {
            playerBoard(attacker);
            oponentBoard(defender);
        } 
    
        // when attacker is type of computer
        if (attacker.playerType === 'computer') {
            attacker.computerAttack(defender);
            playerBoard(defender);
            console.log("computer attacked");
            switchPlayer();
            switchTurn();
        }
    };

    function playerBoard(player){
        const board = domSelector('#p1-board');
        const cellStatus = player.playerBoard.getBoardStatus().board;
        displayBoard(board, cellStatus, player);
    }

    function oponentBoard(player) {
        const board = domSelector('#p2-board');
        const cellStatus = player.playerBoard.getBoardStatus().board;
        displayBoard(board, cellStatus, player);
    }

    function attackCell(i, j, defender) {
        defender.playerBoard.receiveAttack(i, j);
        switchPlayer();
        switchTurn();
    }

    function switchPlayer() {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    function switchTurn() {
        round();
    }

    return { init, attackCell };
})();