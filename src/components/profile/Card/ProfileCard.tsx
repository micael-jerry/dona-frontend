import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import { UserResponse } from '../../../types/api.types';

interface ProfileCardProps {
	user: UserResponse | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center" p={2}>
			<Avatar src="path_to_image" alt="Profile Picture" sx={{ width: 100, height: 100 }} />
			<Typography variant="h6">{`${user?.lastname} ${user?.firstname}`}</Typography>
			<Typography variant="subtitle1">{user?.pseudo}</Typography>
			<Typography variant="subtitle1">{user?.email}</Typography>
			<Typography variant="body2">{user?.birthday.toString()}</Typography>
			<Typography variant="body2">{user?.bio}</Typography>
		</Box>
	);
};
