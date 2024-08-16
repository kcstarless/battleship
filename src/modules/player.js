// player.js

import { xAxis, yAxis } from './gameboard';
import { createGameboard } from "./gameboard";

export function createPlayer(type) {
    const playerType = type;
    let isAttacking = false;
    let board = createGameboard(type);
    let possibleShots = fillPossibleShots();
    
    function getPlayerType() {
        return playerType;
    }
    function getBoard(){
        return board;
    }
    function getIsAttacking() {
        return isAttacking;
    }
    function setIsAttacking(value) {
        isAttacking = value;
    }

    /*** Computer Attack Logics ***/
    function computerAttack(player) {
        const [y, x] = getRandomShot();
        player.getBoard().receiveAttack(y, x);
    }

    // Creates array of all possible shots(coordinate) based on the size of board
    function fillPossibleShots() {
        const array = [];

        for (let y = 0; y < yAxis; y++) {
            for (let x = 0; x < xAxis; x++) {
                array.push([y, x]);
            }
        }
        return array;
    }
    // Generate a random index passed on possibleShots
    function getRandomShot() {
        const randomIndex = Math.floor(Math.random() * possibleShots.length);
        
        // Get the coordinate at the random index
        const [shot] = possibleShots.splice(randomIndex, 1); // Remove the shot from the array
        return shot;
    }

    return { getPlayerType, getIsAttacking, setIsAttacking, getBoard, computerAttack };
}