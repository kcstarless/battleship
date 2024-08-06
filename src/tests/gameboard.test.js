import { iteratee } from 'lodash';
import { createGameboard } from '../modules/gameboard';
import { createShip } from '../modules/ship';

describe('Gameboard', () => {
    const xAxis = 10;
    const yAxis = 10;

    let playerBoard;
    let carrier;

    let x = 0;
    let y = 0;

    beforeEach(() => {
        playerBoard = createGameboard(); // Initialize the board before each test
        carrier = createShip('carrier');
    });
    

    it('Check if board is at certain size of xAxis * yAxis', () => {
        expect(playerBoard.board.length).toBe(yAxis);

        playerBoard.board.forEach(row => {
            expect(row.length).toBe(xAxis);
        })
    });

    it('Check vertically placed ships', () => {
        // Place a carrier ship in 0, 0 position with orientation(vertical)
        const len = carrier.getStatus().length;
        playerBoard.placeShip(y, x, carrier, 'vertical');
        
        for(let i = y; i < len; i++) {
            expect(playerBoard.board[i][0]).toBe(carrier);
        }
        
        expect(playerBoard.board[len][x]).toBe(null);
        expect(playerBoard.board[len - 1][x]).toBe(carrier);
        expect(playerBoard.board[len + 1][x]).toBe(null);
    });

    it('Check vertically placed ships', () => {
        // Place a carrier ship in 0, 0 position with orientation(horizontal)
        const len = carrier.getStatus().length;
        playerBoard.placeShip(y, x, carrier, 'horizontal');

        for(let i = x; i < carrier.getStatus().length; i++) {
            expect(playerBoard.board[y][i]).toBe(carrier);
        }

        expect(playerBoard.board[y][len]).toBe(null);
        expect(playerBoard.board[y][len - 1]).toBe(carrier);
        expect(playerBoard.board[y][len + 1]).toBe(null);
    });

    it('No ship is placed if not enough cells', () => {
        const len = carrier.getStatus().length;
        x = 9;
        y = 9;
        playerBoard.placeShip(y, x, carrier, 'horizontal');

        for(let i = x; i < carrier.getStatus().length; i++) {
            expect(playerBoard.board[y][i]).toBe(null);
        }

        expect(playerBoard.board[y][len]).toBe(null);
        expect(playerBoard.board[y][len - 1]).toBe(null);
        expect(playerBoard.board[y][len + 1]).toBe(null);
    });


});

describe('Receiving attacks', () => {
    let playerBoard;
    let carrier;
    let battleship;
    let destroyer;
    let submarine;
    let patrolboat;

    let x = 0;
    let y = 0;

    beforeEach(() => {
        playerBoard = createGameboard(); // Initialize the board before each test
        carrier = createShip('carrier');
        battleship = createShip('battleship');
        destroyer = createShip('destroyer');
        submarine = createShip('submarine');
        patrolboat = createShip('patrolboat');
    });

    it('Correctly applies hit and misses', () => {
        playerBoard.placeShip(y, x, carrier, 'horizontal');
        expect(playerBoard.receiveAttack(0, 0)).toBe('HIT');
        expect(carrier.getStatus().hits).toBe(1);
        expect(playerBoard.receiveAttack(1, 0)).toBe('MISS');    
        expect(carrier.getStatus().hits).toBe(1);
        expect(playerBoard.receiveAttack(0, 1)).toBe('HIT');
        expect(carrier.getStatus().hits).toBe(2);
    });

    it('Correctly keeps record of all landed and missed attacks', () => {
        playerBoard.placeShip(y, x, carrier, 'horizontal');
        expect(playerBoard.receiveAttack(0, 0)).toBe('HIT');
        expect(playerBoard.receiveAttack(1, 0)).toBe('MISS');    
        expect(playerBoard.receiveAttack(0, 1)).toBe('HIT');
        
        expect(playerBoard.missedAttacks.length).toBe(1); // There was one miss
        expect(playerBoard.landedAttacks.length).toBe(2); // There was two hits
    });

    it('Report if all ships has been sunk', () => {
        playerBoard.placeShip(0, 0, carrier, 'horizontal');
        playerBoard.placeShip(1, 0, battleship, 'horizontal');
        playerBoard.placeShip(2, 0, destroyer, 'horizontal');
        playerBoard.placeShip(3, 0, submarine, 'horizontal');
        playerBoard.placeShip(3, 0, patrolboat, 'horizontal');

        carrier.hit().hit().hit().hit().hit();
        battleship.hit().hit().hit().hit();
        destroyer.hit().hit().hit();
        submarine.hit().hit().hit();
        patrolboat.hit().hit();

        expect(carrier.getStatus().sunk).toBe(true);
        expect(battleship.getStatus().sunk).toBe(true);
        expect(destroyer.getStatus().sunk).toBe(true);
        expect(submarine.getStatus().sunk).toBe(true);
        expect(patrolboat.getStatus().sunk).toBe(true);

        expect(playerBoard.checkFleet()).toBe(true);
    });

})
