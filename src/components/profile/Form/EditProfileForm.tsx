import React from 'react';
import { TextField, Box, Grid, Typography, Button, Alert, AlertTitle } from '@mui/material';
import { UserResponse, UserUpdateRequestBody } from '../../../types/api.types';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { yupResolver } from '@hookform/resolvers/yup';
import { UpdateUserSchema } from '../../../schema/user/update.user.schema';
import { userUpdate } from '../../../clients/api';
import { reloadPage } from '../../../utils/utils.func';

interface EditProfileFormProps {
	user: UserResponse | null;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ user }) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<UserUpdateRequestBody>({
		defaultValues: {
			firstname: user?.firstname,
			lastname: user?.lastname,
			bio: user?.bio,
			birthday: user?.birthday,
		},
		resolver: yupResolver(UpdateUserSchema),
	});

	const updateUser = async (userId: string, data: UserUpdateRequestBody) => {
		userUpdate(userId, data)
			.then(() => reloadPage())
			.catch((err) => {
				console.log(err);
			});
	};

	const onSubmit = (data: UserUpdateRequestBody) => {
		updateUser(user!._id, data);
	};

	const isdetectedError = errors.firstname || errors.lastname || errors.birthday || errors.bio;
	return (
		<Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
			<Box p={2}>
				<Typography variant="h6">Edit information</Typography>
				<Grid container spacing={2} mt={1}>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="First Name" placeholder="Enter your first name" {...register('firstname')} />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField fullWidth label="Last Name" placeholder="Also your last name" {...register('lastname')} />
					</Grid>
					<Grid item xs={12} md={6}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<Controller
								control={control}
								name="birthday"
								render={({ field }) => (
									<DatePicker
										label="Birthday"
										format="YYYY-MM-DD"
										name={field.name}
										value={dayjs(field.value)}
										ref={field.ref}
										onChange={field.onChange}
										slotProps={{ textField: { fullWidth: true } }}
									/>
								)}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField fullWidth multiline label="Bio" placeholder="bio" {...register('bio')} />
					</Grid>
				</Grid>
				{isdetectedError && (
					<Box mt={2}>
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							{Object.values(errors).map((error) => (
								<Typography key={error.message}>{error.message}</Typography>
							))}
						</Alert>
					</Box>
				)}
				<Box mt={2}>
					<Button variant="outlined" color="primary" sx={{ margin: 1 }} type={'submit'}>
						Save All
					</Button>
					<Button variant="contained" color="primary" sx={{ margin: 1 }} onClick={() => reset()}>
						Reset
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
