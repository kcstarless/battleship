import { createShip } from '../ship';

describe('Ship object', () => {
    const carrier = createShip('carrier');
    const battleship = createShip('battleship');

    it('Current status of the ship', () => {
        expect(carrier.getStatus()).toEqual({
            name: 'carrier',
            length: 5,
            hits: 0,
            sunk: false
        });
    });

    it('Updates hit on the ship after 1st hit', () => {
        carrier.hit();
        expect(carrier.getStatus().hits).toBe(1);
    });

    
    it('Updates hit on the ship after 2nd hit', () => {
        carrier.hit();
        expect(carrier.getStatus().hits).toBe(2);
    });

    it('Updates hit on the ship after 5th hit & ship to be sunk', () => {
        carrier.hit().hit().hit();
        expect(carrier.getStatus().hits).toBe(5);
        expect(carrier.getStatus().sunk).toBe(true);
    });

    it('No increment on shipHits when sunked', () => {
        carrier.hit();
        expect(carrier.getStatus().hits).toBe(5);
    });

    it('Current status of the ship', () => {
        expect(carrier.getStatus()).toEqual({
            name: 'carrier',
            length: 5,
            hits: 5,
            sunk: true
        });
    });
});