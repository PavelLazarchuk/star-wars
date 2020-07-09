import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import filmReducer from './films/reducer';
import planetsReducer from './planets/reducer';

const rootReducer = combineReducers({
	films: filmReducer,
	planets: planetsReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, undefined, enhancer(applyMiddleware(thunk)));

export default store;
