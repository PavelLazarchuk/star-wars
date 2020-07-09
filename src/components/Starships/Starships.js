import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StarshipsList from './StarshipsList';
import { getStarshipsByFilm } from 'store/starships/actions';

const Starships = ({ isOpen, starshipsUrl, getStarshipsByFilm, starships, filmId }) => {
	useEffect(() => {
		isOpen && getStarshipsByFilm(filmId, starshipsUrl);
	}, [isOpen, getStarshipsByFilm, starshipsUrl, filmId]);

	return <StarshipsList starships={starships} filmId={filmId} />;
};

const mapStateToProps = ({ starships }) => ({
	starships: starships.starships,
});

const mapDispatchToProps = { getStarshipsByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
