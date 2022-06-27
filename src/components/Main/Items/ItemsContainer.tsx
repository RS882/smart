import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import Item from './Item';


const StyledItemsContainer = styled.div`
	width:	365px;
	/* height: 570px; */
	border: 1px solid #000;
`

const ItemsContainer: FC = (props) => {

	const ItemsData = useAppSelector(selectitemsData);


	return (
		<StyledItemsContainer>
			<Item itemData={ItemsData[0]} itemArrNumb={0} />
		</StyledItemsContainer>

	)
}

export default ItemsContainer;