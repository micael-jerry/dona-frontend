import { useEffect, useState } from "react";
import "./App.css";
import { LeafletMap } from "./components/leaflet/LeafletMap";
import { LatLng } from "leaflet";

const App = () => {
	const [position, setPosition] = useState<LatLng>(new LatLng(-18.9038592, 47.5292364));

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((p: GeolocationPosition) => {
				setPosition(new LatLng(p.coords.latitude, p.coords.longitude));
			});
		}
	}, []);

	return <LeafletMap position={position} />;
};

export default App;
