import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../css/app.css'
import configureStore from './store/configureStore'

import App from './containers/App'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
