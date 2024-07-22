import { Policy } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react';
import { ReportType } from '../../../types/api.types';
import { LatLng } from 'leaflet';
import { AppModal } from '../../AppModal/AppModal';
import { ReportForm } from '../Form/ReportForm';

interface ReportBottomNavProps {
	positionClicked: LatLng | null;
}

export const ReportBottomNav: React.FC<ReportBottomNavProps> = ({ positionClicked }) => {
	const [value, setValue] = useState<ReportType | null>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const onClickHandler = () => {
		setOpenModal(true);
	};
	return (
		<Box>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(_, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					label={'Police'}
					icon={<Policy />}
					value={ReportType.POLICE}
					disabled={!positionClicked}
					onClick={() => onClickHandler()}
				/>
			</BottomNavigation>
			<AppModal open={openModal} setOpen={setOpenModal}>
				<ReportForm reportType={value!} position={positionClicked!} />
			</AppModal>
		</Box>
	);
};
