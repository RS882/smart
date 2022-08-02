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



const FavoriteContainer: FC<IFavoriteContainer> = ({ isFavorite, id, isCompare }) => {
	const dispatch = useAppDispatch();

	const toogleItemToFavotite = () => {

		if (isFavorite) {
			dispatch(reduceFavoritesCount());
			dispatch(delItemToFavorite(id));
		} else {
			dispatch(addFavoritesCount());
			dispatch(addItemToFavorite(id));
		}

	};

	const toogleItemToCompare = () => {

		if (isCompare) {
			dispatch(reduceCompareCount());
			dispatch(delItemToCompare(id));
		} else {
			dispatch(addCompareCount());
			dispatch(addItemToCompare(id));
		}
	};


	return (
		<StyledFavoriteContainer>
			<IconBtn iconClass={isFavorite ? '_icon-hart_full' : '_icon-hart_empty'}
				iconColor={isFavorite ? '#F15152' : undefined}
				callBack={toogleItemToFavotite} />
			<IconBtn iconClass={'_icon-compare'}
				iconColor={isCompare ? '#2A5275' : undefined}
				callBack={toogleItemToCompare} />
		</StyledFavoriteContainer>
	);
};

export default FavoriteContainer;

