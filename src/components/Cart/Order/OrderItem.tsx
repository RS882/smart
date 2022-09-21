import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import ItemOrderCounterCountainer from './ItemOrderCounterCountainer';
import OrderItemPreise from './OrderItemPreise';

export interface IItemOrderProps {
	item: IItemData;
	itemCount: number;
};

interface IOrderItemPros extends IItemOrderProps {
	onClickTrashCan: (id: string) => void;
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
	flex: 1 0 40px;
	width: 40px;
	height:40px;
	margin-right:10px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		flex: 1 0 80px;
		width: 80px;
		height:80px;
		margin-right:20px;
	};
	
`;

const StyledItemName = styled.div`
	font-size: 14px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 16px;
		max-width:280px;
	};
`;

const StyledOrderItemContainer = styled.button`
	grid-row:1/2;
	grid-column:1/4;
	display: flex;
	text-align:start;
	&:hover{
		text-decoration:underline;
	}
`;
const StyledOrderContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(4, 1fr);
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: flex;
		align-items:center;
		justify-content:space-between
	};
	
`;

const StyledTrashCan = styled.button`
	color: ${props => props.theme.color.text.second || '#838688'};
	transition: color 0.3s ease 0s;
	font-size:20px;
	grid-row:1/2;
	grid-column:4/5;
	justify-self: end;
	align-self: start;
	padding:10px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		justify-self: center;
		align-self: center;
	};
	&:hover{
		color: ${props => props.theme.color.text.main || '#070C11'};
	}
`;

// We form a product card in the basket
const OrderItem: FC<IOrderItemPros> = ({ item, itemCount, onClickItem, onClickTrashCan }) => {

	return (
		// Block from the figure and description of the goods
		<StyledOrderContainer>
			<StyledOrderItemContainer onClick={() => onClickItem(item.id)}>
				<StyledImg>
					<ImgStyled src={item ? item.src : ''} />
				</StyledImg>
				<StyledItemName>{item.itemname} {item.itemDescription}</StyledItemName>
			</StyledOrderItemContainer >
			{/*// The amount of this product in the basket + the ability to change the quantity*/}
			<ItemOrderCounterCountainer itemCount={itemCount} itemId={item.id} />
			{/*// The price of this product*/}
			<OrderItemPreise itemCount={itemCount} item={item} />
			{/*// garbage basket- removal of goods from the basket*/}
			<StyledTrashCan className='_icon-trash_can' onClick={() => onClickTrashCan(item.id)} />
		</StyledOrderContainer>
	);
};

export default React.memo(OrderItem);