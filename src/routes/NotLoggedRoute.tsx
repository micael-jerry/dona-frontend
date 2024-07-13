import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '../constants/routes';

export const NotLoggedRoute: React.FC = () => {
	const { token } = useAuth();

	if (token) {
		return <Navigate to={DASHBOARD_ROUTE} replace />;
	}

	return <Outlet />;
};
