import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import { SIGNIN_ROUTE } from '../constants/routes';

interface ProtectedRouteProps {
	children: React.ReactNode;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const { token } = useAuth();

	if (!token) {
		return <Navigate to={SIGNIN_ROUTE} replace />;
	}

	return children;
};
