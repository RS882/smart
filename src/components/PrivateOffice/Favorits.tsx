import React, { useState } from 'react';
import { selectFavoritedItem } from '../../redux/ActionSlice';
import { useAppSelector } from '../../redux/hooks';
import ShowItemsWithFiltAndSort from '../showItemsWithFiltAndSort';

const Favorits = () => {
	const itemsFavorite = useAppSelector(selectFavoritedItem);

	return <ShowItemsWithFiltAndSort itemsDataList={itemsFavorite} />
}

export default Favorits;