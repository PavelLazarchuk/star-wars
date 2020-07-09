import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		textAlign: 'center',
		padding: '15px 0 50px 0',
	},
	input: {
		border: 0,
		outline: 0,
		color: '#ffffff',
		borderRadius: 12,
		padding: '5px 10px',
		backgroundColor: '#8D8A8A',
	},
}));

const Search = () => {
	const classes = useStyles();
	const [value, setValue] = useState('');

	return (
		<div className={classes.root}>
			<input value={value} className={classes.input} onChange={e => setValue(e.target.value)} />
		</div>
	);
};

export default Search;
