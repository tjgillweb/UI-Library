# UI-Library

### Install Webpack Boilerplate 
Install the boilerplate files by running this command in the terminal:
```
$ npm install
```

### Install CSS and Style Loaders
- We will add all the CSS inside the src/ui/styles folder so that its together with the javascript files.
- Then when we need to use the CSS, we just import it from a JS file.
- To do all this, we must process all our CSS files for the UI Library through the Webpack module system.  

- In the `webpack.config` file we configure the rules for our module system. We just have one rule which is for passing the javascript files through the Babel Loader.
- We need to make another **rule that will pass our CSS through a couple of CSS loaders**.

Install CSS loader and style loader using the following command:
```
$ npm install css-loader style-loader --save-dev
```
- CSS Loader will help Webpack to collect CSS from a CSS file when we import it 
- Style Loader takes that CSS and it adds it to our HTML page.

Setup the rule in `webpack.config` file
```Javascript
module: {
        rules: [
            {
            test: /\.js$/,
            ...
            ...
            },
            {
                test: /\.css$/,
                //array of loaders. Order is important here.
                use: ['style-loader', 'css-loader'] //runs from right to left
            }
        ]
    }
```
- Now whenever we import a CSS file into a Javascript file then, it will run that CSS through these loaders, add that CSS to the DOM.

- To test this, restart the webpack server by using `npm run serve`
- Create a new file `test.css` inside src folder.
```CSS
body{
  background: #BADA55;
}
```
- The style loader adds the style tag to the head section of the HTML page.

### Tooltip

#### HTML (index.html)
```HTML
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>UI Library</title>
  <style>
    body{ font-size: 1.5em; }
    .container{ margin: 40px; margin-top: 60px; }
  </style>
</head>
<body>

  <div class="container">
    <!-- tooltip -->
    <p>Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. 
    <span class="tooltip" data-message="I'm a tooltip!!">Illum aspernatur</span> 
    aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.</p>
  </div>
  
  <script src="assets/bundle.js"></script>
</body>
</html>
```
- Create `tooltip.js` file inside ui folder.
- Create a class for tooltip component.   

**tooltip.js**
```Javascript
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
 ```

**index.js**
 ```Javascript
 import Tooltip from './ui/tooltip'

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();
 ```
 
- Create tooltip.css inside ui/styles folder  

**tooltip.css**
 ```CSS
.tooltip{
  position: relative;
  display: inline-block;
  color: #ff6565;
  border-bottom: 1px dotted #ff6565;
  cursor: help;
}
.tip{
  visibility: hidden;
  width: 150px;
  background-color: #ff6565;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
  position: absolute;
  bottom: 120%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tip.active{
  visibility: visible;
  opacity: 1;
}
.tip::after{
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -4px;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  border-top-color: #ff6565;
}
 ```
