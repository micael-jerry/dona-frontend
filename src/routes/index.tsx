import React from 'react';
import { SignIn } from '../page/signin/SignIn';
import { Dashboard } from '../page/home/Dashboard';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { DASHBOARD_ROUTE, HOME_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from '../constants/routes';
import { SignUp } from '../page/signup/SignUp';

export const Routes: React.FC = () => {
	const routes: RouteObject[] = [
		{
			path: HOME_ROUTE,
			element: <div>home</div>,
		},
		{
			path: SIGNIN_ROUTE,
			element: <SignIn />,
		},
		{
			path: SIGNUP_ROUTE,
			element: <SignUp />,
		},
		{
			path: DASHBOARD_ROUTE,
			element: (
				<ProtectedRoute>
					<Dashboard />
				</ProtectedRoute>
			),
		},
	];

	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
};
