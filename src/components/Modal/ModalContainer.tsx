import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectIsModal } from '../../redux/ModalSlice';
import Modal, { ModalProps } from './Modal';

const ModalContainer: FC<ModalProps> = (props) => {

	const isModal: boolean = useAppSelector(selectIsModal);
	return (
		<Modal {...props} isModal={isModal} />
	);
};

export default ModalContainer;