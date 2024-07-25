import { LatLng } from 'leaflet';
import { create } from 'zustand';

interface PositionState {
	position: LatLng;
	setPosition: (newPosition: LatLng) => void;
}

export const usePositionStore = create<PositionState>()((set) => ({
	position: new LatLng( -18.915339982274325, 47.5215768814087),
	setPosition: (newPosition: LatLng) => set(() => ({ position: newPosition })),
}));
