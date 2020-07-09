import { GET_PLANETS } from './types';

const initialState = {
	planets: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PLANETS:
			return {
				...state,
				planets: {
					...state.planets,
					[action.payload.filmId]: action.payload.planets,
				},
			};

		default:
			return state;
	}
};
