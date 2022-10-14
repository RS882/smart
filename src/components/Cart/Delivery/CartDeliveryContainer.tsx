import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartTextDeliveryMethod } from '../../../redux/LanguageSlice';

import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';


// Delivery unit in the basket
const CartDeliveryContainer: FC = (props) => {

	const title = useAppSelector(selectCartTextDeliveryMethod);

	return (
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title?.title}</StyledCartItemTitle>
			<CartDeliveryForm />

		</StyledCartItemContainer>
	);
};

export default React.memo(CartDeliveryContainer);