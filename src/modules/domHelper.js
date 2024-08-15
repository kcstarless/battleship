// domHelper.js

import { gameModule } from "./gameModule";

export function domSelector(name) {
    return document.querySelector(name);
}

export function domCreator(name, nameClass = null, nameID = null, text = null){
    const nameElement = document.createElement(name);
    if (nameClass) nameElement.className = nameClass;
    if (nameID) nameElement.id = nameID;
    if(text) nameElement.textContent = text;
    return nameElement;
}

export function domPlaceShips(player) {
    const container = domSelector('.container');
    const modal = domCreator('dialog', 'place-ships');
    const divFleet = domCreator('fieldset', 'p1-fleet', 'p1-fleet');
    const divBoard = domCreator('div', 'p1-board', 'p1');
    const divHeader = domCreator('h1');
    const startBtn = domCreator('button', 'btn start');
    // const backBtn = domCreator('button', 'btn quickplay');
    const placementInfo = domCreator('div', 'placement-info', null, 'Current ships bearing:');
    const divDirection = domCreator('div', 'direction');
    const divH3 = domCreator('h3');
    const divToChangeDirection = domCreator('div', 'changedirection', null, 'Right click to change ships bearing and drag n drop.')

    divH3.textContent = 'East -> West';
    divDirection.append(divH3);
    startBtn.innerHTML = `<h1>Battle!!!</h1>`;
    startBtn.classList.add('not-ready');
    // backBtn.innerHTML = `<h1>Back</h1>`;

    // backBtn.addEventListener('click', () => {
    //     modal.removeChild(divFleet);
    //     container.removeChild(modal);
    //     player.getBoard().resetBoard();
    //     gameModule.startGame();
    // })

    window.addEventListener('fleetComplete', () => {
        divHeader.textContent = 'Fleet Assigned!';
        modal.removeChild(placementInfo);
        modal.removeChild(divDirection);
        modal.removeChild(divToChangeDirection);
        modal.removeChild(divBoard);

        // Remove the 'not-ready' class when the event is triggered
        startBtn.classList.remove('not-ready');
        // backBtn.style.display = 'none';
    }, { once: true });

    startBtn.addEventListener('click', () => {
        modal.close();
        container.removeChild(modal);
    })

    const board = player.getBoard().getBoardStatus().board;

    divHeader.textContent = 'PLACE YOUR FLEET';
    modal.append(divHeader, placementInfo, divDirection, divToChangeDirection, divFleet, divBoard, startBtn);
    container.append(modal);

    modal.showModal();

    return { container, modal, divFleet, divBoard, divHeader, board, placementInfo, divDirection };
}

export function domStartGame() {
    const container = domSelector('.container');
    const modal = domCreator('dialog', 'start-game');
    const quickBtn = domCreator('button', 'btn quickplay');
    const placeBtn = domCreator('button', 'btn placeships');
    quickBtn.innerHTML = '<h1>Quick Play</h1>';
    placeBtn.innerHTML = '<h1>Place ships</h1>';
    modal.append(quickBtn, placeBtn);
    container.append(modal);
    modal.showModal();

    return { modal, container, quickBtn, placeBtn };
}

export function domPlayerBoard(player) {
    const divPlayerBoard = domSelector('#p1-board');
    const divFleet = domSelector('#p1-fleet');
    const board = player.getBoard().getBoardStatus().board;

    return { divPlayerBoard, board, divFleet };
}

export function domOpponentBoard(player) {
    const divOpponentBoard = domSelector('#p2-board');
    const divFleet = domSelector('#p2-fleet');
    const board = player.getBoard().getBoardStatus().board;

    return { divOpponentBoard, board, divFleet };
}

export function domDisplayPlacement(player) {
    const fleet = player.getBoard().getBoardStatus().fleet;
    const divTitle = domCreator('div', 'title');
    const divShip = domCreator('div', 'ship', 'ship');
    // divShip.setAttribute('draggable', 'true'); // Allows dragging

    return { divTitle, divShip, fleet };
}

export function domDisplayFleet(player, divFleet) {
    const fleet = player.getBoard().getBoardStatus().fleet;
    const divFleetLegend = domCreator('legend');
    divFleetLegend.textContent = 'My Fleet';
    divFleet.append(divFleetLegend);

    return { fleet };
}

export function domCreateShipsCells(ship) {
    const shipLength = ship.getStatus().length;
    const shipSunk = ship.getStatus().sunk;


    return { shipLength, shipSunk }
}

export function domCreateCell(player, coord, cellType) {
    const cell = domCreator('div', 'board-cell', 'board-cell');
    cell.dataset.position = coord;
    cell.classList.add(cellType ? 'ship' : 'water'); // Add ship or water class depending on the cell content
    
    return { cell}
}