import './styles/dropdown.css';

class Dropdown {
    constructor(container) { //container is the div with class dropdown
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    //show/hide content when user clicks on trigger
    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        })
    }
}
export {
    Dropdown as
    default
};