import React, { FC } from 'react';
import styled from 'styled-components';
import IconBtn from '../IconBtn/IconBtn';

const StyledBuyAndCartContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 48px;
	gap:10px;
`;

const StyledBuyBtn = styled.button`
	display: flex;
	justify-content:center;
	align-items:center;
	height: 48px;
	border: 1px solid ${props => props.theme.color.blue || '#4878A6'};
	border-radius:4px;
	color:${props => props.theme.color.blue || '#4878A6'};
	transition:all 0.3s ease 0s;
		&:hover{
		background-color:${props => props.theme.color.blue || '#4878A6'};
		color:#fff;
	}
	
`

const BuyAndCartContainer: FC = (props) => {

	const addToCart = () => { }
	return (
		<StyledBuyAndCartContainer>
			<StyledBuyBtn>Купить в 1 клик</StyledBuyBtn>
			<IconBtn callBack={addToCart} iconClass={'_icon-cart'} isCartBtn={true} />

		</StyledBuyAndCartContainer>
	);
};

export default BuyAndCartContainer;