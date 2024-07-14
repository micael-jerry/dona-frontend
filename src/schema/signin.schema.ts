import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
	email: yup.string().email('Email invalid format').required(),
	password: yup.string().min(6, 'Password must be at least 6 characters long').required(),
});
