import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import VehiclesItem from './VehiclesItem';
import WrapEntitiesList from '../WrapEntitiesList';
import { getVehiclesByFilm } from 'store/starships/actions';

const Vehicles = ({ isOpen, vehiclesUrl, getVehiclesByFilm, vehicles, filmId }) => {
	useEffect(() => {
		isOpen && getVehiclesByFilm(filmId, vehiclesUrl);
	}, [isOpen, getVehiclesByFilm, vehiclesUrl, filmId]);

	return (
		<WrapEntitiesList list={vehicles} filmId={filmId} title="vehicles" Component={VehiclesItem} />
	);
};

const mapStateToProps = ({ starships }) => ({
	vehicles: starships.vehicles,
});

const mapDispatchToProps = { getVehiclesByFilm };

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
