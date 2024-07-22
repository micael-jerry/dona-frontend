import axios, { AxiosInstance } from 'axios';
import {
	AuthLoginRequestBody,
	AuthLoginResponse,
	AuthRegisterRequestBody,
	HelloWorldResponse,
	ReportCreateRequestBody,
	ReportResponse,
	ReportsGetAllReportsQueryParams,
	UserResponse,
	UserUpdateRequestBody,
} from '../types/api.types';

const request = (): AxiosInstance => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: import.meta.env.VITE_BASE_URL_API,
		headers: {
			Authorization: token ? `Bearer ${token}` : '',
		},
	});
};

export const helloWorld = () => request().get<HelloWorldResponse>('/helloworld');

export const authLogin = (data: AuthLoginRequestBody) => request().post<AuthLoginResponse>('/auth/login', data);

export const authRegister = (data: AuthRegisterRequestBody) => request().post<UserResponse>('/auth/register', data);

export const authWhoami = () => request().get<UserResponse>('/auth/whoami');

export const userUpdate = (userId: string, data: UserUpdateRequestBody) =>
	request().put<UserResponse>(`/users/${userId}`, data);

export const usersGetAllUsers = () => request().get<UserResponse[]>('/users');

export const usersGetUserById = (userId: string) => request().get<UserResponse>(`/users/${userId}`);

export const reportsGetAllReports = (queryParam: ReportsGetAllReportsQueryParams) =>
	request().get<ReportResponse[]>('/reports', {
		params: queryParam,
	});

export const reportsGetReportById = (reportId: string) => request().get<ReportResponse>(`/reports/${reportId}`);

export const reportCreate = (data: ReportCreateRequestBody) => request().post<ReportResponse>('/reports', data);
