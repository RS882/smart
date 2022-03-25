import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectIsMenu } from '../../redux/MenuSlice';
import { selectIsModal } from '../../redux/ModalSlice';
import Modal, { ModalProps } from './Modal';

const ModalContainer: FC<ModalProps> = (props) => {

	const isMenuStatus = useAppSelector(selectIsMenu);
	const isOpen: boolean = Object.values(isMenuStatus).includes(true);

	const isModal: boolean = useAppSelector(selectIsModal);
	return (
		<Modal {...props} isModal={isModal} isOpen={isOpen} />
	);
};

export default ModalContainer;