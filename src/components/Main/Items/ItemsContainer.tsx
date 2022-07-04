import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import Item from './Item';
import ItemContainer from './ItemContainer';


const StyledItemsContainer = styled.div`
	display: grid;
		// автозаполнение с переносом если не помещаются
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		row-gap:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		row-gap:30px;
	};

`;

const ItemsContainer: FC = (props) => {

	const itemsData = useAppSelector(selectitemsData);
	const itemsCart: JSX.Element[] = itemsData.map((e, i) => <ItemContainer itemData={e} key={e.id + i + ''} />)

	return (
		<StyledItemsContainer>
			{itemsCart}

		</StyledItemsContainer>

	)
}

export default ItemsContainer;