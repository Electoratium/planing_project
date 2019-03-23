import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../reducers/index';




import logger from '../middleware/logger';


console.log(logger);
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk, logger)));
