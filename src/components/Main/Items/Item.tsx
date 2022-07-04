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



export interface IItemProps {
	itemData: IItemData;

}

const StyledItemColumn = styled.div`
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
const StyledItemType = styled.div`
	color: ${props => props.theme.color.text.second};
	text-transform: capitalize;
	margin-bottom:10px;
	font-weight:500;
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
	const dispatch = useAppDispatch();

	const isFavorite: boolean = props.itemData ? favoriteItems.includes(itemId) : false;
	const isCompare: boolean = props.itemData ? copmareItems.includes(itemId) : false;


	const addViewItems = () => {
		if (props.itemData && !viewedItems.includes(itemId)) {
			dispatch(addViewedCount());
			dispatch(addItemToViewed(itemId))
		}
	};

	// console.log(itemData);


	return (
		<StyledItemColumn>

			<StyledImg onClick={addViewItems}>
				<ImgStyled />
			</StyledImg>

			<StyledItemType>
				segways
			</StyledItemType>

			<StyledItemName onClick={addViewItems}>
				{itemData ? itemData.itemname : null}
			</StyledItemName>

			<StarsContainer stars={itemData ? Math.round(itemData.starts / 20) : 0}
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