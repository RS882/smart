import React, { FC } from 'react';
import styled from 'styled-components';
import PriseContainer from '../../Main/Items/Prise/PriseContainer';

import { IItemOrderProps } from './OrderItem';



const StyledOrderItemPreise = styled.div`
	
	grid-row:2/3;
	grid-column:1/3;
	justify-self: center;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		justify-self: center;
	};
`;

const OrderItemPreise: FC<IItemOrderProps> = ({ itemCount, item }) => {


	return (
		<StyledOrderItemPreise>
			<PriseContainer prise={+item.prise * itemCount + ''} discount={item.discount} isOrder={true} />
		</StyledOrderItemPreise>
	);
};

export default OrderItemPreise;