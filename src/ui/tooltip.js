import './styles/tooltip.css';

class Tooltip{
    constructor(element){ //element is the thing we want to use the tooltip on
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){ //to initialize our component
        const tip = document.createElement('div'); //creates the bubble(tooltip)
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
 }

 export {Tooltip as default};