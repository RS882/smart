import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../redux/ActionSlice';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import { selectCartTextOrder } from '../../../redux/LanguageSlice';
import BtnNext from '../BtnNext';
import Order from './Order';
import OrderShort from './OrderShort';

interface IOrederContainer {
	setTotalPrise: (totalPrise: string) => void;
	setIsNext: (el: boolean) => void;
	isNext: boolean;
};


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
	
	padding:30px;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-bottom:40px;
		border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
		border-radius: 8px;
	};
`;
//  component of the ordered goods in the basket
const OrderContainer: FC<IOrederContainer> = ({ setTotalPrise, setIsNext, isNext }) => {
	// The text of the section order
	const titleText = useAppSelector(selectCartTextOrder);
	// array ID of goods in the basket
	const orderItem = useAppSelector(selectItemInCart);
		// Choosing goods that are in the order
	const items = useAppSelector(selectitemsData).filter((e) => orderItem.includes(e.id));

	// The final price of all selected goods
	const totalPrise = items.reduce((prev, e) => {
		const dicsountPrise: number = +(+e.prise - (+e.prise * e.discount / 100)).toFixed(2);
		const itemCount: number = orderItem.filter((el) => el === e.id).length;
		return prev + Number((dicsountPrise * itemCount).toFixed(2));
	}, 0);


	useEffect(() => {
		// We transfer the amount of all goods to the local Store
		setTotalPrise(totalPrise.toFixed(2))
	}, [totalPrise]);

	// Action when pressing the picture or describing the goods
	const onClickItem = (id: string) => {
		console.log(id);
	};

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{titleText?.title}</StyledCartItemTitle>
			{isNext ? null : <Order items={items} orderItem={orderItem} onClickItem={onClickItem} />}
			{isNext ? <OrderShort items={items} onClickImg={onClickItem} cangeOrderData={() => setIsNext(false)} /> : null}
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext onClickNextBtnCart={() => setIsNext(true)} />}
	</>
	);
};

export default React.memo(OrderContainer);