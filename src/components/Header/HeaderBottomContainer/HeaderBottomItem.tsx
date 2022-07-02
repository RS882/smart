import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getFlyingEndKoord, selectAddItemToCart, selectEndFlyKoord } from '../../../redux/ItemSlice';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';
import Flex from './../../Flex';
import HeaderYelllowDot from './HeaderYelllowDot';

interface ShowDotProps {
	name: string;
}

const StyledHBItemText = styled.div`
	font-size:13px;
	text-transform:capitalize;
	
`;
const StyledHBItemIcon = styled.div`
	font-size:24px;
	margin-bottom:5px;
	
`;

const StyledShowDot = styled.div<ShowDotProps>`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:${props => props.name === 'more' && 'none'};
	};

`


const HeaderBottomItem: FC<IHeaderBottomItem> = (props) => {

	const isShowDot = (props.name === 'cart' && props.isCartFull) || (props.name === 'more' && props.isMoreFull);

	const refCartBtm = useRef<HTMLDivElement>(null);

	const dispatch = useAppDispatch();
	const isAddingItem = useAppSelector(selectAddItemToCart);

	useEffect(() => {
		if (props.name === 'cart') {
			if (refCartBtm.current !== null && isAddingItem) {
				const rect = refCartBtm.current.getBoundingClientRect();
				rect.left && rect.top && dispatch(getFlyingEndKoord({ left: `${rect.left}px`, top: `${rect.top}px`, }))
			}
		}
	}, [isAddingItem]);


	return (
		<div ref={refCartBtm}>
			<Flex direction='column'>
				<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
				<StyledHBItemText>{props.itemText}</StyledHBItemText>
				<StyledShowDot name={props.name}>
					{isShowDot && < HeaderYelllowDot />}
				</StyledShowDot>
			</Flex>
		</div>

	);
};

export default HeaderBottomItem;