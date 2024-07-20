import { Policy } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react';
import { REPORT_TYPE } from '../../../types/api.types';
import { LatLng } from 'leaflet';
import { AppModal } from '../../AppModal/AppModal';
import { ReportForm } from '../form/ReportForm';

interface ReportBottomNavProps {
	positionClicked: LatLng | null;
}

export const ReportBottomNav: React.FC<ReportBottomNavProps> = ({ positionClicked }) => {
	const [value, setValue] = useState<REPORT_TYPE | null>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const onClickHandler = () => {
		setOpenModal(true);
	};
	return (
		<Box>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					label={'Police'}
					icon={<Policy />}
					value={REPORT_TYPE.POLICE}
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
