import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import { ArrowFn } from '../../../types/fnTypes';
import ItemOrderCounter from './ItemOrderCounter';
import ItemOrderCounterCountainer from './ItemOrderCounterCountainer';

interface IOrderItemPros {
	item: IItemData;
	itemCount: number;
	onClickItem: (id: string) => void;
};


const ImgStyled = styled.img.attrs(props => ({
	alt: "order item image",
	src: props.src
}))`
	width: 100%;
	height:100%;
`;

const StyledImg = styled.div`
	width: 40px;
	height:40px;
	margin-right:10px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width: 80px;
		height:80px;
		margin-right:20px;
	};
	
`;

const StyledItemName = styled.div`
	font-size: 14px;
	max-width:280px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 16px;
	};
`;

const StyledOrderItemContainer = styled.button`
	display: flex;
	text-align:start;
	&:hover{
		text-decoration:underline;
	}
`;
const StyledOrderContainer = styled.div`
	display: flex;
	align-items:center;
`

const OrderItem: FC<IOrderItemPros> = ({ item, itemCount, onClickItem }) => {



	return (
		<StyledOrderContainer>
			<StyledOrderItemContainer onClick={() => onClickItem(item.id)}>
				<StyledImg>
					<ImgStyled src={item ? item.src : ''} />
				</StyledImg>
				<StyledItemName>{item.itemname} {item.itemDescription}</StyledItemName>
			</StyledOrderItemContainer >
			<ItemOrderCounterCountainer itemCount={itemCount} itemId={item.id} />
		</StyledOrderContainer>
	);
};

export default React.memo(OrderItem);