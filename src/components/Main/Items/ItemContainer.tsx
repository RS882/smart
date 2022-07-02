import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearFlyingKoord, endAddingItemToCart, IKoord, selectAddItemToCart } from '../../../redux/ItemSlice';

import Item, { IItemProps } from './Item';
import { selectEndFlyKoord } from './../../../redux/ItemSlice';
import { addCartCount, addItemToCart } from '../../../redux/ActionSlice';
import store from '../../../redux/store';

interface IFlyingItem {
	startK: IKoord;
	endK: IKoord;

}

const StyledItemContainer = styled.div`
	width:	365px;
	position: relative;
`;
const StyledFlyingItem = styled.div<IFlyingItem>`
	position: fixed;
	top: ${props => props.startK.top};
	left: ${props => props.startK.left}; 
	width:${props => props.startK.widthK}; 
	height:${props => props.startK.heightK};
	transform-origin: top left;
	animation:fly_item .5s ease forwards ; 

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
	const flyKoord: IFlyingItem = {
		startK: { left: '0px', top: '0px', widthK: '0px', heightK: '0px' },
		endK: { left: '0px', top: '0px', },

	};
	const endFly = useAppSelector(selectEndFlyKoord);
	const isAddingItem = useAppSelector(selectAddItemToCart);
	const dispatch = useAppDispatch();

	const getStartKoord = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current !== null) {
			const rect = ref.current.getBoundingClientRect();
			flyKoord.startK = {
				left: `${rect.left}px`,
				top: `${rect.top}px`,
				widthK: `${rect.width}px`,
				heightK: `${rect.height}px`,
			};
		}
	}

	if (isAddingItem) {
		if (endFly.left !== '0px' && endFly.left && endFly.top !== '0px' && endFly.top) {
			getStartKoord(flyRef)
			flyKoord.endK = { left: `${endFly.left}`, top: `${endFly.top}`, }
		}
	}

	const stopFlying = () => {
		dispatch(endAddingItemToCart());
		dispatch(addCartCount());
		dispatch(addItemToCart(props.itemArrNumb));
		dispatch(clearFlyingKoord());
	};

	console.log(store.getState());
	// console.log(flyKoord);


	return (
		<StyledItemContainer>
			{isAddingItem ?
				<StyledFlyingItem {...flyKoord} onAnimationEnd={stopFlying}>
					<Item itemData={props.itemData} itemArrNumb={props.itemArrNumb} />
				</StyledFlyingItem> : null}
			<div ref={flyRef}>
				<Item itemData={props.itemData} itemArrNumb={props.itemArrNumb} />
			</div>
		</StyledItemContainer >
	);
};

export default ItemContainer;