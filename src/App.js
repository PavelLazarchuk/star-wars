import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import FilmItemPage from 'pages/FilmItemPage';

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
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/film/:id" component={FilmItemPage} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
