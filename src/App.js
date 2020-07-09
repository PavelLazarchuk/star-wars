import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MainPage from 'pages/MainPage';

const useStyles = makeStyles(() => ({
	root: {
		minHeight: '100vh',
		backgroundColor: '#424242',
		fontFamily: '"Open Sans", sans-serif',
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MainPage />
		</div>
	);
};

export default App;
