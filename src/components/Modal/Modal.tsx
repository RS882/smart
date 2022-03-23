import React, { FC } from 'react';
import styled from 'styled-components';

interface ModalProps {
	opacity: string;
}

const StyledModal = styled.div<ModalProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color:${props => props.theme.color.darkBlue || '#2A5275'};
	opacity:${props => props.opacity || '0.8'};
	z-index:200;
`


const Modal: FC<ModalProps> = (props) => {
	return (
		<StyledModal {...props}>

		</StyledModal>
	);
};

export default Modal;