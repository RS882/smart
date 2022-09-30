import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { StyledMain } from './../Main/Main';
import { selectCartTextDeliveryMethod, selectCartTextPaymentMethod, selectCartTextRecipient, selectCartTextTitle } from './../../redux/LanguageSlice';

import { useAppSelector } from '../../redux/hooks';
import OrderContainer from './Order/OrderContainer';
import CartMetodNotActiv from './CartMetodNotActiv';
import CartTotalContainer from './Total/CartTotalContainer';


const StyledCartContainer = styled.div`
	
	display:flex;
	padding: 0 20px;
	display: grid;
`;

const StyledTitle = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 130%;
	margin-top:30px;
	margin-bottom:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top:50px;
		font-size: 28px;
	};
	
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		margin-top:60px;
		margin-bottom:50px;
		font-size: 36px;
	};
`;

const Cart: FC = () => {
	// The total price of goods in the basket
	const [totalPrise, setTotalPreise] = useState('0.00');
	//The title is common text
	const titleText = useAppSelector(selectCartTextTitle);
	// The text of the Delivery section
	const deliveryText = useAppSelector(selectCartTextDeliveryMethod);
	// The text of the section Payment
	const paymentText = useAppSelector(selectCartTextPaymentMethod);
	// The text of the section is the recipient
	const recipientText = useAppSelector(selectCartTextRecipient);
	// sending order data
	const onCheckout = () => {
		console.log('Checkout');

	};
	const goToUserAagreement = () => {
		console.log('UserAagreement');

	};
	return (
		<StyledMain>
			<Container>
				<StyledCartContainer>
					<StyledTitle>{titleText}</StyledTitle>
					<OrderContainer setTotalPrise={setTotalPreise} />
					<CartMetodNotActiv title={deliveryText?.title!} />
					<CartMetodNotActiv title={paymentText?.title!} />
					<CartMetodNotActiv title={recipientText?.title!} />
					<CartTotalContainer totalPrise={totalPrise}
						isCheckout={true} onCheckout={onCheckout}
						goToUserAagreement={goToUserAagreement} />
				</StyledCartContainer>
			</Container>
		</StyledMain>
	);
};

export default React.memo(Cart);
