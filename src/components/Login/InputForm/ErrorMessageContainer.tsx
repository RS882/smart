import { ErrorMessage } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';

interface IErrorMessageContainer {
	name: string;
	isStatusIcon?: boolean;
};

const StyledErrorMessageWrapper = styled.div<{ isStatusIcon: boolean }>`
	position: absolute;
	bottom: -3px;
	right: 0px;	
	background-color:rgba(255,255,255,0.2);
	backdrop-filter: blur(8px);
	transform:translateY(100%);
	font-size:10px;
	color:${props => props.theme.color.red || '#F15152'};
	z-index:30;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
		right: ${props => props.isStatusIcon ? '40px' : '0px'};	
	};
`;

const ErrorMessageContainer: FC<IErrorMessageContainer> = ({ name, isStatusIcon = false }) => {


	return (
		<StyledErrorMessageWrapper isStatusIcon={isStatusIcon}>
			<ErrorMessage name={name} />
		</StyledErrorMessageWrapper>
	);
};

export default ErrorMessageContainer;