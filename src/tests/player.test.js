// player.test.js

import { iteratee } from 'lodash';
import { createPlayer } from '../modules/player';

describe('Create Player', () => {
    const player = createPlayer('human');
    const computer = createPlayer('computer');

    it('Creates player object with board and type', () => {
        const boardStatus = player.playerBoard.getBoardStatus();

        expect(player.playerType).toBe('human');
        expect(boardStatus.board.length).toBe(10);
    });
});
