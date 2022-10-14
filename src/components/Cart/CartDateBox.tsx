import React, { FC } from 'react';
import styled from 'styled-components';


interface ICartDateBox {
	bdColor?: string;
};

const StyledDateCartBox = styled.div<ICartDateBox>`
	width: 100%;
	height:48px;
	border: 2px solid ${props => props.bdColor || props.theme.color.cardBorder || '#EAEAF0'};
	color:${props => props.bdColor || props.theme.color.text.second || '#838688'};
	border-radius: 5px;
	display: flex;
	align-items:center;
	padding:0 20px;
	transition: all 0.3s ease 0s;
`;

// stylized boxing boxes in the basket
const CartDateBox: FC<ICartDateBox> = ({ bdColor = '', children }) => {
	return (
		<StyledDateCartBox bdColor={bdColor}>
			{children}
		</StyledDateCartBox>
	);
};

export default CartDateBox;