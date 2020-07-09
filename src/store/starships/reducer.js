import { GET_STARSHIPS, GET_VEHICLES } from './types';

const initialState = {
	vehicles: null,
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

		case GET_VEHICLES:
			return {
				...state,
				vehicles: {
					...state.vehicles,
					[action.payload.filmId]: action.payload.vehicles,
				},
			};

		default:
			return state;
	}
};
