import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Alert,
	AlertTitle,
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../../constants/routes';
import { AuthRegister } from '../../clients/api';
import { AuthRegisterRequestBody } from '../../types/api.types';
import { Controller, useForm } from 'react-hook-form';
import { SignUpSchema } from '../../schema/auth/signup.schema';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { yupResolver } from '@hookform/resolvers/yup';
export const SignUp: React.FC = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthRegisterRequestBody>({ resolver: yupResolver(SignUpSchema) });
	const navigate = useNavigate();
	const onSubmit = (data: AuthRegisterRequestBody) => {
		AuthRegister(data)
			.then(() => navigate(SIGNIN_ROUTE))
			.catch((err) => {
				console.log(err);
			});
	};

	const isdetectedError =
		errors.firstname ||
		errors.lastname ||
		errors.email ||
		errors.password ||
		errors.birthday ||
		errors.pseudo ||
		errors.bio;
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="given-name"
								fullWidth
								id="firstname"
								label="First Name"
								autoFocus
								{...register('firstname')}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								id="lastname"
								label="Last Name"
								autoComplete="family-name"
								{...register('lastname')}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth id="pseudo" label="Pseudo" {...register('pseudo')} />
						</Grid>
						<Grid item xs={12}>
							<TextField fullWidth id="email" label="Email Address" autoComplete="email" {...register('email')} />
						</Grid>
						<Grid item xs={12}>
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
						<Grid item xs={12}>
							<TextField fullWidth multiline id="bio" label="Bio" {...register('bio')} />
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								{...register('password')}
							/>
						</Grid>
					</Grid>
					{isdetectedError && (
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							{Object.values(errors).map((error) => (
								<Typography key={error.message}>{error.message}</Typography>
							))}
						</Alert>
					)}
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href={SIGNIN_ROUTE} variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
