import React, { useState, useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import API from 'services/api';
import getEndpoint from 'utils/getEndpoint';

const CharacterItem = ({ data, classes }) => {
	const [home, setHome] = useState('');
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		API.get(getEndpoint(data.homeworld)).then(result => setHome(result.data.name));
	}, [data.homeworld]);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Accordion expanded={expanded === data.name} onChange={handleChange(data.name)}>
			<AccordionSummary>
				<div className={classes.bold}>Character name: {data.name}</div>
			</AccordionSummary>
			<AccordionDetails>
				<div>
					<div className={classes.details}>Mass: {data.mass}</div>
					<div className={classes.details}>Height: {data.height}</div>
					<div className={classes.details}>Hair color: {data.hair_color}</div>
					<div className={classes.details}>Skin color: {data.skin_color}</div>
					<div className={classes.details}>Eye color: {data.eye_color}</div>
					<div className={classes.details}>Gender: {data.gender}</div>
					<div className={classes.details}>Birth year: {data.birth_year}</div>
					<div className={classes.details}>Homeworld: {home}</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

export default CharacterItem;
