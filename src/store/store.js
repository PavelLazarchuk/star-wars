import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import filmReducer from './films/reducer';
import planetsReducer from './planets/reducer';
import starshipsReducer from './starships/reducer';
import charactersReducer from './characters/reducer';

const rootReducer = combineReducers({
	films: filmReducer,
	planets: planetsReducer,
	starships: starshipsReducer,
	characters: charactersReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined, enhancer(applyMiddleware(thunk)));

export default store;
