import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { usePositionStore } from '../../stores/position';
import { LeafletMap } from '../../components/leaflet/LeafletMap';

export const Dashboard: React.FC = () => {
	const { position } = usePositionStore();
	return (
		<Layout title={'Map'} menu={LAYOUT_MENU}>
			<LeafletMap position={position} />
		</Layout>
	);
};
