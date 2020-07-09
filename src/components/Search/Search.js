import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from './styles';

const Search = ({ filmList }) => {
	const classes = useStyles();

	const getFilmId = url => url.split('http://swapi.dev/api/films/')[1];

	return (
		<Autocomplete
			autoComplete
			options={filmList || []}
			noOptionsText="No Films"
			className={classes.input}
			getOptionLabel={option => option.title}
			renderOption={option => (
				<Link to={`/film/${getFilmId(option.url)}`} className={classes.linkSearch}>
					Star Wars: Episode {`${option.episode_id} - ${option.title}`}
				</Link>
			)}
			renderInput={params => (
				<TextField {...params} size="small" placeholder="search film by name..." fullWidth />
			)}
		/>
	);
};

const mapStateToProps = ({ films }) => ({
	filmList: films.films,
});

export default connect(mapStateToProps)(Search);
