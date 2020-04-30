import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

//create two class instances, one for each dropdown
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})