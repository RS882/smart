import React, { FC } from 'react';

import { ArrowFn } from '../../../types/fnTypes';
import ShortShow from '../ShortShow';
import ShopAdress from './PickupContainer/ShopAdress';
import styled from 'styled-components';
import { IDeliveryDetalsShort } from './CartDeliveryContainer';


interface ICartDeliveryShort {
	onClickBtnChange: ArrowFn;
	deliveryDetals: IDeliveryDetalsShort;
	titel: string;
};


const StyledDeliveryShortBox = styled.div`
	display: flex;
	flex-direction:column;
	
`;
const StyledCartDeliveryShort = styled.div`
	display: flex;
	flex-direction:column;
`;
const StyledTitelShort = styled.div`
	font-weight: 600;
	font-size: 20px;
	margin-bottom:20px;
`;
// component with information about delivery and button change
const CartDeliveryShort: FC<ICartDeliveryShort> = ({ onClickBtnChange, deliveryDetals, titel }) => {

	return (
		<ShortShow cangeOrderData={onClickBtnChange}>
			<StyledDeliveryShortBox>
				<StyledTitelShort>{titel}</StyledTitelShort>
				<StyledCartDeliveryShort><ShopAdress {...deliveryDetals} /></StyledCartDeliveryShort>
			</StyledDeliveryShortBox>
		</ShortShow>

	);
};

export default React.memo(CartDeliveryShort);