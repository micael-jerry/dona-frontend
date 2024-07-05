import "./LeafletMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";

export interface LeafletMapProps {
	position: LatLng;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ position }) => {
	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>{`lat: ${position.lat} lng: ${position.lng}`}</Popup>
			</Marker>
		</MapContainer>
	);
};
