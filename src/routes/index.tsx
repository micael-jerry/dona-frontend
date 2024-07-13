import React from 'react';
import { SignIn } from '../page/signin/SignIn';
import { Dashboard } from '../page/dashboard/Dashboard';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import {
	DASHBOARD_ROUTE,
	HOME_ROUTE,
	LOGOUT_ROUTE,
	PROFILE_ROUTE,
	SIGNIN_ROUTE,
	SIGNUP_ROUTE,
} from '../constants/routes';
import { SignUp } from '../page/signup/SignUp';
import { Profile } from '../page/profile/Profile';
import Home from '../page/home/Home';
import { Logout } from '../page/logout/Logout';
import { NotLoggedRoute } from './NotLoggedRoute';

export const Routes: React.FC = () => {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <NotLoggedRoute />,
			children: [
				{
					path: HOME_ROUTE,
					element: <Home />,
				},
				{
					path: SIGNIN_ROUTE,
					element: <SignIn />,
				},
				{
					path: SIGNUP_ROUTE,
					element: <SignUp />,
				},
			],
		},
		{
			path: '/',
			element: <ProtectedRoute />,
			children: [
				{
					path: PROFILE_ROUTE,
					element: <Profile />,
				},
				{
					path: DASHBOARD_ROUTE,
					element: <Dashboard />,
				},
				{
					path: LOGOUT_ROUTE,
					element: <Logout />,
				},
			],
		},
	];

	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
};
