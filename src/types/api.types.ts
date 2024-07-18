export type AuthLoginRequestBody = {
	email: string;
	password: string;
};

export type AuthRegisterRequestBody = {
	pseudo: string;
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	bio?: string;
	birthday: Date;
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
	lastname: string;
	firstname: string;
	bio?: string;
	birthday: Date;
};

export type UserUpdateRequestBody = {
	firstname: string;
	lastname: string;
	bio?: string;
	birthday: Date;
};
