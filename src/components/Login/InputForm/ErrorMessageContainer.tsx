import { ErrorMessage } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';

interface IErrorMessageContainer {
	name: string;
};

const StyledErrorMessageWrapper = styled(ErrorMessage)`
	position: absolute;
	bottom: -3px;
	right: 0;	
	background-color:rgba(255,255,255,0.2);
	backdrop-filter: blur(8px);
	transform:translateY(100%);
	color:${props => props.theme.color.red || '#F15152'};
	z-index:30;

`;

const ErrorMessageContainer: FC<IErrorMessageContainer> = (props) => {
	return (
		<StyledErrorMessageWrapper name={props.name} />
	);
};

export default ErrorMessageContainer;