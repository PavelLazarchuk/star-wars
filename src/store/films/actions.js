import API from 'services/api';
import { GET_FILMS, GET_ONE_FILM } from './types';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetFilms = actionFactory(GET_FILMS);
const successGetOneFilm = actionFactory(GET_ONE_FILM);

export const getFilms = () => dispatch => {
	API.get('films/')
		.then(({ data }) => {
			dispatch(successGetFilms(data.results));
		})
		.catch(err => dispatch(errorAction(err)));
};

export const getOneFilm = id => dispatch => {
	API.get(`films/${id}`)
		.then(({ data }) => {
			dispatch(successGetOneFilm(data));
		})
		.catch(err => dispatch(errorAction(err)));
};
