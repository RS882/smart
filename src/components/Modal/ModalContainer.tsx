import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectIsMenu } from '../../redux/MenuSlice';
import { selectIsModal } from '../../redux/ModalSlice';
import Modal, { ModalProps } from './Modal';



const ModalContainer: FC<ModalProps> = ({ opacity }) => {
	// Is the octite at least one menu in the lower part of the screen (for Tablet and Phone)
	const isMenuStatus = useAppSelector(selectIsMenu);
	const isOpen: boolean = Object.values(isMenuStatus).includes(true);
	//Is the modal window open
	const isModal: boolean = useAppSelector(selectIsModal);
	return (
		<Modal opacity={opacity} isModal={isModal} isOpen={isOpen} />
	);
};
export default React.memo(ModalContainer);