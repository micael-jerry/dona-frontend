import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MapIcon from '@mui/icons-material/Map';
import { DASHBOARD_ROUTE, LOGOUT_ROUTE, PROFILE_ROUTE } from './routes';
import { LayoutMenuProps } from '../types/layout.types';
import { Logout } from '@mui/icons-material';

export const LAYOUT_MENU: LayoutMenuProps[] = [
	{
		title: 'Map',
		to: DASHBOARD_ROUTE,
		icon: <MapIcon />,
	},
	{
		title: 'Profile',
		to: PROFILE_ROUTE,
		icon: <AccountBoxIcon />,
	},
	{
		title: 'LogOut',
		to: LOGOUT_ROUTE,
		icon: <Logout />,
	},
];
