import { ErrorMessage } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';

interface IErrorMessageContainer {
	name: string;
};

const StyledErrorMessageWrapper = styled.div`
	position: absolute;
	bottom: -3px;
	right: 0;	
	background-color:rgba(255,255,255,0.2);
	backdrop-filter: blur(8px);
	transform:translateY(100%);
	font-size:10px;
	color:${props => props.theme.color.red || '#F15152'};
	z-index:30;

`;

const ErrorMessageContainer: FC<IErrorMessageContainer> = (props) => {
	return (
		<StyledErrorMessageWrapper>
			<ErrorMessage name={props.name} />
		</StyledErrorMessageWrapper>
	);
};

export default ErrorMessageContainer;