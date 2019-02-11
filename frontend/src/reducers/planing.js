import { FETCH_DAY } from "../actions/planing";

const initialState = {};

export default function planingReducer(state, action) {
	switch (action.type) {
		case FETCH_DAY:
			return {
				...state,
				...action.payload
			};
		default:
			return initialState;
	}
}