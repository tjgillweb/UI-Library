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
