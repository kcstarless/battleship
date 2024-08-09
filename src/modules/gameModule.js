// gameModule.js

import { playerBoard, opponentBoard } from './domLoader.js';
import { feedback } from "./feedbackHelper.js";
import { createPlayer } from '../modules/player';
import missileRight from '../assets/images/missile_right.png';
import missileLeft from '../assets/images/missile_left.png';

export const gameModule = (function () {
    let currentPlayerIndex = 0;
    let players = [];
    let attacker;
    let defender;
    let isGameOver = false;

    function init() {
        let human = createPlayer('human');
        let computer = createPlayer('computer');
        players = [human, computer];
        round();
    }

    function round() {
        attacker = players[currentPlayerIndex]
        defender = players[getNextPlayerIndex()];
        // when attacker is type of human
        if (attacker.playerType === 'human') {
            feedback.top(`Your Command`, missileRight);
            playerBoard(attacker);
            opponentBoard(defender);  
        } 
    
        // when attacker is type of computer
        if (attacker.playerType === 'computer') { 
            feedback.top(`Enemy attacking..`, missileRight);
            attacker.isAttacking = true;
            opponentBoard(attacker); // Make opponent board unclickable during computers attack

            // Give delay before computer attacks. 
            setTimeout(() => {
                attacker.computerAttack(defender);
                playerBoard(defender);
                attacker.isAttacking = false;
                gameOver();
            }, 3000);  
        }
    };

    function getIsGameOver() {
        return isGameOver;
    }

    function getNextPlayerIndex() {
        return (currentPlayerIndex + 1) % players.length;
    }

    function switchPlayer() {
        currentPlayerIndex = getNextPlayerIndex(); // switch player
        round(); // new round
    }

    function checkLastShot() {
        return players[getNextPlayerIndex()].getBoard().getBoardStatus().hit
    }

    function gameOver() {
        if (defender.getBoard().checkFleet()) {
            isGameOver = true;
            feedback.middle(`Gameover: ${attacker.playerType} WINS!`);
        } else if (checkLastShot()) {   
            feedback.bottom("Fire again!");
            round(); // If hit play another round without switching player.
        } else {
            switchPlayer();
        }
        
    }
    return { init, gameOver, getIsGameOver };
})();