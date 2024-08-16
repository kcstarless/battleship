// feedbackHelper.js

import { domCreator, domSelector } from "./domHelper";

export const feedback = (function() {

    function top(m, imageURL = null){
        const feedback = domSelector('.top');
        feedback.innerHTML = `<h1>${m}</h1>`;
        // feedback.classList.remove('fade-out');
        // setTimeout(() => feedback.classList.add('fade-out'), 10); 

        if (imageURL) {
            const img = domCreator('img');
            img.src = imageURL;
            img.alt = 'Feedback Image';
            img.className = 'feedback-image'; // Add a class for styling
            feedback.appendChild(img);
        }

        // const text = domCreator('div');
        // text.className = 'feedback-text';
        // text.innerHTML = m;
        // feedback.appendChild(text);
    }

    function middle(m, sunk = null){
        const feedback = domSelector('.middle');
        feedback.classList.remove('sunk');
        if(sunk) feedback.classList.add('sunk');
        feedback.textContent = m;
        // Reset the animation by removing the class
        feedback.classList.remove('fade-out');
        setTimeout(() => feedback.classList.add('fade-out'), 10); 
    }
    
    function bottom(m){
        const feedback = domSelector('.bottom');
        feedback.innerHTML = `<h3>${m}</h3>`;
        feedback.classList.remove('fade-out');
        setTimeout(() => feedback.classList.add('fade-out'), 10);
        // feedback.textContent = '';
    }

    function direction(m) {
        const feedback = domSelector('.direction');
        m = m === 'horizontal' ? `<h3>EAST -> WEST</h3>` : `<h3>NORTH -> SOUTH</h3>`;
        feedback.innerHTML = m;
    }

    return { top, middle, bottom, direction};
})();

