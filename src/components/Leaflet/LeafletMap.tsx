import './LeafletMap.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import { ReportResponse } from '../../types/api.types';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { ReportBottomNav } from '../report/BottomNav/ReportBottomNav';
import { usePositionStore } from '../../stores/position';

export interface LeafletMapProps {
	reports: ReportResponse[];
}

const markerIcons = {
	POLICE: new Icon({
		iconUrl: 'https://img.icons8.com/?size=100&id=23311&format=png&color=000000',
		iconSize: [35, 35],
	}),
};

export const LeafletMap: React.FC<LeafletMapProps> = ({ reports }) => {
	const { position } = usePositionStore();
	const [positionClicked, setPositionClicked] = useState<LatLng | null>(null);

	const MapClickHandler = () => {
		useMapEvents({
			click(e) {
				setPositionClicked(e.latlng);
			},
		});
		return null;
	};

	return (
		<Box>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{reports.map((report) => {
					const latLng = new LatLng(report.location.coordinates[1], report.location.coordinates[0]);
					return (
						<Marker position={latLng} key={`${report.location.coordinates.toString()}`} icon={markerIcons[report.type]}>
							<Popup>
								<Typography component={'p'}>Hour: {dayjs(report.createdAt).format('HH:mm:ss')}</Typography>
								<Typography component={'p'}>Description: {report.description}</Typography>
								<Typography component={'p'}>{`Lat: ${latLng.lat} Lng: ${latLng.lng}`}</Typography>
							</Popup>
						</Marker>
					);
				})}
				{positionClicked && (
					<Marker position={positionClicked}>
						<Popup>{`lat: ${positionClicked.lat} lng: ${positionClicked.lng}`}</Popup>
					</Marker>
				)}
				<MapClickHandler />
			</MapContainer>
			<ReportBottomNav positionClicked={positionClicked} />
		</Box>
	);
};
