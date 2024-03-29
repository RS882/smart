import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { StyledMain } from './../Main/Main';
import { selectCartTextDeliveryMethod, selectCartTextPaymentMethod, selectCartTextRecipient, selectCartTextTitle } from './../../redux/LanguageSlice';

import { useAppSelector } from '../../redux/hooks';
import OrderContainer from './Order/OrderContainer';
import CartMetodNotActiv from './CartMetodNotActiv';
import CartTotalContainer from './Total/CartTotalContainer';
import CartDeliveryContainer from './Delivery/CartDeliveryContainer';
import { useAppDispatch } from './../../redux/hooks';
import { clearCartOrder, selectIsOrderSuccess, selectOrder } from '../../redux/CartSlice';
import PaymentMethodContainer from './PaymentMethod/PaymentMethodContainer';
import ReciepientContainer from './Recipient/ReciepientContainer';
import { setOrder } from '../../redux/Thunk/thunkOrder';
import { clearCart, selectIsCartFull } from '../../redux/ActionSlice';
import { useNavigate } from 'react-router-dom';

export interface ISetIsNext {
	setIsNext: () => void;
};
export interface ISetStateIsNext {
	setIsNext: (el: boolean) => void;
};
export interface ISetNext extends ISetStateIsNext {
	isNext: boolean;
};
export interface IUseStateCartDeliveryForm {
	setDeliveryPreise?: React.Dispatch<React.SetStateAction<number>>;
};


const StyledCartContainer = styled.div`
	padding: 0 20px;
	display: grid;
	column-gap:20px;
	@media ${props => props.theme.media?.desktop || `(width >= 991.98px)`} {
		grid-template-columns: 1fr 420px;
	};
`;

const StyledTitle = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 130%;
	margin-top:30px;
	margin-bottom:30px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		margin-top:50px;
		font-size: 28px;
	};
	
	@media ${props => props.theme.media?.desktop || `(width >= 991.98px)`} {
		margin-top:60px;
		margin-bottom:50px;
		font-size: 36px;
		grid-column:1/3;
	};
`;

const StyledTotal = styled.div`
	@media ${props => props.theme.media?.desktop || `(width >= 991.98px)`} {
		grid-column:2/3;
		
	};
`;

const StyledCartBlock = styled.div`
	display: grid;
`;

const Cart = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	// The total price of goods in the basket
	const [totalPrise, setTotalPreise] = useState('0.00');
	// The delivery price of goods in the basket
	const [deliveryPrise, setDeliveryPreise] = useState(0);
	// whether the button is pressedressed Order
	const [isNextOrder, setIsNextOrder] = useState(false);
	// whether the button is pressedressed Delivety
	const [isNextDelivery, setIsNextDelivery] = useState(false);
	// whether the button is pressedressed PaymentMethod
	const [isNextPMethod, setIsNextPMethod] = useState(false);
	// whether  submit is pressedressed Recipient
	const [isPecipient, setIsPecipient] = useState(false);
	//The title is common text
	const titleText = useAppSelector(selectCartTextTitle);
	// The text of the Delivery section
	const deliveryText = useAppSelector(selectCartTextDeliveryMethod);
	// The text of the section Payment
	const paymentText = useAppSelector(selectCartTextPaymentMethod);
	// The text of the section is the recipient
	const recipientText = useAppSelector(selectCartTextRecipient);
	// The result of sending data data
	const isOrderSuccess = useAppSelector(selectIsOrderSuccess);
	useEffect(() => {
		isOrderSuccess && dispatch(clearCartOrder());
		isOrderSuccess && sessionStorage.clear();
		isOrderSuccess && dispatch(clearCart());
	}, [isOrderSuccess]);

	// If the empty basket is moving to the main page
	const isCartFull = useAppSelector(selectIsCartFull);
	useEffect(() => {
		!isCartFull && navigate('/')
	}, [isCartFull])


	// sending order data
	const orderPayload = useAppSelector(selectOrder);
	const onCheckout = () => {
		dispatch(setOrder(orderPayload));
		console.log('Checkout');

	};
	// transition to a user agreement
	const goToUserAagreement = () => {
		console.log('UserAgreement');

	};
// Check all the data blocks have passed the validation
	const isValid: boolean = ![isNextOrder, isNextDelivery, isNextPMethod, isPecipient,].includes(false);

	return (
		<StyledMain>
			<Container>
				<StyledCartContainer>

					<StyledTitle>{titleText}</StyledTitle>
					<StyledCartBlock>
						<OrderContainer setTotalPrise={setTotalPreise} setIsNext={setIsNextOrder} isNext={isNextOrder} />
						{isNextOrder ?
							<CartDeliveryContainer title={deliveryText?.title!}
								setIsNext={setIsNextDelivery} isNext={isNextDelivery}
								setDeliveryPreise={setDeliveryPreise} /> :
							<CartMetodNotActiv title={deliveryText?.title!} />}
						{isNextDelivery ?
							<PaymentMethodContainer title={paymentText?.title!}
								setIsNext={setIsNextPMethod} isNext={isNextPMethod} /> :
							<CartMetodNotActiv title={paymentText?.title!} />
						}
						{isNextPMethod ?
							<ReciepientContainer title={recipientText?.title!} setIsNext={setIsPecipient} isNext={isPecipient} /> :
							<CartMetodNotActiv title={recipientText?.title!} />
						}
					</StyledCartBlock>
					<StyledTotal>
						<CartTotalContainer totalPrise={totalPrise}
							isCheckout={isValid} onCheckout={onCheckout}
							goToUserAagreement={goToUserAagreement} deliveryPrise={deliveryPrise} />
					</StyledTotal>
				</StyledCartContainer>
			</Container>
		</StyledMain>
	);
};

export default React.memo(Cart);
