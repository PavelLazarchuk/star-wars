import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PlanetItem from './PlanetItem';
import WrapEntitiesList from '../WrapEntitiesList';
import { getPlanetsByFilm } from 'store/planets/actions';

const Planets = ({ isOpen, planetsUrl, getPlanetsByFilm, planets, filmId }) => {
	useEffect(() => {
		isOpen && getPlanetsByFilm(filmId, planetsUrl);
	}, [isOpen, getPlanetsByFilm, planetsUrl, filmId]);

	return <WrapEntitiesList list={planets} filmId={filmId} title="planets" Component={PlanetItem} />;
};

const mapStateToProps = ({ planets }) => ({
	planets: planets.planets,
});

const mapDispatchToProps = { getPlanetsByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
