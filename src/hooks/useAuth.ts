import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../provider/AuthProvider';

export const useAuth = (): AuthContextType => {
	return useContext(AuthContext);
};
