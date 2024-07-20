import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface LoaderProps {
	load: boolean;
	children: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({ load, children }) => {
	return load ? (
		<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
			<CircularProgress />
		</Box>
	) : (
		children
	);
};
