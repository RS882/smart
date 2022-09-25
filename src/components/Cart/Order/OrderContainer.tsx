import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../redux/ActionSlice';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import { selectCartTextOrder } from '../../../redux/LanguageSlice';
import { addArrayToLocalStore } from '../../../utilits/functions';
import Button from '../../Button';
import BtnNext from '../BtnNext';
import Order from './Order';

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


	const items = useAppSelector(selectitemsData).filter((e) => orderItem.includes(e.id));





	const setOrderData = () => {
		localStorage.clear();

	};

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{titleText?.title}</StyledCartItemTitle>
			<Order items={items} orderItem={orderItem} />

		</StyledCartItemContainer>
		<BtnNext onClickNextBtnCart={setOrderData} />
	</>
	);
};

export default React.memo(OrderContainer);