import React, { useState } from 'react';
import { selectFavoritedItem } from '../../redux/ActionSlice';
import { useAppSelector } from '../../redux/hooks';
import { IItemData, selectitemsData } from '../../redux/ItemSlice';
import ItemsContainer from '../Main/Items/ItemsContainer';
import styled from 'styled-components';
import { selectFavotitsPrivatOfficeText, selectItemHitBannersText, selectItemNewBannersText, selectLangStiringsHeaderCatalogMenu } from '../../redux/LanguageSlice';
import { changeFirstSimbolToUpperCase } from '../../utilits/functions';
import ItemTypeFilter from './ItemTypeFilter';
import { selectFavotitsSortText } from './../../redux/LanguageSlice';

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
	const sortTerms = useAppSelector(selectFavotitsSortText).terms.map(e => changeFirstSimbolToUpperCase(e));
	// We transform the text- only the first letter title
	const defaultItemType = changeFirstSimbolToUpperCase(defaultType.allGoods);
	const newItemType = changeFirstSimbolToUpperCase(bannerNewText);
	const hitItemType = changeFirstSimbolToUpperCase(bannerHittext);
	//We create an object key - type of product, value - Filter function for this product

	const getNewItem: IGetFunItem = (items) =>
		items.length === 0 ? items : items.filter(e => e.newitem);

	const getHitItem: IGetFunItem = (items) =>
		items.length === 0 ? items : items.filter(e => e.salehit);

	const getTypeItem = (itemType: string): IGetFunItem => (items) =>
		items.length === 0 ? items : items.filter(e => e.itemType === itemType);

	let actionsItemType: { [x: string]: IGetFunItem; } = {
		[defaultItemType]: (items) => items,
		[newItemType]: getNewItem,
		[hitItemType]: getHitItem,
	};
	for (const key in objItemType) {
		actionsItemType = {
			...actionsItemType,
			[changeFirstSimbolToUpperCase(objItemType[key])]: getTypeItem(`${key}`),
		}
	};
	//----------------------

	// The type of element is thrown in the filter
	const [selectetItemType, setSelectedItemType] = useState(defaultItemType);

	// An array of elected goods
	const favoritedItems: IItemData[] = itemsFavorite.map((e) => itemsData.filter(el => el.id === e)[0]);

	// Choosing types of goods that are in the elect

	const itemTypeList: string[] = [defaultItemType,];
	favoritedItems.find(e => e.newitem === true) && itemTypeList.push(newItemType);
	favoritedItems.find(e => e.salehit === true) && itemTypeList.push(hitItemType);

	const favoriteItemType = new Set<string>(itemTypeList);
	favoritedItems.forEach(e => { favoriteItemType.add(objItemType[e.itemType]) });

	const favoriteItemTypeArr = Array.from(favoriteItemType)



	// array of goods for display
	const items = actionsItemType[selectetItemType](favoritedItems);

	//------------------------------------------------------




	return (
		<StyledFavoriteBox>
			<StyledItemTypeFilterBox>
				<ItemTypeFilter itemType={favoriteItemTypeArr} setSelectedItemType={setSelectedItemType} />
			</StyledItemTypeFilterBox>
			<StyledItemsContainer>
				<ItemsContainer iData={items} isViewAllItem={true} />
			</StyledItemsContainer>
		</StyledFavoriteBox>
	);
};

export default Favorits;