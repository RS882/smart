import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartTextPaymentMethod } from '../../../redux/LanguageSlice';
import { StyledTextTitleNotActive } from '../Delivery/DeliveryContainer';
import { StyledCartItemContainer } from '../Order/OrderContainer';




const PaymentMethodContainer: FC = (props) => {
	const TitleText = useAppSelector(selectCartTextPaymentMethod)

	return (
		<StyledCartItemContainer>
			<StyledTextTitleNotActive>{TitleText?.title}</StyledTextTitleNotActive>
		</StyledCartItemContainer>
	);
};

export default PaymentMethodContainer;