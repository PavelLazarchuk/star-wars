import { GET_FILMS, GET_ONE_FILM } from './types';
import { ERROR } from 'utils/action/errorAction';

const initialState = {
	films: null,
	oneFilm: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FILMS:
			return {
				...state,
				films: action.payload,
			};

		case GET_ONE_FILM:
			return {
				...state,
				oneFilm: action.payload,
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
