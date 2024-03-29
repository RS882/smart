import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';

import { IItemData } from '../../../redux/ItemSlice';
import { selectViewAllItems } from '../../../redux/LanguageSlice';

import ItemContainer from './ItemContainer';
import TitleItems from './TitleItems';


export interface IItemProps {
	itemData: IItemData;

}
interface IItemsContainer {
	iData: [] | IItemData[];
	titleType?: string;
	isViewAllItem?: boolean;
};
interface IItemsProps {
	isFixWidth: boolean;
};

const StyledItemsContainer = styled.div<IItemsProps>`
	display: grid;
		// Automation with transfer if not placed
		grid-template-columns: repeat(auto-fit, minmax(280px, ${props => props.isFixWidth ? '365px' : '1fr'}));
		row-gap:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		row-gap:30px;
	};

`;

const ItemsContainer: FC<IItemsContainer> = ({ iData, titleType = '', isViewAllItem = false, ...props }) => {
	const [isViewAll, setIsViewAll] = useState(isViewAllItem);
	const viewAllItem = () => {
		setIsViewAll(true);
	};
	const viewAllText = useAppSelector(selectViewAllItems);

	const itemsCart: JSX.Element[] = iData.map((e, i) => <ItemContainer itemData={e} key={e.id + i + ''} />)



	return (
		<>
			{iData.length > 0 ?
				<>
					{titleType ? <TitleItems title={titleType} viewAllItem={viewAllItem} isAll={isViewAll}
						textBtn={viewAllText !== null ? viewAllText : ''} /> : null}
					<StyledItemsContainer isFixWidth={iData.length <= 3} >
						{isViewAll ? itemsCart : itemsCart.filter((e, i) => i < 4)}
					</StyledItemsContainer>
				</>
				: null}
		</>

	)
}

export default React.memo(ItemsContainer);