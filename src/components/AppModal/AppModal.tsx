import React, { SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

interface AppModalProps {
	open: boolean;
	setOpen: (value: SetStateAction<boolean>) => void;
	children: React.ReactNode;
}

export const AppModal: React.FC<AppModalProps> = ({ open, setOpen, children }) => {
	const handleClose = () => setOpen(false);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					boxShadow: 24,
					borderRadius: 2,
				}}
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: 'inherit',
					}}
				>
					<CloseOutlined />
				</IconButton>
				{children}
			</Box>
		</Modal>
	);
};
