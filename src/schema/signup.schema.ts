import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
	pseudo: yup.string().min(3).max(50).required(),
	email: yup.string().email('Email invalid format').required(),
	password: yup.string().min(6, 'Password must be at least 6 characters long').required(),
	lastname: yup.string().max(50).required(),
	firstname: yup.string().max(50).required(),
	bio: yup.string().max(1000),
	birthday: yup
		.date()
		.max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be at least 18 years old')
		.required(),
});
