import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { TokenType } from '../types/types';

export interface AuthContextType {
	token: TokenType;
	setTokenValue: (newToken: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
	token: null,
	setTokenValue: () => {},
});

export interface AuthProviderProps {
	children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<TokenType>(localStorage.getItem('token'));

	const setTokenValue = (newToken: string) => {
		setToken(newToken);
	};

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			localStorage.setItem('token', token);
		} else {
			delete axios.defaults.headers.common['Authorization'];
			localStorage.removeItem('token');
		}
	}, [token]);

	const contextValue = useMemo(() => ({ token, setTokenValue }), [token]);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
