// ship.js

// Define ship class with name and HP, you can add and modify different classes.
const shipClass = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolboat: 2
}

// Create a ship object with ships class name
export function createShip(className) {
    const shipType = className;
    const shipLength = shipClass[className];
    let shipHits = 0;
    let shipSunk = false;

    function getStatus() {
        return {
            name: shipType,
            length: shipLength,
            hits: shipHits,
            sunk: shipSunk
        }
    }

    function hit() {
        !shipSunk && (shipHits++, isSunk());
        return this;
    }

    function isSunk() {
        shipHits >= shipLength && (shipSunk = true);
    }

    return { getStatus, hit, type: 'ship' }
}
