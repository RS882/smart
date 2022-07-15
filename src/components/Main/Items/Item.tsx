import React, { FC } from 'react';
import styled from 'styled-components';
import itemImg from '../../../assets/image 18.png'
import { addItemToViewed, addViewedCount, selectCompaedItem, selectViewedItem } from '../../../redux/ActionSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { IItemData } from '../../../redux/ItemSlice';
import BuyAndCartContainer from './BuyAndCart/BuyAndCartContainer';
import PriseAndFavoritsContainer from './Prise/PriseAndFavoritsContainer';
import StarsContainer from './Stars/StarsContainer';
import { selectFavoritedItem } from './../../../redux/ActionSlice';
import { selectLangStiringsHeaderCatalogMenu } from '../../../redux/LanguageSlice';
import { log } from 'console';
import BannersContainer from './Banners/ItemBannersContainer';



export interface IItemProps {
	itemData: IItemData;

}

const StyledItemColumn = styled.div`
	position:relative;
	display: flex;
	flex-direction:column;
	width: 100%;
	height:100%;
	padding: 20px;
	border: 1px solid  ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-radius: 6px;
	
`;
const StyledImg = styled.button`
	
	margin-bottom:10px;
	border:2px solid #fff;
	border-radius:4px;
	transition:all 0.3s ease 0s;
	&:hover{
		border: 2px solid ${props => props.theme.color.cardBorder};
		
	}
	
`;
const ImgStyled = styled.img.attrs(props => ({
	alt: "item image",
	src: itemImg
}))`

	width: 100%;
	height:100%;
`;
const StyledItemType = styled.button`
	color: ${props => props.theme.color.text.second};
	text-transform: capitalize;
	margin-bottom:10px;
	font-weight:500;
	text-align:start;
	transition:all 0.3s ease 0s;
	text-decoration:none;
	&:hover{
		text-decoration:underline;
	}
`;

const StyledItemName = styled.button`
	height:100px;
	font-weight:400;
	margin-bottom:20px;
	text-align:start;
	transition:all 0.3s ease 0s;
	text-decoration:none;
	&:hover{
		text-decoration:underline;
	}

`;

const Item: FC<IItemProps> = (props) => {

	const itemData: IItemData = props.itemData;
	const itemId = props.itemData ? props.itemData.id : '0';
	const favoriteItems = useAppSelector(selectFavoritedItem);
	const copmareItems = useAppSelector(selectCompaedItem);
	const viewedItems = useAppSelector(selectViewedItem);
	const itemsType = useAppSelector(selectLangStiringsHeaderCatalogMenu);
	const dispatch = useAppDispatch();

	const isFavorite: boolean = props.itemData ? favoriteItems.includes(itemId) : false;
	const isCompare: boolean = props.itemData ? copmareItems.includes(itemId) : false;


	const addViewItems = () => {
		if (props.itemData && !viewedItems.includes(itemId)) {
			dispatch(addViewedCount());
			dispatch(addItemToViewed(itemId))
		}
	};

	const viewAllItemOfType = () => {
		console.log(props.itemData.itemType);

	};

	//console.log(itemsType);




	return (
		<StyledItemColumn>
			<BannersContainer new={itemData ? props.itemData.newitem : false}
				bestseller={itemData ? props.itemData.salehit : false} />

			<StyledImg onClick={addViewItems}>
				<ImgStyled />
			</StyledImg>

			<StyledItemType onClick={viewAllItemOfType}>
				{itemsType !== null ? itemsType[props.itemData.itemType] : null}
			</StyledItemType>

			<StyledItemName onClick={addViewItems}>
				{itemData ? itemData.itemname : null}
				{itemData ? itemData.itemDescription : null}
			</StyledItemName>

			<StarsContainer stars={itemData ? itemData.starts : 0}
				reviewsNumber={itemData ? itemData.reviews : 0} />

			<PriseAndFavoritsContainer idItem={itemId}
				prise={itemData ? itemData.prise : '0'}
				discount={itemData ? itemData.discount : 0}
				isFavorite={isFavorite}
				isCompare={isCompare} />

			<BuyAndCartContainer idItem={itemId} />

		</StyledItemColumn>
	);
};

export default Item;