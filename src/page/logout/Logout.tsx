import { useEffect } from 'react';

export const Logout: React.FC = () => {
	useEffect(() => {
		localStorage.removeItem('token');
		window.location.reload();
	}, []);

	return <></>;
};
