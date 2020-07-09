import API from 'services/api';
import { GET_STARSHIPS } from './types';
import getEndpoint from 'utils/getEndpoint';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetStarship = actionFactory(GET_STARSHIPS);

export const getPlanetsByFilm = (filmId, starshipUrl) => dispatch => {
	const allRequest = starshipUrl.map(url => {
		return API.get(getEndpoint(url)).then(data => data.data);
	});
	Promise.all(allRequest)
		.then(starships => {
			dispatch(successGetStarship({ filmId, starships }));
		})
		.catch(err => dispatch(errorAction(err)));
};
