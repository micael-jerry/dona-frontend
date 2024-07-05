import { LatLng } from 'leaflet';
import { create } from 'zustand';

interface PositionState {
	position: LatLng;
	setPosition: (newPosition: LatLng) => void;
}

export const usePositionStore = create<PositionState>()((set) => ({
	position: new LatLng(-18.9038592, 47.5292364),
	setPosition: (newPosition: LatLng) => set(() => ({ position: newPosition })),
}));
