import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import OrderItem from './OrderItem';
import { useAppDispatch } from './../../../redux/hooks';
import { delAllItemToCart } from '../../../redux/ActionSlice';



interface IOrderPros {
	items: IItemData[];
	orderItem: string[];
};

const StyledOrder = styled.div`
	display: flex;
	flex-direction:column;
`;

const StyledOrderElem = styled.div`
		padding-top:30px;
	&:not(:last-child) {
		padding:30px 0;
		border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	}	
`;

const Order: FC<IOrderPros> = ({ items, orderItem }) => {
	const dispatch = useAppDispatch();
	// action when pressed on a drawing or description of the goods
	const onClickItem = (id: string) => {
		console.log(id);
	};
	// Action when pressing the icon of the murosa basket, we remove the goods from the basket
	const onClickTrashCan = (id: string) => {
		dispatch(delAllItemToCart(id))

	};
	// We form a block of elements from goods in the basket
	const itemOredrElem: JSX.Element[] = items.map((e, i) => {
		const itemCount = orderItem.filter((el) => el === e.id).length; // the amount of goods of a certain type in the basket
		return (
			<StyledOrderElem key={e.itemname + i}>
				<OrderItem item={e} itemCount={itemCount} onClickItem={onClickItem} onClickTrashCan={onClickTrashCan} />
			</StyledOrderElem>
		)
	});

	return (
		<StyledOrder>
			{itemOredrElem}
		</StyledOrder>
	);
};

export default React.memo(Order);