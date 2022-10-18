import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import BtnNext from '../BtnNext';
import { ISetNext } from '../Cart';


import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';

interface ICartDeliveryContainer extends ISetNext {
	title: string;

}


// Delivery unit in the basket
const CartDeliveryContainer: FC<ICartDeliveryContainer> = ({ title, isNext, setIsNext }) => {



	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			<CartDeliveryForm />

		</StyledCartItemContainer>
		{isNext ? null : <BtnNext onClickNextBtnCart={() => setIsNext(true)} />}
	</>
	);
};

export default React.memo(CartDeliveryContainer);