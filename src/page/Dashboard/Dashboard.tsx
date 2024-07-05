import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { usePositionStore } from '../../stores/position';
import { LeafletMap } from '../../components/leaflet/LeafletMap';

export const Dashboard: React.FC = () => {
	const { position } = usePositionStore();
	return (
		<Layout menu={LAYOUT_MENU}>
			<LeafletMap position={position} />
		</Layout>
	);
};
