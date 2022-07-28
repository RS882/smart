import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { IItemData, selectitemsData } from '../../../redux/ItemSlice';

import ItemContainer from './ItemContainer';
import TitleItems from './TitleItems';
import { log } from 'console';


interface IItemsContainer {
	iData: [] | IItemData[];
	titleType: string;
};
interface IItemsProps {
	isFixWidth: boolean;
};

const StyledItemsContainer = styled.div<IItemsProps>`
	display: grid;
		// автозаполнение с переносом если не помещаются
		grid-template-columns: repeat(auto-fit, minmax(280px, ${props => props.isFixWidth ? '365px' : '1fr'}));
		row-gap:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		row-gap:30px;
	};

`;

const ItemsContainer: FC<IItemsContainer> = (props) => {
	const [isViewAll, setIsViewAll] = useState(false);
	const viewAllItem = () => {
		setIsViewAll(true);
	};

	const itemsCart: JSX.Element[] = props.iData.map((e, i) => <ItemContainer itemData={e} key={e.id + i + ''} />)



	return (
		<>
			{props.iData.length > 0 ?
				<>
					<TitleItems title={props.titleType} viewAllItem={viewAllItem} isAll={isViewAll} />
					<StyledItemsContainer isFixWidth={props.iData.length <= 3} >
						{isViewAll ? itemsCart : itemsCart.filter((e, i) => i < 4)}
					</StyledItemsContainer>
				</>
				: null}
		</>

	)
}

export default React.memo(ItemsContainer);