import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')(() => ({
	flexGrow: 1,
}));

const HeroContent = styled(Container)(({ theme }) => ({
	padding: theme.spacing(8, 0, 6),
}));

const Buttons = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(4),
	display: 'flex',
	justifyContent: 'center',
}));

const Title = styled(Typography)(() => ({
	flexGrow: 1,
}));

const Home: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Root>
			<CssBaseline />
			<AppBar position="static">
				<Toolbar>
					<Title variant="h6">Dona</Title>
					<Button color="inherit" onClick={() => navigate(SIGNIN_ROUTE)}>
						Sign-In
					</Button>
					<Button color="inherit" onClick={() => navigate(SIGNUP_ROUTE)}>
						Sign-Up
					</Button>
				</Toolbar>
			</AppBar>
			<main>
				<HeroContent maxWidth="sm">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
						Welcome to Dona
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
						Report and view law enforcement positions in real time.
					</Typography>
					<Buttons>
						<Button variant="contained" color="primary" onClick={() => navigate(SIGNIN_ROUTE)} sx={{ margin: 1 }}>
							Sign-In
						</Button>
						<Button variant="outlined" color="primary" onClick={() => navigate(SIGNUP_ROUTE)} sx={{ margin: 1 }}>
							Sign-Up
						</Button>
					</Buttons>
				</HeroContent>
			</main>
		</Root>
	);
};

export default Home;
