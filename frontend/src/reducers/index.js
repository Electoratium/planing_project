import { combineReducers } from 'redux';

import LoginReducer from './login';
import PlaningReducer from './planing';


const allReducers = combineReducers({
  planing: PlaningReducer,
  login: LoginReducer,
});


export default allReducers;
