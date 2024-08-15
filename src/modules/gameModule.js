// gameModule.js

import { playerBoard, opponentBoard, placeShips } from './domLoader.js';
import { domStartGame } from './domHelper'
import { feedback } from "./feedbackHelper.js";
import { createPlayer } from '../modules/player';
import { clearBoard } from './renderBoard.js'
import missileRight from '../assets/images/missile_right.png';
import missileLeft from '../assets/images/missile_left.png';
import battleship from '../assets/images/battleship.png';
import { delay } from 'lodash';


export const gameModule = (function () {
    let currentPlayerIndex = 0;
    let players = [];
    let attacker;
    let defender;
    let isGameOver = false;
    let isInitialized = false;
    let quickplay;

    function startGame() {
            const { modal, container, quickBtn, placeBtn } = domStartGame(); // See domHelper
  
            // Quick play
            quickBtn.addEventListener('click', () => {
                quickplay = true;
                container.removeChild(modal);
                init(quickplay);
            });
            
            placeBtn.addEventListener('click', () => {
                quickplay = false;
                container.removeChild(modal);
                init(quickplay);
            });
    }

    async function init(quickplay) {
        try {
            // Create players
            let human = createPlayer('human');
            let computer = createPlayer('computer');
            players = [human, computer];
            // Place ships
            if (quickplay) {
                human.getBoard().randomlyPlace();
            } else {
                placeShips(human);
                await placementComplete(); // Wait until placing fleet is finished. 
            }
            computer.getBoard().randomlyPlace();
            isInitialized = true; 
            round();  
        } catch (error) {
            console.error('Error initializing game:', error);
        }
        function placementComplete() {
            return new Promise((resolve) => {
                window.addEventListener('fleetComplete', resolve, { once: true });
            });
        }
    }

    function round() {
        // Decide current player
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
            }, 1500);  
        }
    };

    function getIsInitialized() {
        return isInitialized;
    }

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

    function gameReset() {
        isGameOver = false;
        isInitialized = false;
        quickplay = true;
        currentPlayerIndex = 0;
        clearBoard();
    }

    function gameOver() {
        if (defender.getBoard().checkFleet()) {
            isGameOver = true;
            feedback.middle(`Gameover: ${attacker.playerType} WINS!`);

            setTimeout(() => {
                gameReset();
                startGame();
            }, 5000);
            
        } else if (checkLastShot()) {   
            feedback.bottom("Fire again!");
            round(); // If hit play another round without switching player.
        } else {
            switchPlayer();
        }
    }
    return { init, getIsInitialized, gameOver, getIsGameOver, startGame, gameReset };
})();