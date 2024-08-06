// index.js

import './styles/main.scss';
import { createPlayer } from './modules/player';
import { gameModule } from './modules/game';

function init() {
    let human = createPlayer('human');
    let computer = createPlayer('computer');
    let players = [human, computer];
    // let currentPlayerIndex = 0;
    gameModule.init(players);
}

init();