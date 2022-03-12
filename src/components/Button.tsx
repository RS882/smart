import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import { ArrowFn } from './types';




export interface ButtonProps {
	onClick?: ArrowFn,
	width?: string;
	height?: string;
	color?: string;
	border?: string;
	lineHeight?: string;
	bgColor?: string;
	borderRadius?: string;
	texTransform?: string;
	hover?: {
		bgColor?: string;
		color?: string;
		border?: string;
	}
};

const StyledButton = styled.button<ButtonProps>`
	width: ${props => props.width || '80px'};
	height: ${props => props.height || '40px'};
	color: ${props => props.color || props.theme.color.text.mainLight};
	border:  ${props => props.border || 'none'};
	line-height: ${props => props.lineHeight || '100%'};
	background-color: ${props => props.bgColor || props.theme.color.darkBlue};
	border-radius: ${props => props.borderRadius || '4px'};
	text-transform: ${props => props.texTransform || 'capitalize'};
	transition: all 0.3s ease 0s;
	&:hover{
		background-color: ${props => props.hover?.bgColor || props.theme.color.blue};
		color: ${props => props.theme.color.text.mainLight || props.color};
		border: none;
	}
`;


const Button: FC<ButtonProps> = (props) => {
	return (
		<StyledButton {...props} >
			<Flex>{props.children}</Flex>
		</StyledButton>
	);
};

export default Button;