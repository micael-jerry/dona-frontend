import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { LeafletMap } from '../../components/Leaflet/LeafletMap';
import { ReportResponse } from '../../types/api.types';
import { reportsGetAllReports } from '../../clients/api';
import { Loader } from '../../components/Loader/Loader';

export const Dashboard: React.FC = () => {
	const [reports, setReports] = useState<ReportResponse[]>([]);

	const getReports = async () => {
		await reportsGetAllReports({ date: 'now' })
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
				<LeafletMap reports={reports} />
			</Loader>
		</Layout>
	);
};
