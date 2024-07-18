import * as yup from 'yup';

export const UpdateUserSchema = yup.object().shape({
	lastname: yup.string().max(50).required(),
	firstname: yup.string().max(50).required(),
	bio: yup.string().max(1000),
	birthday: yup
		.date()
		.max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be at least 18 years old')
		.required(),
});
