import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const PlanetItem = ({ data, classes }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Accordion expanded={expanded === data.name} onChange={handleChange(data.name)}>
			<AccordionSummary>
				<div className={classes.bold}>Planet name: {data.name}</div>
			</AccordionSummary>
			<AccordionDetails>
				<div>
					<div className={classes.details}>Climate: {data.climate}</div>
					<div className={classes.details}>Gravity: {data.gravity}</div>
					<div className={classes.details}>Terrain: {data.terrain}</div>
					<div className={classes.details}>Diameter: {data.diameter}</div>
					<div className={classes.details}>Population: {data.population}</div>
					<div className={classes.details}>Orbital period: {data.orbital_period}</div>
					<div className={classes.details}>Rotation period: {data.rotation_period}</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

export default PlanetItem;
