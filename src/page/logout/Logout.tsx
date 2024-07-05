import { Navigate } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../../constants/routes';
import { useEffect } from 'react';

export const Logout: React.FC = () => {
	useEffect(() => {
		localStorage.removeItem('token');
	}, []);

	return <Navigate to={SIGNIN_ROUTE} />;
};
