import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import { ArrowFn } from '../../../types/fnTypes';
import ShortShow from '../ShortShow';
import { ImgStyled } from './OrderItem';

interface IOrderShort {
	items: IItemData[];
	onClickImg: (id: string) => void;
	cangeOrderData: ArrowFn;
};


const StyledItemsImg = styled.div`
	flex: 1 1 80%;
	display: grid;
	grid-template-columns:repeat(auto-fit, 80px);
	gap:20px;
`;
const StyledImgBox = styled.button`
	width: 80px;
	height:80px;
	border: 1px solid ${props => props.theme.color.divider || '#EAEAF0'} ;
	border-radius: 4px;
	transition: border 0.3s ease 0s;
	&:hover{
		border: 1px solid ${props => props.theme.color.blue || '#4878A6'};
	}
`;


// List of goods in the basket if the Next button is pressed
const OrderShort: FC<IOrderShort> = ({ items, onClickImg, cangeOrderData }) => {
	const imgItmeElems: JSX.Element[] = items.map((e, i) =>
		<StyledImgBox key={e.itemDescription + i} onClick={() => onClickImg(e.id)}>	<ImgStyled src={e.src ? e.src : ''} /></StyledImgBox>
	);
	return (
		<ShortShow cangeOrderData={cangeOrderData}>
			{<StyledItemsImg>{imgItmeElems}</StyledItemsImg>}
		</ShortShow>
	);
};

export default OrderShort;