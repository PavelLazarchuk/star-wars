import API from 'services/api';
import getEndpoint from 'utils/getEndpoint';
import { GET_STARSHIPS, GET_VEHICLES } from './types';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetVehicles = actionFactory(GET_VEHICLES);
const successGetStarship = actionFactory(GET_STARSHIPS);

export const getStarshipsByFilm = (filmId, starshipUrl) => dispatch => {
	const allRequest = starshipUrl.map(url => {
		return API.get(getEndpoint(url)).then(data => data.data);
	});
	Promise.all(allRequest)
		.then(starships => {
			dispatch(successGetStarship({ filmId, starships }));
		})
		.catch(err => dispatch(errorAction(err)));
};

export const getVehiclesByFilm = (filmId, vehiclesUrl) => dispatch => {
	const allRequest = vehiclesUrl.map(url => {
		return API.get(getEndpoint(url)).then(data => data.data);
	});
	Promise.all(allRequest)
		.then(vehicles => {
			dispatch(successGetVehicles({ filmId, vehicles }));
		})
		.catch(err => dispatch(errorAction(err)));
};
