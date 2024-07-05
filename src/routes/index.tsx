import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { SignIn } from '../page/signin/SignIn';
import { Dashboard } from '../page/home/Dashboard';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

export const Routes: React.FC = () => {
	const { token } = useAuth();
	const publicRoutes: RouteObject[] = [
		{
			path: '/',
			element: <div>home</div>,
		},
	];
	const authenticatedOnlyRoutes: RouteObject[] = [
		{
			path: '/dashboard',
			element: <Dashboard />,
		},
	];
	const notAuthenticatedOnlyRoutes: RouteObject[] = [
		{
			path: '/signin',
			element: <SignIn />,
		},
	];

	const router = createBrowserRouter([
		...publicRoutes,
		...(token ? authenticatedOnlyRoutes : []),
		...notAuthenticatedOnlyRoutes,
	]);
	return <RouterProvider router={router} />;
};
