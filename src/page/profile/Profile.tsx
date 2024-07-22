import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { LAYOUT_MENU } from '../../constants/layout.menu';
import { UserResponse } from '../../types/api.types';
import { authWhoami } from '../../clients/api';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '../../constants/routes';
import { ProfileCard } from '../../components/profile/Card/ProfileCard';
import { EditProfileForm } from '../../components/profile/Form/EditProfileForm';
import { Loader } from '../../components/Loader/Loader';

export const Profile: React.FC = () => {
	const [user, setUser] = useState<UserResponse | null>(null);
	const navigate = useNavigate();

	const getUser = async () => {
		await authWhoami()
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
				<Loader load={!user}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={8}>
							<Box mb={2}>
								<EditProfileForm user={user} />
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box mb={2}>
								<ProfileCard user={user} />
							</Box>
						</Grid>
					</Grid>
				</Loader>
			</Container>
		</Layout>
	);
};
