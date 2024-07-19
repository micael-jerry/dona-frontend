import './LeafletMap.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { ReportResponse } from '../../types/api.types';

export interface LeafletMapProps {
	position: LatLng;
	reports: ReportResponse[];
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ position, reports }) => {
	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{reports.map((report) => {
				const latLng = new LatLng(report.location.coordinates[1], report.location.coordinates[0]);
				return (
					<Marker position={latLng} key={`${report.location.coordinates.toString()}`}>
						<Popup>{`lat: ${latLng.lat} lng: ${latLng.lng}`}</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};
