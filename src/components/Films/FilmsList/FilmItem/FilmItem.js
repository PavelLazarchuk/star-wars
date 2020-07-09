import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import Planets from 'components/Planets';

const FilmItem = ({ classes, data }) => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Accordion expanded={expanded === data.episode_id} onChange={handleChange(data.episode_id)}>
			<AccordionSummary>
				<div className={classes.head}>
					Star Wars: Episode {`${data.episode_id} - ${data.title}`}
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div>
					<div className={classes.details}>Director: {data.director}</div>
					<div className={classes.details}>Producer: {data.producer}</div>
					<div className={classes.details}>Release date: {data.release_date}</div>
					<div className={classes.details}>Opening crawl: {data.opening_crawl}</div>
					<Planets planetsUrl={data.planets} filmId={data.episode_id} isOpen={expanded} />
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

export default FilmItem;
