import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { UserResponse } from '../../types/api.types';
import { AuthWhoami } from '../../clients/api';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '../../constants/routes';
import GeneralInformationForm from '../../components/profile/EditProfilForm';
import { ProfileCard } from '../../components/profile/ProfileCard';

export const Profile: React.FC = () => {
	const [user, setUser] = useState<UserResponse | null>(null);
	const navigate = useNavigate();

	const getUser = async () => {
		await AuthWhoami()
			.then((res) => setUser(res.data))
			.catch((err) => {
				console.log(err);
				navigate(DASHBOARD_ROUTE);
			});
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<Layout title={'Profile'} menu={LAYOUT_MENU}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={8}>
						<Box mb={2}>
							<GeneralInformationForm />
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box mb={2}>
							<ProfileCard user={user} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Layout>
	);
};
