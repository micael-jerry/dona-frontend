import './ProfileCard.css';
import React from 'react';
import { Avatar, Typography, Card, CardContent, Grid } from '@mui/material';
import { UserResponse } from '../../../types/api.types';

interface ProfileCardProps {
	user: UserResponse | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
	return (
		<Card className={'profile-card'}>
			<CardContent>
				<Grid container direction="column" alignItems="center">
					<Avatar className={'profile-avatar'} />
					<Typography variant="h5">{`${user?.firstname} ${user?.lastname}`}</Typography>
					<Typography variant="body2" color="textSecondary">{`@${user?.pseudo}`}</Typography>
				</Grid>
				<div className={'profile-user-info'}>
					<Typography variant="h6">User Information</Typography>
					<Typography variant="body2">
						<strong>First Name:</strong> {user?.firstname}
					</Typography>
					<Typography variant="body2">
						<strong>Last Name:</strong> {user?.lastname}
					</Typography>
					<Typography variant="body2">
						<strong>Email:</strong> {user?.email}
					</Typography>
					<Typography variant="body2">
						<strong>Username:</strong> {`@${user?.pseudo}`}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
};
