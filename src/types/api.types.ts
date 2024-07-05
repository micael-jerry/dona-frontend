export type AuthLoginRequestBody = {
	email: string;
	password: string;
};

export type AuthRegisterRequestBody = {
	pseudo: string;
	email: string;
	password: string;
	bio?: string;
};

export type HelloWorldResponse = {
	message: string;
};

export type AuthLoginResponse = {
	role: string;
	token: string;
};

export type UserResponse = {
	_id: string;
	email: string;
	pseudo: string;
	role: string;
	bio?: string;
};
