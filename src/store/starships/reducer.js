import { GET_STARSHIPS } from './types';

const initialState = {
	starships: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_STARSHIPS:
			return {
				...state,
				starships: {
					...state.starships,
					[action.payload.filmId]: action.payload.starships,
				},
			};

		default:
			return state;
	}
};
