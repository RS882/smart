import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../types/fnTypes';
import Flex from './Flex';



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
	hoverBgColor?: string;
	hoverColor?: string;
	hoverBorder?: string;
	type?: string;
	heigth768?: string;
	disabled?: boolean;
	form?: string;
};



const StyledButton = styled.button.attrs(props => ({
	type: props.type ? props.type : null,
})) <ButtonProps>`
	width: ${props => props.width || '80px'};
	height: ${props => props.height || '40px'};
	color: ${props => props.color || props.theme.color.text.mainLight};
	border:  ${props => props.border || 'none'};
	line-height: ${props => props.lineHeight || '100%'};
	background-color: ${props => props.bgColor || props.theme.color.darkBlue};
	border-radius: ${props => props.borderRadius || '4px'};
	text-transform: ${props => props.texTransform || 'capitalize'};
	transition: all 0.3s ease 0s;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height:${props => props.heigth768 || '40px'};
	};
	&:hover{
		background-color: ${props => props.hoverBgColor || props.theme.color.blue};
	color: ${props => props.hoverColor || props.theme.color.text.mainLight};
	border: ${props => props.hoverBorder || 'none'};
 
	}
	&:disabled{
		background-color: ${props => props.theme.color.text.second || '#838688'};
		cursor:auto;
	}
	`;

//Component button
const Button: FC<ButtonProps> = (props) => {
	return (
		<StyledButton {...props} >
			<Flex>{props.children}</Flex>
		</StyledButton>
	);
};

export default Button;