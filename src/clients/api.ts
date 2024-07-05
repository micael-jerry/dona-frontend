import axios from 'axios';
import {
	AuthLoginRequestBody,
	AuthLoginResponse,
	AuthRegisterRequestBody,
	HelloWorldResponse,
	UserResponse,
} from '../types/api.types';

const request = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API,
});

export const HelloWorld = () => request.get<HelloWorldResponse>('/helloworld');

export const AuthLogin = (data: AuthLoginRequestBody) => request.post<AuthLoginResponse>('/auth/login', data);

export const AuthRegister = (data: AuthRegisterRequestBody) => request.post<UserResponse>('/auth/register', data);

export const AuthWhoami = () => request.get<UserResponse>('/auth/whoami');

export const UsersGetAllUsers = () => request.get<UserResponse[]>('/users');

export const UsersGetUserById = (userId: string) => request.get<UserResponse>(`/users/${userId}`);
