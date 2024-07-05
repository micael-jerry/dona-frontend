import { useEffect } from 'react';
import './App.css';
import { LatLng } from 'leaflet';
import { AuthProvider } from './provider/AuthProvider';
import { Routes } from './routes';
import { usePositionStore } from './stores/position';

const App = () => {
	const { setPosition } = usePositionStore();

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((p: GeolocationPosition) => {
				setPosition(new LatLng(p.coords.latitude, p.coords.longitude));
			});
		}
	}, [setPosition]);

	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};

export default App;
