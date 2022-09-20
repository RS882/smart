import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import OrderItem from './OrderItem';



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
	console.log(orderItem)
	const onClickItem = (id: string) => {
		console.log(id);

	};

	const itemOredrElem: JSX.Element[] = items.map((e, i) => {
		const itemCount = orderItem.filter((el) => el === e.id).length;
		return (
			<StyledOrderElem key={e.itemname + i}>
				<OrderItem item={e} itemCount={itemCount} onClickItem={onClickItem} />
			</StyledOrderElem>
		)
	})

	return (
		<StyledOrder>
			{itemOredrElem}
		</StyledOrder>
	);
};

export default React.memo(Order);