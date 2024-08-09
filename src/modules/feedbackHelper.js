// feedbackHelper.js

import { domCreator, domSelector } from "./domHelper";

export const feedback = (function() {

    function top(m, imageURL = null){
        const feedback = domSelector('.top');
        feedback.innerHTML = '';
        // feedback.textContent = m;
        if (imageURL) {
            const img = domCreator('img');
            img.src = imageURL;
            img.alt = 'Feedback Image';
            img.className = 'feedback-image'; // Add a class for styling
            feedback.appendChild(img);
        }

        const text = domCreator('div');
        text.className = 'feedback-text';
        text.innerHTML = m;
        feedback.appendChild(text);
    }

    function middle(m){
        const feedback = domSelector('.middle');
        feedback.textContent = m;
        
        // Reset the animation by removing the class
        feedback.classList.remove('fade-out');
        setTimeout(() => feedback.classList.add('fade-out'), 10); 
    }
    
    function bottom(m){
        const feedback = domSelector('.bottom');
        feedback.textContent = m;
    }

    return { top, middle, bottom };
})();

