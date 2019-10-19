import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'// "applyMiddleware" metodo que massa qual e o middleware
import { Provider } from 'react-redux'
import reducers from './reducers'
import promise from 'redux-promise'// biblioteca para esperar os resultados das promises


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // essa linha e para usar a estencao do navegador chrome redux-devtools
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
