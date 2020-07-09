import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterItem from './CharacterItem';
import WrapEntitiesList from '../WrapEntitiesList';
import { getCharactersByFilm } from 'store/characters/actions';

const Characters = ({ isOpen, filmId, charactersUrl, getCharactersByFilm, characters }) => {
	useEffect(() => {
		isOpen && getCharactersByFilm(filmId, charactersUrl);
	}, [isOpen, getCharactersByFilm, charactersUrl, filmId]);

	return (
		<WrapEntitiesList
			list={characters}
			filmId={filmId}
			title="characters"
			Component={CharacterItem}
		/>
	);
};

const mapStateToProps = ({ characters }) => ({
	characters: characters.characters,
});

const mapDispatchToProps = { getCharactersByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
