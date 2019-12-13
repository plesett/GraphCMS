import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import store, { persistor } from './store/';
import RouterIndex from './router/';
import * as serviceWorker from './serviceWorker';

import './static/reset.css';
import './static/icon/iconfont.css';
import './mock/api';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterIndex />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
