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
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE, SIGNUP_ROUTE } from '../../constants/routes';
import { AuthLogin } from '../../clients/api';
import { AuthLoginRequestBody } from '../../types/api.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignInSchema } from '../../schema/auth/signin.schema';
import { yupResolver } from '@hookform/resolvers/yup';

export const SignIn: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthLoginRequestBody>({ resolver: yupResolver(SignInSchema) });
	const { setTokenValue } = useAuth();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<AuthLoginRequestBody> = (data: AuthLoginRequestBody) => {
		AuthLogin(data)
			.then((res) => {
				setTokenValue(res.data.token);
				navigate(DASHBOARD_ROUTE, { replace: true });
			})
			.catch((err) => {
				console.log(err);
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
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						fullWidth
						id="email"
						label="Email Address"
						autoComplete="email"
						autoFocus
						{...register('email')}
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register('password')}
					/>
					{(errors.email || errors.password) && (
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							{Object.values(errors).map((error) => (
								<Typography key={error.message}>{error.message}</Typography>
							))}
						</Alert>
					)}
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs></Grid>
						<Grid item>
							<Link href={SIGNUP_ROUTE} variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
