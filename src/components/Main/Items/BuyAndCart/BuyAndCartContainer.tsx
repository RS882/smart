import React, { FC } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../../redux/ActionSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { addFlyingItemId, selectAddItemToCart, startAddingItemToCart } from '../../../../redux/ItemSlice';
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
	
`;

const StyledInCart = styled.div`
	position: absolute;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	font-size:10px;
	padding-top:10px;
	padding-left:5px;


`

const BuyAndCartContainer: FC<ICartProps> = ({ idItem }) => {


	const btnText = useAppSelector(selectItemBuyBtnText);
	const isAddingItem = useAppSelector(selectAddItemToCart);
	const itemInCart = useAppSelector(selectItemInCart)
	const dispatch = useAppDispatch();
	const addToCart = () => {
		dispatch(startAddingItemToCart());
		dispatch(addFlyingItemId(idItem));
	};

	const gotoBuyMenu = () => {

	};

	const isItemCart = itemInCart.includes(idItem)

	return (
		<StyledBuyAndCartContainer>
			<StyledBuyBtn disabled={isAddingItem} onClick={gotoBuyMenu}>{btnText}</StyledBuyBtn>
			<IconBtn callBack={addToCart} iconClass={isItemCart ? '_icon-empty_cart' : '_icon-cart'} isCartBtn={true} isItemInCart={isItemCart}>
				{isItemCart ? <StyledInCart className='_icon-checkbox' ></StyledInCart> : null}
			</IconBtn>

		</StyledBuyAndCartContainer>
	);
};

export default BuyAndCartContainer;