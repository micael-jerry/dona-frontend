import { useEffect, useState } from 'react';
import './App.css';
import { LatLng } from 'leaflet';
import { AuthProvider } from './provider/AuthProvider';
import { Routes } from './routes';

const App = () => {
	const [position, setPosition] = useState<LatLng>(new LatLng(-18.9038592, 47.5292364));

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((p: GeolocationPosition) => {
				setPosition(new LatLng(p.coords.latitude, p.coords.longitude));
			});
		}
	}, []);

	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};

export default App;
