import React, { FC } from 'react';
import styled from 'styled-components';


export interface ICartDateBox {
	bdColor?: string;
	heigthBox?: string;
	isOnlyBdColor?: boolean;
};

const StyledDateCartBox = styled.div<ICartDateBox>`
	width: 100%;
	height:${props => props.heigthBox};
	border: 2px solid ${props => props.bdColor || props.theme.color.cardBorder || '#EAEAF0'};
	color:${props => props.isOnlyBdColor ? props.theme.color.text.main : props.bdColor || props.theme.color.text.second || '#838688'};
	border-radius: 5px;
	display: flex;
	align-items:center;
	padding:0 10px 0 ${props => props.isOnlyBdColor ? '0' : '20px'};
	transition: all 0.3s ease 0s;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height:48px;
	};

`;

// stylized boxing boxes in the basket
const CartDateBox: FC<ICartDateBox> = ({ bdColor = '', heigthBox = '48px', isOnlyBdColor = false, children }) => {


	return (
		<StyledDateCartBox bdColor={bdColor} heigthBox={heigthBox} isOnlyBdColor={isOnlyBdColor}>
			{children}
		</StyledDateCartBox>
	);
};

export default CartDateBox;