import { FETCH_DAY } from '../actions/planing';
<<<<<<< HEAD
import constants from '../modules/constants';
=======
>>>>>>> 9ac2862d84c98d2181c2b0d28f754122f33114f4

const initialState = {
  dayPlanning: [],
};

export default function planingReducer(state = initialState, action) {
  switch (action.type) {
<<<<<<< HEAD
    // case FETCH_DAY:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    case constants.plainningStatus.dayLoaded:
      return {
        ...state,
        dayPlanning: action.payload,
      };
    default:
      return state;
=======
    case FETCH_DAY:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return {
        ...state,
      };
>>>>>>> 9ac2862d84c98d2181c2b0d28f754122f33114f4
  }
}
