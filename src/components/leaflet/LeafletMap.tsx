import React, { useEffect, useState } from "react";
import "./LeafletMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export const LeafletMap: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    -18.9038592, 47.5292364,
  ]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((p: GeolocationPosition) => {
        setPosition([p.coords.latitude, p.coords.longitude]);
      });
    }
  }, []);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {position.toString()}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
