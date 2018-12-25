import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Styles/Index.css';
import {Provider} from "react-redux";


import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);
