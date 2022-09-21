import React, { FC } from 'react';
import ItemOrderCounter from './ItemOrderCounter';
import { useAppDispatch } from './../../../redux/hooks';
import { addItemToCart, delItemToCart } from '../../../redux/ActionSlice';
import styled from 'styled-components';

export interface IItemOrderCounterCountainer {
	itemCount: number;
	itemId: string;

};

const StyledItemOrderCounter = styled.div`
	grid-row:2/3;
	grid-column:3/5;
	justify-self: end;
	align-self: end;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		justify-self: center;
		align-self: center;
	};
`;

const ItemOrderCounterCountainer: FC<IItemOrderCounterCountainer> = ({ itemCount, itemId }) => {

	const dispatch = useAppDispatch()
	// function adding 1 unit of goods to the basket
	const plusOne = () => { dispatch(addItemToCart(itemId)) };
	// Function of removal 1 unit of goods from the basket
	const minusOne = () => { dispatch(delItemToCart(itemId)) };
	return (
		<StyledItemOrderCounter>
			<ItemOrderCounter itemCount={itemCount} plusOne={plusOne} minusOne={minusOne} />
		</StyledItemOrderCounter>
	);
};

export default ItemOrderCounterCountainer;