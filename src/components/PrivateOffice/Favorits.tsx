import React, { useState } from 'react';
import { selectFavoritedItem } from '../../redux/ActionSlice';
import { useAppSelector } from '../../redux/hooks';
import { IItemData, selectitemsData } from '../../redux/ItemSlice';
import ItemsContainer from '../Main/Items/ItemsContainer';
import styled from 'styled-components';
import { selectFavotitsPrivatOfficeText, selectItemHitBannersText, selectItemNewBannersText, selectLangStiringsHeaderCatalogMenu } from '../../redux/LanguageSlice';
import { changeFirstSimbolToUpperCase, getDiscountPrise } from '../../utilits/functions';
import ItemTypeFilter from './ItemTypeFilter';
import { selectFavotitsSortText } from './../../redux/LanguageSlice';

export type IGetFunItem = (items: [] | IItemData[]) => [] | IItemData[];


interface IGetFunObj { [x: string]: IGetFunItem; }


const StyledFavoriteBox = styled.div`
position: relative;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin:0 20px;
	};
	
`;

const StyledItemTypeFilterBox = styled.div`
	padding: 0 20px;
	margin-bottom:20px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		/* padding: 0 0 0 20px; */
		margin-bottom: 0px;
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
const StyledFilterWraper = styled.div`
@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
	display: flex;
	justify-content:space-between;
	margin-bottom:20px;
	};
`

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

	let actionsItemType: IGetFunObj = {
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

	// List of goods after filtering
	const itemsFilter = actionsItemType[selectetItemType](favoritedItems)


	//------------------------------------------------------
	// Types of sorting conditions
	const [selectetSortType, setSelectetSortType] = useState(sortTerms[0]);

	// Object where the key is the type of sorting. Value- Function for Finding
	let actionSortType: IGetFunObj = {
		[sortTerms[0]]: (items) =>
			items.length === 0 ? items : items.sort((a, b) => (getDiscountPrise(b.prise, b.discount) - getDiscountPrise(a.prise, a.discount))),
		[sortTerms[1]]: (items) =>
			items.length === 0 ? items : items.sort((a, b) => (getDiscountPrise(a.prise, a.discount) - getDiscountPrise(b.prise, b.discount))),
		[sortTerms[2]]: (items) =>
			items.length === 0 ? items : items.sort((a, b) => (+b.starts - (+a.starts))),
		[sortTerms[3]]: (items) =>
			items.length === 0 ? items : items.sort((a, b) => (+b.reviews - (+a.reviews))),

	};


	// array of goods for display
	const items = actionSortType[selectetSortType](itemsFilter);

	return (
		<StyledFavoriteBox>
			<StyledFilterWraper>
				<StyledItemTypeFilterBox>
					<ItemTypeFilter itemType={favoriteItemTypeArr} setSelectedItemType={setSelectedItemType} />
				</StyledItemTypeFilterBox>
				<StyledItemTypeFilterBox>
					<ItemTypeFilter itemType={sortTerms} setSelectedItemType={setSelectetSortType} />
				</StyledItemTypeFilterBox>
			</StyledFilterWraper>
			<StyledItemsContainer>
				<ItemsContainer iData={items} isViewAllItem={true} />
			</StyledItemsContainer>
		</StyledFavoriteBox>
	);
};

export default Favorits;