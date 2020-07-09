import API from 'services/api';
import { GET_FILMS } from './types';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetFilms = actionFactory(GET_FILMS);

export const getFilms = () => dispatch => {
	API.get('films/')
		.then(({ data }) => {
			dispatch(successGetFilms(data.results));
		})
		.catch(err => dispatch(errorAction(err)));
};
