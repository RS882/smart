import React, { FC } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../redux/ActionSlice';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import { selectCartTextOrder } from '../../../redux/LanguageSlice';
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
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding:30px;
		margin-bottom:40px;
		border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
		border-radius: 8px;
	};
`;

const OrderContainer: FC = (props) => {
	const titleText = useAppSelector(selectCartTextOrder);
	const orderItem = useAppSelector(selectItemInCart);
	// const orderItem = ['1', '4', '3', '7', '26', '4', '3', '7', '26', '3', '7', '26'];

	const items = useAppSelector(selectitemsData).filter((e) => orderItem.includes(e.id));

	return (
		<StyledCartItemContainer>
			<StyledCartItemTitle>{titleText?.title}</StyledCartItemTitle>
			<Order items={items} orderItem={orderItem} />
		</StyledCartItemContainer>
	);
};

export default React.memo(OrderContainer);