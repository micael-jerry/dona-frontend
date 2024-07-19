import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { usePositionStore } from '../../stores/position';
import { LeafletMap } from '../../components/leaflet/LeafletMap';
import { ReportResponse } from '../../types/api.types';
import { ReportsGetAllReports } from '../../clients/api';
import { Loader } from '../../components/loader/Loader';

export const Dashboard: React.FC = () => {
	const [reports, setReports] = useState<ReportResponse[]>([]);
	const { position } = usePositionStore();

	const getReports = async () => {
		await ReportsGetAllReports()
			.then((res) => setReports(res.data))
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getReports();
	}, []);

	return (
		<Layout title={'Map'} menu={LAYOUT_MENU}>
			<Loader load={reports.length === 0}>
				<LeafletMap position={position} reports={reports} />
			</Loader>
		</Layout>
	);
};
