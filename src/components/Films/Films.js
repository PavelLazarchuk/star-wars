import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FilmsList from './FilmsList';
import Preloader from '../Preloader';
import { getFilms } from 'store/films/actions';

const Films = ({ getFilms, filmList, error }) => {
	useEffect(() => {
		getFilms();
	}, [getFilms]);

	return filmList ? <FilmsList list={filmList} error={error} /> : <Preloader />;
};

const mapStateToProps = ({ films }) => ({
	filmList: films.films,
	error: films.error,
});

const mapDispatchToProps = {
	getFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
