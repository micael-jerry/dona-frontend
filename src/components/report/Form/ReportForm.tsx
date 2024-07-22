import { Alert, AlertTitle, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { ReportLocationType, ReportType, ReportCreateRequestBody } from '../../../types/api.types';
import { LatLng } from 'leaflet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReportCreateSchema } from '../../../schema/report/report.schema';
import { ReportCreate } from '../../../clients/api';
import { reloadPage } from '../../../utils/utils.func';

interface ReportFormProps {
	reportType: ReportType;
	position: LatLng;
	onClose: () => void;
}
export const ReportForm: React.FC<ReportFormProps> = ({ reportType, position, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ReportCreateRequestBody>({
		resolver: yupResolver(ReportCreateSchema),
		defaultValues: {
			type: reportType,
			location: {
				type: ReportLocationType.POINT,
				coordinates: [position.lng, position.lat],
			},
		},
	});

	const createReport = async (data: ReportCreateRequestBody) => {
		ReportCreate(data)
			.then(() => reloadPage())
			.catch((err) => {
				console.log(err);
			});
	};

	const onSubmit = (data: ReportCreateRequestBody) => {
		createReport(data);
	};

	const isdetectedError = errors.description || errors.type || errors.location;
	return (
		<Box width={'100%'} p={2}>
			<Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
				Report {reportType}
			</Typography>
			<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				Position: {`${position.lat}, ${position.lng}`}
			</Typography>
			<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
				<Box display={'flex'} justifyContent={'space-around'} sx={{ mt: 3, mb: 2 }}>
					<Button type="submit" variant="contained" color="primary">
						Save Report
					</Button>
					<Button variant="outlined" color="primary" onClick={onClose}>
						Close
					</Button>
				</Box>
			</Box>
		</Box>
	);
};
