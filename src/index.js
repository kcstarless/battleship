// index.js

import './styles/main.scss';
import { gameModule } from './modules/gameModule';

function init() {
    gameModule.startGame();
}

init();