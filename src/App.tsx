import { useCallback, useEffect } from 'react';
import './App.css';
import { LatLng } from 'leaflet';
import { AuthProvider } from './provider/AuthProvider';
import { Routes } from './routes';
import { usePositionStore } from './stores/position';

const App = () => {
	const { setPosition } = usePositionStore();

	const getCurrentLocation = useCallback(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(p: GeolocationPosition) => {
					setPosition(new LatLng(p.coords.latitude, p.coords.longitude));
				},
				(err: GeolocationPositionError) => {
					console.log(err);
				},
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0,
				},
			);
		}
	}, [setPosition]);

	useEffect(() => {
		getCurrentLocation();
	}, [getCurrentLocation]);

	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};

export default App;
