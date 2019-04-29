import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
/*import App from './App2.js';*/
/*import App from './App3.js';*/
/*import App from './App4.js';*/
/*import App from './App5.js';*/
/*import App from './TPTask.js'*/
/*import App from './TPTask(2).js'*/
/*import App from './TPTask(3).js'*/
/*import App from './cycleDeVie.js'*/
/*import App from './AjaxReact.js'*/

import * as serviceWorker from './serviceWorker';


// on donne ici a App qui est une classe fabriquée dans App.js 2 propriétées appelées dataProps1 et dataProps2
/*ReactDOM.render(<App  dataProps="Hello World" dataProps2={"blabla"} />, document.getElementById('root'));*/
ReactDOM.render(<App/>, document.getElementById('root'));



setTimeout(()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))}, 300000)
// cette méthode est utilisée pour les cycle de vie pour unmount un component

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
