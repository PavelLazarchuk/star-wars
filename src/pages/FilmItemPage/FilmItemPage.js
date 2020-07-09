import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Preloader from 'components/Preloader';
import { getOneFilm } from 'store/films/actions';
import FilmItem from 'components/Films/FilmsList/FilmItem';

const FilmItemPage = ({ film, getOneFilm }) => {
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		getOneFilm(id);
	}, [getOneFilm, id]);

	return (
		<Container>
			{film ? (
				<div className={classes.root}>
					<Link to="/" className={classes.link}>
						Go back
					</Link>
					<FilmItem data={film} />
				</div>
			) : (
				<Preloader />
			)}
		</Container>
	);
};

const mapStateToProps = ({ films }) => ({
	film: films.oneFilm,
});

const mapDispatchToProps = {
	getOneFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmItemPage);
