import React from 'react';

import useStyles from './styles';
import PlanetItem from './PlanetItem';

const PlanetsList = ({ planets, filmId }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<p className={classes.title}>The planets of this episode:</p>
			{planets &&
				planets[filmId] &&
				planets[filmId].map(elem => <PlanetItem key={elem.name} data={elem} classes={classes} />)}
		</div>
	);
};

export default PlanetsList;
