import * as yup from 'yup';
import { ReportLocationType, ReportType } from '../../types/api.types';

export const ReportCreateSchema = yup.object().shape({
	type: yup.string().oneOf(Object.values(ReportType)).required(),
	location: yup
		.object()
		.shape({
			type: yup.string().oneOf(Object.values(ReportLocationType)).required(),
			coordinates: yup.array().of(yup.number().required()).length(2).required(),
		})
		.required(),
	description: yup.string().max(1000),
});
