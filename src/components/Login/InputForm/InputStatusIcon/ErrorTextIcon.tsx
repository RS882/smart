import React, { FC } from 'react';
import styled from 'styled-components';


const StyledErrorWraper = styled.div`
	position: relative;
	width: 75%;
	height: 75%;
	border-radius:50%;
	border: 1.5px solid ${props => props.theme.color.red || '#F15152'};
	&::before,
	&::after{
		content:'';
		position: absolute;
		top: 50%;
		left: 50%;
		width:50%;
		height:1.5px;
		background-color:${props => props.theme.color.red || '#F15152'}
	};
	&::before{
		transform:translate(-50%, -50%) rotate(45deg);
	};
	&::after{
		transform:translate(-50%, -50%)  rotate(-45deg);
	};

`;


const ErrorTextIcon: FC = (props) => <StyledErrorWraper />;

export default ErrorTextIcon;