import React, { FC } from 'react';
import styled from 'styled-components';
import { addCompareCount, addFavoritesCount, addItemToCompare, addItemToFavorite, delItemToCompare, delItemToFavorite, reduceCompareCount, reduceFavoritesCount } from '../../../../redux/ActionSlice';


import IconBtn from '../IconBtn/IconBtn';
import { useAppDispatch } from './../../../../redux/hooks';


interface IFavoriteContainer {
	id: string;
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

	const toogleItemToFavotite = () => {

		if (props.isFavorite) {
			dispatch(reduceFavoritesCount());
			dispatch(delItemToFavorite(props.id));
		} else {
			dispatch(addFavoritesCount());
			dispatch(addItemToFavorite(props.id));
		}

	};

	const toogleItemToCompare = () => {

		if (props.isCompare) {
			dispatch(reduceCompareCount());
			dispatch(delItemToCompare(props.id));
		} else {
			dispatch(addCompareCount());
			dispatch(addItemToCompare(props.id));
		}
	};


	return (
		<StyledFavoriteContainer>
			<IconBtn iconClass={props.isFavorite ? '_icon-hart_full' : '_icon-hart_empty'}
				iconColor={props.isFavorite ? '#F15152' : undefined}
				callBack={toogleItemToFavotite} />
			<IconBtn iconClass={'_icon-compare'}
				iconColor={props.isCompare ? '#2A5275' : undefined}
				callBack={toogleItemToCompare} />
		</StyledFavoriteContainer>
	);
};

export default FavoriteContainer;

