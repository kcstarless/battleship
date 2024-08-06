// player.js

import { createGameboard } from "./gameboard";

export function createPlayer(type) {
    const playerType = type;
    let playerBoard = createGameboard();
    let currentPlayer = false;

    function attack(y, x, oponent){
        alert("attacked");
        // oponent.playerBoard.recieveAttack(y, x);
    }

    function computerAttack() {
        alert("computer has attacked!");
    }

    return { playerType, playerBoard, currentPlayer, attack, computerAttack };
}