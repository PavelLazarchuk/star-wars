import React from 'react';

import FilmItem from './FilmItem';

const FilmsList = ({ list, error }) => (
	<>
		<div>{error && error}</div>
		{list
			.sort((a, b) => a.episode_id - b.episode_id)
			.map(elem => (
				<FilmItem key={elem.episode_id} data={elem} />
			))}
	</>
);

export default FilmsList;
