import {combineReducers} from 'redux';

import CarsReducer from './car';
import CarActiveReducer from './car-active';

import LoginReducer from './login';


const allReducers = combineReducers({
   cars: CarsReducer,
   carActive: CarActiveReducer,
   login: LoginReducer
});


export default allReducers;