import { Alert, AlertTitle, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { LOCATION_TYPE, REPORT_TYPE, ReportCreateRequestBody } from '../../../types/api.types';
import { LatLng } from 'leaflet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReportCreateSchema } from '../../../schema/report/report.schema';

interface ReportFormProps {
	reportType: REPORT_TYPE;
	position: LatLng;
}
export const ReportForm: React.FC<ReportFormProps> = ({ reportType, position }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ReportCreateRequestBody>({
		resolver: yupResolver(ReportCreateSchema),
		defaultValues: {
			type: reportType,
			location: {
				type: LOCATION_TYPE.POINT,
				coordinates: [position.lng, position.lat],
			},
		},
	});

	const onSubmit = (data: ReportCreateRequestBody) => {
		console.log(data);
	};

	const isdetectedError = errors.description || errors.type || errors.location;
	return (
		<Box width={'100%'} p={1}>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				Report {reportType}
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				Position {`${position.lat}, ${position.lng}`}
			</Typography>
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					margin="normal"
					fullWidth
					id="description"
					label="Description"
					autoFocus
					{...register('description')}
				/>
				{isdetectedError && (
					<Alert severity="error">
						<AlertTitle>Error</AlertTitle>
						{Object.values(errors).map((error) => (
							<Typography key={error.message}>{error.message}</Typography>
						))}
					</Alert>
				)}
				<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Save Report
				</Button>
			</Box>
		</Box>
	);
};
