import API from 'services/api';
import { GET_CHARACTERS } from './types';
import getEndpoint from 'utils/getEndpoint';
import { errorAction } from 'utils/action/errorAction';
import actionFactory from 'utils/action/actionFactory';

const successGetCharacter = actionFactory(GET_CHARACTERS);

export const getCharactersByFilm = (filmId, characterUrl) => dispatch => {
	const allRequest = characterUrl.map(url => {
		return API.get(getEndpoint(url)).then(data => data.data);
	});
	Promise.all(allRequest)
		.then(characters => {
			dispatch(successGetCharacter({ filmId, characters }));
		})
		.catch(err => dispatch(errorAction(err)));
};
