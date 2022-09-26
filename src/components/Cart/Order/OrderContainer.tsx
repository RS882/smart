import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../redux/ActionSlice';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import { selectCartTextOrder } from '../../../redux/LanguageSlice';
import { addArrayToLocalStore } from '../../../utilits/functions';
import Button from '../../Button';
import BtnNext from '../BtnNext';
import Order from './Order';
import imgItem from './../../../assets/image 18.png'
import OrderShort from './OrderShort';
import { truncate } from 'fs/promises';

export const StyledCartItemTitle = styled.div`
	font-weight: 700;
	font-size: 20px;
	line-height: 120%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 24px;
	};
	
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		font-size: 28px;
	};
`;

export const StyledCartItemContainer = styled.div`
	margin-bottom:20px;
	//border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding:30px;
		
		border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
		border-radius: 8px;
	};
`;
//  component of the ordered goods in the basket
const OrderContainer: FC = (props) => {
	const titleText = useAppSelector(selectCartTextOrder);
	const orderItem = useAppSelector(selectItemInCart);
	// whether the button is pressedressed
	const [isNext, setIsNext] = useState(false);
	// Choosing goods that are in the order
	const items = useAppSelector(selectitemsData).filter((e) => orderItem.includes(e.id));

	const setOrderData = () => { setIsNext(true) };

	const cangeOrderData = () => { setIsNext(false) };
	// Action when pressing the picture or describing the goods
	const onClickItem = (id: string) => {
		console.log(id);
	};

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{titleText?.title}</StyledCartItemTitle>
			{isNext ? null : <Order items={items} orderItem={orderItem} onClickItem={onClickItem} />}
			{isNext ? <OrderShort items={items} onClickImg={onClickItem} cangeOrderData={cangeOrderData} /> : null}
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext onClickNextBtnCart={setOrderData} />}
	</>
	);
};

export default React.memo(OrderContainer);