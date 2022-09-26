import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../../redux/ItemSlice';
import { ArrowFn } from '../../../types/fnTypes';
import BtnChange from '../BtnChange';
import { ImgStyled } from './OrderItem';

interface IOrderShort {
	items: IItemData[];
	onClickImg: (id: string) => void;
	cangeOrderData: ArrowFn;
};

const StyledOrderShortContainer = styled.div`
	display: flex;
	flex-direction:column;
	margin-top:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		flex-direction:row;
		justify-content: space-between;
		margin-top:30px;
	};
`;
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
const StyledBtnChange = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
				align-self:flex-end;
			};
`;

// List of goods in the basket if the Next button is pressed
const OrderShort: FC<IOrderShort> = ({ items, onClickImg, cangeOrderData }) => {
	const imgItmeElems: JSX.Element[] = items.map((e, i) =>
		<StyledImgBox key={e.itemDescription + i} onClick={() => onClickImg(e.id)}>	<ImgStyled src={e.src ? e.src : ''} /></StyledImgBox>
	);
	return (
		<StyledOrderShortContainer>
			<StyledItemsImg>
				{imgItmeElems}
			</StyledItemsImg>
			<StyledBtnChange>
				<BtnChange onClickCangeBtnCart={cangeOrderData} />
			</StyledBtnChange>
		</StyledOrderShortContainer>
	);
};

export default OrderShort;