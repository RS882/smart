import React, { FC } from 'react';
import styled from 'styled-components';


export interface IModal {
	opacity: string;
	isModal: boolean;
	isMenu?: boolean;
};

export interface ModalProps {
	opacity: string;
	isMenu?: boolean;
}

const StyledModal = styled.div<ModalProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: ${props => props.isMenu ? 'calc(100vh - 64px)' : '100vh'};
	background-color:${props => props.theme.color.darkBlue || '#2A5275'};
	opacity:${props => props.opacity || '0.8'};
	z-index:${props => props.isMenu ? '120' : '200'};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display: ${props => props.isMenu ? 'none' : 'block'};
	};
`;

const Modal: FC<IModal> = (props) => {
	const { isModal, ...rest } = props;
	return (
		<>
			{isModal && <StyledModal {...rest} />}
		</>
	);
};

export default Modal;