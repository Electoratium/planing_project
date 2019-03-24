import { FETCH_DAY } from '../sagas/planing';

const initialState = {
  dayPlanning: [],
};

export default function planingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DAY:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return {
        ...state,
      };
  }
}
