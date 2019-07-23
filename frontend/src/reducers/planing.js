import { Map, List } from 'immutable';
import { FETCH_DAY } from '../sagas/planing';

const initialState = new Map ({
	dayPlanning: new List(),
});

export default function planingReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DAY:

			//JUST FOR TEST YOU HAVE TO CHANGE IT BY FETCHING THIS INDEX FROM BACK
			const dayIndex = '1';

			return state.setIn(['state', dayIndex], action.payload);

			// return {
			// 	...state,
			// 	tasks: action.payload
			// };
		default:
			return state;
			// return {
			// 	...state,
			// };
	}
}
