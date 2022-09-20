import React, { FC } from 'react';
import ItemOrderCounter from './ItemOrderCounter';
import { useAppDispatch } from './../../../redux/hooks';
import { addItemToCart, delItemToCart } from '../../../redux/ActionSlice';

interface IItemOrderCounterCountainer {
	itemCount: number;
	itemId: string;

};

const ItemOrderCounterCountainer: FC<IItemOrderCounterCountainer> = ({ itemCount, itemId }) => {



	const dispatch = useAppDispatch()

	const plusOne = () => {
		dispatch(addItemToCart(itemId))

	};

	const minusOne = () => {
		dispatch(delItemToCart(itemId))
	};
	return (
		<div>
			<ItemOrderCounter itemCount={itemCount} plusOne={plusOne} minusOne={minusOne} />
		</div>
	);
};

export default ItemOrderCounterCountainer;