import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearFlyingItemId, clearFlyingKoord, endAddingItemToCart, getFlyingStartKoord, IKoord, selectAddItemToCart, selectStartFlyKoord } from '../../../redux/ItemSlice';

import Item, { IItemProps } from './Item';
import { selectEndFlyKoord, selectIdFlyingItem, selectIsGetKoord } from './../../../redux/ItemSlice';
import { addCartCount, addItemToCart } from '../../../redux/ActionSlice';
import store from '../../../redux/store';

interface IFlyingItem {
	startK: IKoord;
	endK: IKoord;

}

const StyledItemContainer = styled.div`
	position: relative;
`;
const StyledFlyingItem = styled.div<IFlyingItem>`
	position: fixed;
	top: ${props => props.startK.top};
	left: ${props => props.startK.left}; 
	width:${props => props.startK.widthK}; 
	height:${props => props.startK.heightK};
	transform-origin: top left;
	animation:fly_item .3s ease forwards ; 

	@keyframes fly_item {
		0%{
			top: ${props => props.startK.top};
			left:${props => props.startK.left};
			transform: scale(1);
			}
		100%{
			top: ${props => props.endK.top};
			left:${props => props.endK.left};
			transform:scale(0);
			opacity:0;
		}
	}
	
`;


const ItemContainer: FC<IItemProps> = (props) => {

	const flyRef = useRef<HTMLDivElement>(null);


	const endFly = useAppSelector(selectEndFlyKoord);
	const startFly = useAppSelector(selectStartFlyKoord)
	const isAddingItem = useAppSelector(selectAddItemToCart);
	const idFlyItem = useAppSelector(selectIdFlyingItem);
	const isGetKoord = useAppSelector(selectIsGetKoord);
	const dispatch = useAppDispatch();



	const getStartKoord = (ref: React.RefObject<HTMLDivElement>): IKoord => {
		if (ref.current !== null) {
			const rect = ref.current.getBoundingClientRect();

			return {
				left: `${rect.left}px`,
				top: `${rect.top}px`,
				widthK: `${rect.width}px`,
				heightK: `${rect.height}px`,
			};
		}
		return {
			left: `0px`,
			top: `0px`,
			widthK: `0px`,
			heightK: `0px`,
		}
	}



	useEffect(() => {

		if (isAddingItem && props.itemData.id === idFlyItem) {
			dispatch(getFlyingStartKoord(getStartKoord(flyRef)))
		}

	}, [isAddingItem])





	const stopFlying = () => {

		dispatch(endAddingItemToCart());
		dispatch(clearFlyingItemId());
		dispatch(addCartCount());
		dispatch(addItemToCart(props.itemData ? props.itemData.id : '0'));
		dispatch(clearFlyingKoord());

	};






	return (
		<StyledItemContainer>
			{isAddingItem && props.itemData.id === idFlyItem && isGetKoord ?

				<StyledFlyingItem startK={startFly}
					endK={endFly}
					onAnimationEnd={stopFlying}>
					<Item itemData={props.itemData} />
				</StyledFlyingItem> : null}
			<div ref={flyRef}>
				<Item itemData={props.itemData} />
			</div>


		</StyledItemContainer >
	);
};

export default React.memo(ItemContainer);