import './styles/tabs.css';
class Tabs {
    constructor(container) { //container is the div with class tabs
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger'); // all the li tags with class trigger
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e) {
        //remove current active classes from all the tabs
        this.tabs.forEach(tab => tab.classList.remove('active'));

        //add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        //remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });

        //add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export {
    Tabs as
    default
};