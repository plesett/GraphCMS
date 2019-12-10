import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/';
import RouterIndex from './router/';
import * as serviceWorker from './serviceWorker';

import './static/reset.css';
import './mock/apiHome';

ReactDOM.render(
    <Provider store={store}>
        <RouterIndex />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
