import API from 'services/api';
import { GET_PLANETS } from './types';
import getEndpoint from 'utils/getEndpoint';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetPlanet = actionFactory(GET_PLANETS);

export const getPlanetsByFilm = (filmId, planetsUrl) => dispatch => {
	const allRequest = planetsUrl.map(url => {
		return API.get(getEndpoint(url)).then(data => data.data);
	});
	Promise.all(allRequest)
		.then(planets => {
			dispatch(successGetPlanet({ filmId, planets }));
		})
		.catch(err => dispatch(errorAction(err)));
};
