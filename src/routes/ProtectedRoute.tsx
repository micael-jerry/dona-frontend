import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import { SIGNIN_ROUTE } from '../constants/routes';

export const ProtectedRoute: React.FC = () => {
	const { token } = useAuth();

	if (!token) {
		return <Navigate to={SIGNIN_ROUTE} replace />;
	}

	return <Outlet />;
};
