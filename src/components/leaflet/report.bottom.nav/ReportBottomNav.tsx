import { Policy } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react';
import { REPORT_TYPE } from '../../../types/api.types';
import { LatLng } from 'leaflet';

interface ReportBottomNavProps {
	positionClicked: LatLng | null;
}

export const ReportBottomNav: React.FC<ReportBottomNavProps> = ({ positionClicked }) => {
	const [value, setValue] = useState<REPORT_TYPE | null>(null);

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
				/>
			</BottomNavigation>
		</Box>
	);
};
