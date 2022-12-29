import React, { useState } from 'react';
import { selectFavoritedItem } from '../../redux/ActionSlice';
import { useAppSelector } from '../../redux/hooks';
import { IItemData, selectitemsData } from '../../redux/ItemSlice';
import ItemsContainer from '../Main/Items/ItemsContainer';
import styled from 'styled-components';
import { selectFavotitsPrivatOfficeText, selectItemHitBannersText, selectItemNewBannersText, selectLangStiringsHeaderCatalogMenu } from '../../redux/LanguageSlice';
import { changeFirstSimbolToUpperCase } from '../../utilits/functions';
import ItemTypeFilter from './ItemTypeFilter';

export type IGetFunItem = (items: [] | IItemData[]) => [] | IItemData[];





const StyledFavoriteBox = styled.div`
position: relative;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin-left:20px;
	};
	
`;

const StyledItemTypeFilterBox = styled.div`
	padding: 0 20px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		padding: 0 0 0 20px;
		width:240px;
	};
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		padding: 0 ;
	};
`;

const StyledItemsContainer = styled.div`
	padding: 0 20px;

	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		padding: 0 ;
	};
`;

const Favorits = () => {
	const itemsFavorite = useAppSelector(selectFavoritedItem);
	const itemsData = useAppSelector(selectitemsData);
	const bannerNewText = useAppSelector(selectItemNewBannersText);
	const bannerHittext = useAppSelector(selectItemHitBannersText);
	const objItemType = useAppSelector(selectLangStiringsHeaderCatalogMenu);
	const defaultType = useAppSelector(selectFavotitsPrivatOfficeText);



	const getNewItem: IGetFunItem = (items) =>
		items.length === 0 ? items : items.filter(e => e.newitem);

	const getHitItem: IGetFunItem = (items) =>
		items.length === 0 ? items : items.filter(e => e.salehit);

	const getTypeItem = (itemType: string): IGetFunItem => (items) =>
		items.length === 0 ? items : items.filter(e => e.itemType === itemType);

	let actionsItemType: { [x: string]: IGetFunItem; } = {
		[changeFirstSimbolToUpperCase(defaultType.allGoods)]: (items) => items,
		[changeFirstSimbolToUpperCase(bannerNewText)]: getNewItem,
		[changeFirstSimbolToUpperCase(bannerHittext)]: getHitItem,
	};
	for (const key in objItemType) {
		actionsItemType = {
			...actionsItemType,
			[changeFirstSimbolToUpperCase(objItemType[key])]: getTypeItem(`${key}`),
		}
	};

	const [selectetItemType, setSelectedItemType] = useState(defaultType.allGoods);


	const favoritedItems: IItemData[] = itemsFavorite.map((e) => itemsData.filter(el => el.id === e)[0]);




	const items = actionsItemType[selectetItemType](favoritedItems);

	return (
		<StyledFavoriteBox>
			<StyledItemTypeFilterBox>
				<ItemTypeFilter itemType={Object.keys(actionsItemType)} setSelectedItemType={setSelectedItemType} />
			</StyledItemTypeFilterBox>
			<StyledItemsContainer>
				<ItemsContainer iData={items} />
			</StyledItemsContainer>
		</StyledFavoriteBox>
	);
};

export default Favorits;