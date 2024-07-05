import axios from 'axios';

const request = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_API,
});

//Request types
type AuthLoginRequestBody = { email: string; password: string };

export const AuthLogin = (data: AuthLoginRequestBody) => request.post('/auth/login', data);

//Request types
type AuthRegisterRequestBody = { pseudo: string; email: string; password: string; bio: string };

export const AuthRegister = (data: AuthRegisterRequestBody) => request.post('/auth/register', data);

export const AuthWhoami = () => request.get('/auth/whoami');

export const UsersGetAllUsers = () => request.get('/users');

export const UsersGetUserById = (userId: string) => request.get(`/users/${userId}`);

export const HelloWorld = () => request.get('/helloworld');

export const NotFound = () => request.get('/nimportequoi');
