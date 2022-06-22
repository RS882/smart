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
	margin: 20px;
`;
const StyledImg = styled.div`
	border: 1px solid #000;
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

const StyledItemName = styled.div`
	font-weight:400;
	margin-bottom:20px;
`;

const Item: FC<IItemProps> = (props) => {

	const itemData = props.itemData;
	console.log(itemData);

	const starts = Math.round(itemData.starts / 20);



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

			<StarsContainer stars={starts} reviewsNumber={itemData.reviews} />

		</StyledItemColumn>
	);
};

export default Item;