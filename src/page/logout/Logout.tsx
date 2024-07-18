import { useEffect } from 'react';
import { reloadPage } from '../../utils/utils.func';

export const Logout: React.FC = () => {
	useEffect(() => {
		localStorage.removeItem('token');
		reloadPage();
	}, []);

	return <></>;
};
