import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';

export const ProtectedRoute: React.FC = () => {
	const { token } = useAuth();

	if (!token) {
		return <Navigate to={'/signin'} />;
	}

	return <Outlet />;
};
