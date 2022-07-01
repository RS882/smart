import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { endAddingItemToCart, IKoord, selectAddItemToCart } from '../../../redux/ItemSlice';
import store from '../../../redux/store';
import Item, { IItemProps } from './Item';
import { selectEndFlyKoord } from './../../../redux/ItemSlice';

const StyledItemContainer = styled.div`
	width:	365px;
	position: relative;
`;
const StyledFlyingItem = styled.div<IKoord>`
	background-color:red;
	position: fixed;
	transition: all 0.3 ease 0s;
	top: ${props => props.top};
	left:  ${props => props.left};
	 height:${props => props.height};
	width:${props => props.width};	
	opacity:1;
	
`;


const ItemContainer: FC<IItemProps> = (props) => {
	const flyRef = useRef<HTMLDivElement>(null);

	const [flyKoord, setFlyKoord] = useState({ left: '', top: '', width: '', height: '' });
	const [isFly, setIsFly] = useState(false);
	const endFly = useAppSelector(selectEndFlyKoord);

	const isAddingItem = useAppSelector(selectAddItemToCart);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (flyRef.current !== null) {
			const rect = flyRef.current.getBoundingClientRect();
			setFlyKoord({
				left: `${rect.left}`,
				top: `${rect.top}`,
				width: `${rect.width}`,
				height: `${rect.height}`,
			})
			setIsFly(true)
			console.log(rect);
			//dispatch(endAddingItemToCart())
		}
	}, [isAddingItem]);

	if (isFly) {
		setFlyKoord({

			left: `${endFly.left}`,
			top: `${endFly.top}`,
			width: `0px`,
			height: `0px`,
		});
		setIsFly(false)
	};


	console.log(flyKoord);

	return (
		<StyledItemContainer>
			{isAddingItem ?
				<StyledFlyingItem {...flyKoord}>
					<Item itemData={props.itemData} itemArrNumb={props.itemArrNumb} />
				</StyledFlyingItem> : null}
			<div ref={flyRef}>
				<Item itemData={props.itemData} itemArrNumb={props.itemArrNumb} />
			</div>
		</StyledItemContainer >
	);
};

export default ItemContainer;