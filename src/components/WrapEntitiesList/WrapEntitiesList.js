import React from 'react';

import useStyles from './styles';

const WrapEntitiesList = ({ list, filmId, title, Component }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<p className={classes.title}>The {title} of this episode:</p>
			{list &&
				list[filmId] &&
				list[filmId].map(elem => <Component key={elem.name} data={elem} classes={classes} />)}
		</div>
	);
};

export default WrapEntitiesList;
