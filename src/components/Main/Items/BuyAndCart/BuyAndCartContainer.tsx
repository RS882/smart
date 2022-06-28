import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { selectAddItemToCart, startAddingItemToCart } from '../../../../redux/ItemSlice';
import IconBtn from '../IconBtn/IconBtn';
import { selectItemBuyBtnText } from './../../../../redux/LanguageSlice';


export interface ICartProps {

	idItem: string;

};
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

const BuyAndCartContainer: FC<ICartProps> = (props) => {

	const btnText = useAppSelector(selectItemBuyBtnText);
	const isAddingItem = useAppSelector(selectAddItemToCart);
	const dispatch = useAppDispatch();
	const addToCart = () => {
		dispatch(startAddingItemToCart())
	};

	const gotoBuyMenu = () => {

	};

	return (
		<StyledBuyAndCartContainer>
			<StyledBuyBtn disabled={isAddingItem} onClick={gotoBuyMenu}>{btnText}</StyledBuyBtn>
			<IconBtn callBack={addToCart} iconClass={'_icon-cart'} isCartBtn={true} />

		</StyledBuyAndCartContainer>
	);
};

export default BuyAndCartContainer;