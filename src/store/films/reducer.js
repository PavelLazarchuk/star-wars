import { GET_FILMS } from './types';
import { ERROR } from 'utils/action/errorAction';

const initialState = {
	films: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FILMS:
			return {
				...state,
				films: action.payload,
			};

		case ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
