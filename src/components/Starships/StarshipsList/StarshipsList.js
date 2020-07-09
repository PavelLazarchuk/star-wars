import React from 'react';

import StarshipItem from './StarshipItem';
import useStyles from '../../Planets/PlanetsList/styles';

const StarshipsList = ({ starships, filmId }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<p className={classes.title}>The starships of this episode:</p>
			{starships &&
				starships[filmId] &&
				starships[filmId].map(elem => (
					<StarshipItem key={elem.name} data={elem} classes={classes} />
				))}
		</div>
	);
};

export default StarshipsList;
