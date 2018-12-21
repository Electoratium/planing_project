// applyMiddleware для применения плагинов
import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';

import logger from 'redux-logger';

// делаем хранилище асинхронным
import promise from 'redux-promise';

export default createStore(allReducers, applyMiddleware(promise, logger));