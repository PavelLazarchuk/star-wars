import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const VehiclesItem = ({ data, classes }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Accordion expanded={expanded === data.name} onChange={handleChange(data.name)}>
			<AccordionSummary>
				<div className={classes.bold}>Vehicles name: {data.name}</div>
			</AccordionSummary>
			<AccordionDetails>
				<div>
					<div className={classes.details}>Model: {data.model}</div>
					<div className={classes.details}>
						Max atmosphering speed: {data.max_atmosphering_speed}
					</div>
					<div className={classes.details}>Manufacturer: {data.manufacturer}</div>
					<div className={classes.details}>Length: {data.length}</div>
					<div className={classes.details}>Passengers: {data.passengers}</div>
					<div className={classes.details}>Vehicle class: {data.vehicle_class}</div>
					<div className={classes.details}>Cost in credits: {data.cost_in_credits}</div>
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

export default VehiclesItem;
