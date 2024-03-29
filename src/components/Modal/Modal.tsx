import React, { FC } from 'react';
import styled from 'styled-components';

export interface ModalProps {
	opacity: string;
	isOpen?: boolean;
};
export interface IModal extends ModalProps {
	isModal: boolean;
};
const StyledModal = styled.div<ModalProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	background-color:	${props => `rgba(42, 82, 117, ${props.opacity || '0.8'})`
	};
		backdrop-filter: blur(8px);
		height: ${props => props.isOpen ? 'calc(100vh - 64px)' : '100vh'};
		z-index:${props => props.isOpen ? '150' : '350'};
		@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display: ${props => props.isOpen ? 'none' : 'block'};
	};
`;
// Modal window: opacity - window transparency 
//isModal - Is the window open
// isOpenIs the octite at least one menu in the lower part of the screen (for Tablet and Phone)
const Modal: FC<IModal> = (props) => {
	const { isModal, ...rest } = props;
	return (
		<>
			{isModal ? <StyledModal {...rest} /> : null}
		</>
	);
};

export default React.memo(Modal);