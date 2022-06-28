import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import Item from './Item';
import ItemContainer from './ItemContainer';


const StyledItemsContainer = styled.div`
	
	border: 1px solid #000;
`

const ItemsContainer: FC = (props) => {

	const ItemsData = useAppSelector(selectitemsData);


	return (
		<StyledItemsContainer>
			<ItemContainer itemData={ItemsData[0]} itemArrNumb={'1'} />

		</StyledItemsContainer>

	)
}

export default ItemsContainer;