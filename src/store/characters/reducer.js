import { GET_CHARACTERS } from './types';

const initialState = {
	characters: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				characters: {
					...state.characters,
					[action.payload.filmId]: action.payload.characters,
				},
			};

		default:
			return state;
	}
};
