// domHelper.js

export function domSelector(name) {
    return document.querySelector(name);
}

export function domCreator(name){
    return document.createElement(name);
}