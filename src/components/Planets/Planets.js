import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PlanetsList from './PlanetsList';
import { getPlanetsByFilm } from 'store/planets/actions';

const Planets = ({ isOpen, planetsUrl, getPlanetsByFilm, planets, filmId }) => {
	useEffect(() => {
		isOpen && getPlanetsByFilm(filmId, planetsUrl);
	}, [isOpen, getPlanetsByFilm, planetsUrl, filmId]);

	return <PlanetsList planets={planets} filmId={filmId} />;
};

const mapStateToProps = ({ planets }) => ({
	planets: planets.planets,
});

const mapDispatchToProps = { getPlanetsByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
