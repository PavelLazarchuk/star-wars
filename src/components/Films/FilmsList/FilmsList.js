import React from 'react';

import useStyles from './styles';
import FilmItem from './FilmItem';

const FilmsList = ({ list, error }) => {
	const classes = useStyles();
	return (
		<>
			<div>{error && error}</div>
			{list
				.sort((a, b) => a.episode_id - b.episode_id)
				.map(elem => (
					<FilmItem key={elem.episode_id} data={elem} classes={classes} />
				))}
		</>
	);
};

export default FilmsList;
