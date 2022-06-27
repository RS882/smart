import React, { FC } from 'react';
import styled from 'styled-components';
import { toogleCompareItem, toogleFavoriteItem } from '../../../../redux/ItemSlice';

import IconBtn from '../IconBtn/IconBtn';
import { useAppDispatch } from './../../../../redux/hooks';


interface IFavoriteContainer {
	id: number;
	isFavorite: boolean | undefined;
	isCompare: boolean | undefined;
}

const StyledFavoriteContainer = styled.div`

	display:grid;
	grid-template-columns: repeat(2, auto);
	grid-gap:10px;
	align-self: flex-end;
`



const FavoriteContainer: FC<IFavoriteContainer> = (props) => {
	const dispatch = useAppDispatch();

	const toogleItemToFavotite = () => props.id !== undefined && dispatch(toogleFavoriteItem(props.id));

	const toogleItemToCompare = () => props.id !== undefined && dispatch(toogleCompareItem(props.id));;


	return (
		<StyledFavoriteContainer>
			<IconBtn iconClass={props.isFavorite ? '_icon-hart_full' : '_icon-hart_empty'}
				iconColor={props.isFavorite ? '#F15152' : ''}
				callBack={toogleItemToFavotite} />
			<IconBtn iconClass={'_icon-compare'}
				iconColor={props.isCompare ? '#2A5275' : ''}
				callBack={toogleItemToCompare} />
		</StyledFavoriteContainer>
	);
};

export default FavoriteContainer;

