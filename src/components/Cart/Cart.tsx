import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { StyledMain } from './../Main/Main';
import { selectCartTextBtnNext, selectCartTextDeliveryMethod, selectCartTextPaymentMethod, selectCartTextRecipient, selectCartTextTitle } from './../../redux/LanguageSlice';

import { useAppSelector } from '../../redux/hooks';
import OrderContainer from './Order/OrderContainer';
import Button from '../Button';
import CartMetodNotActiv from './CartMetodNotActiv';


const StyledCartContainer = styled.div`
	
	display:flex;
	padding: 0 10px;
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

const Cart: FC = (props) => {

	const titleText = useAppSelector(selectCartTextTitle);
	const deliveryText = useAppSelector(selectCartTextDeliveryMethod);
	const paymentText = useAppSelector(selectCartTextPaymentMethod);
	const recipientText = useAppSelector(selectCartTextRecipient);
	return (
		<StyledMain>
			<Container>
				<StyledCartContainer>
					<StyledTitle>{titleText}</StyledTitle>
					<OrderContainer />
					<CartMetodNotActiv title={deliveryText?.title!} />
					<CartMetodNotActiv title={paymentText?.title!} />
					<CartMetodNotActiv title={recipientText?.title!} />
				</StyledCartContainer>
			</Container>
		</StyledMain>
	);
};

export default React.memo(Cart);
