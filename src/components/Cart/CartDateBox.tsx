import React, { FC } from 'react';
import styled from 'styled-components';


interface ICartDateBox {
	bdColor?: string;
	heigth?: string;
};

const StyledDateCartBox = styled.div<ICartDateBox>`
	width: 100%;
	height:${props => props.heigth};
	border: 2px solid ${props => props.bdColor || props.theme.color.cardBorder || '#EAEAF0'};
	color:${props => props.bdColor || props.theme.color.text.second || '#838688'};
	border-radius: 5px;
	display: flex;
	align-items:center;
	padding:0 10px 0 20px;
	transition: all 0.3s ease 0s;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height:48px;
	};

`;

// stylized boxing boxes in the basket
const CartDateBox: FC<ICartDateBox> = ({ bdColor = '', heigth = '48px', children }) => {
	return (
		<StyledDateCartBox bdColor={bdColor} heigth={heigth}>
			{children}
		</StyledDateCartBox>
	);
};

export default CartDateBox;