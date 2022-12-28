import React from 'react';
import { selectFavoritedItem } from '../../redux/ActionSlice';
import { useAppSelector } from '../../redux/hooks';
import { selectitemsData } from '../../redux/ItemSlice';
import ItemsContainer from '../Main/Items/ItemsContainer';
import styled from 'styled-components';
import { selectItemHitBannersText, selectItemNewBannersText, selectLangStiringsHeaderCatalogMenu } from '../../redux/LanguageSlice';
import { changeFirstSimbolToUpperCase } from '../../utilits/functions';


const StyledFavoriteBox = styled.div`
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin-left:20px;
	};
	
`;

const Favorits = () => {
	const itemsFavorite = useAppSelector(selectFavoritedItem);
	const itemsData = useAppSelector(selectitemsData);
	const bannerNewText = useAppSelector(selectItemNewBannersText);
	const bannerHittext = useAppSelector(selectItemHitBannersText);
	const objItemType = useAppSelector(selectLangStiringsHeaderCatalogMenu);


	const listItemType = [changeFirstSimbolToUpperCase(bannerNewText), changeFirstSimbolToUpperCase(bannerHittext)];
	for (const key in objItemType) { listItemType.push(changeFirstSimbolToUpperCase(objItemType[key])) };


	const favoritedItems = itemsFavorite.map((e) => itemsData.filter(el => el.id === e)[0]);




	return (
		<StyledFavoriteBox>
			<ItemsContainer iData={favoritedItems} />
		</StyledFavoriteBox>
	);
};

export default Favorits;