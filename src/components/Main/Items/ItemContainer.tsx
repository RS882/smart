import React, { FC } from 'react';
import styled from 'styled-components';
import Item, { IItemProps } from './Item';

const StyledItemContainer = styled.div`
	width:	365px;
	position: relative;
`


const ItemContainer: FC<IItemProps> = (props) => {

	console.log(props)
	return (
		<StyledItemContainer>
			<Item itemData={props.itemData} itemArrNumb={props.itemArrNumb} />
		</StyledItemContainer>
	);
};

export default ItemContainer;