import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StarshipItem from './StarshipItem';
import WrapEntitiesList from '../WrapEntitiesList';
import { getStarshipsByFilm } from 'store/starships/actions';

const Starships = ({ isOpen, starshipsUrl, getStarshipsByFilm, starships, filmId }) => {
	useEffect(() => {
		isOpen && getStarshipsByFilm(filmId, starshipsUrl);
	}, [isOpen, getStarshipsByFilm, starshipsUrl, filmId]);

	return (
		<WrapEntitiesList list={starships} filmId={filmId} title="starships" Component={StarshipItem} />
	);
};

const mapStateToProps = ({ starships }) => ({
	starships: starships.starships,
});

const mapDispatchToProps = { getStarshipsByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
