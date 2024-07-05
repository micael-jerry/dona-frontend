import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../constants/routes';
import { AuthRegister } from '../../clients/api';
import { AuthRegisterRequestBody } from '../../types/api.types';

export const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const reqBody: AuthRegisterRequestBody = {
			pseudo: data.get('pseudo') as string,
			email: data.get('email') as string,
			password: data.get('password') as string,
		};
		await AuthRegister(reqBody)
			.then(() => navigate(SIGNIN_ROUTE))
			.catch((err) => {
				console.log(err);
				navigate(SIGNUP_ROUTE);
			});
	};

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
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField required fullWidth id="pseudo" label="Pseudo" name="pseudo" autoComplete="pseudo" />
						</Grid>
						<Grid item xs={12}>
							<TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
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
