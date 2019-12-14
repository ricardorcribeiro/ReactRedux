import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'// Middleware para chamar mais de uma action por vez
import thunk from 'redux-thunk'// Middleware para fazer uma multi chamada de actions esperar o result da promises para execultar a proxima acion

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))