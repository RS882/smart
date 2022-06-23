import React, { FC } from 'react';
import styled from 'styled-components';
import itemImg from '../../../assets/image 18.png'
import { IItemData } from '../../../redux/ItemSlice';
import StarsContainer from './Stars/StarsContainer';



export interface IItemProps {
	itemData: IItemData;
}

const StyledItemColumn = styled.div`
	display: flex;
	flex-direction:column;
	padding: 20px;
	border: 1px solid  ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-radius: 6px;
`;
const StyledImg = styled.button`
	
	margin-bottom:10px;
	
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

`;

const Item: FC<IItemProps> = (props) => {

	const itemData: IItemData = props.itemData;
	console.log(itemData)

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

		</StyledItemColumn>
	);
};

export default Item;