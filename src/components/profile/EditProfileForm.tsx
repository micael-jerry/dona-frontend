import React from 'react';
import { TextField, Box, Grid, MenuItem, Typography, Button } from '@mui/material';
import { UserResponse } from '../../types/api.types';

interface EditProfileFormProps {
	user: UserResponse | null;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ user }) => {
	return (
		<>
			<Box p={2}>
				<Typography variant="h6">Edit information</Typography>
				<Grid container spacing={2} mt={1}>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="First Name" placeholder="Enter your first name" disabled />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="Last Name" placeholder="Also your last name" disabled />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Birthday"
							placeholder="mm/dd/yyyy"
							type="date"
							InputLabelProps={{ shrink: true }}
							disabled
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField select fullWidth label="Gender" disabled>
							<MenuItem value="male">Male</MenuItem>
							<MenuItem value="female">Female</MenuItem>
							<MenuItem value="other">Other</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="Email" placeholder="name@company.com" type="email" disabled />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="Phone" placeholder="0347166190" disabled />
					</Grid>
				</Grid>
			</Box>
			<Button variant="contained" color="primary" disabled>
				Save All
			</Button>
		</>
	);
};
