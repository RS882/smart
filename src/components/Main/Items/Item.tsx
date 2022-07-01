import React, { FC } from 'react';
import styled from 'styled-components';
import itemImg from '../../../assets/image 18.png'
import { IItemData } from '../../../redux/ItemSlice';
import BuyAndCartContainer from './BuyAndCart/BuyAndCartContainer';
import PriseAndFavoritsContainer from './Prise/PriseAndFavoritsContainer';
import StarsContainer from './Stars/StarsContainer';



export interface IItemProps {
	itemData: IItemData;
	itemArrNumb: string;
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
	// console.log(itemData)

	return (
		<StyledItemColumn>

			<StyledImg>
				<ImgStyled />
			</StyledImg>

			<StyledItemType>
				segways
			</StyledItemType>

			<StyledItemName>
				{itemData ? itemData.itemname : null}
			</StyledItemName>

			<StarsContainer stars={itemData ? Math.round(itemData.starts / 20) : 0}
				reviewsNumber={itemData ? itemData.reviews : 0} />

			<PriseAndFavoritsContainer idItem={props.itemArrNumb ? props.itemArrNumb : ''}
				prise={itemData ? itemData.prise : '0'}
				discount={itemData ? itemData.discount : 0}
				isFavorite={itemData ? itemData.isFavorite : false}
				isCompare={itemData ? itemData.isCompare : false} />

			<BuyAndCartContainer idItem={props.itemArrNumb ? props.itemArrNumb : ''} />

		</StyledItemColumn>
	);
};

export default Item;