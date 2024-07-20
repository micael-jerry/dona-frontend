import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { LayoutProps } from '../../types/layout.types';
import { DrawerHeader } from './styled/DrawerHeader';
import { AppBar, DRAWER_WIDTH, Main } from './styled/DrawerStyledComponent';
import { PROFILE_ROUTE } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

export const Layout: React.FC<LayoutProps> = ({ children, menu, title }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const handleDrawerOpen = () => setOpen(true);
	const handleDrawerClose = () => setOpen(false);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						{title}
					</Typography>
					<Box>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={() => navigate(PROFILE_ROUTE)}
						>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: DRAWER_WIDTH,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menu.map(({ title, to, icon }) => (
						<ListItem key={title} disablePadding>
							<ListItemButton onClick={() => navigate(to)}>
								<ListItemIcon>{icon}</ListItemIcon>
								<ListItemText primary={title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				{children}
			</Main>
		</Box>
	);
};
