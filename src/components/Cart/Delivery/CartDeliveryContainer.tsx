import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import BtnNext from '../BtnNext';
import { ISetNext, IUseStateCartDeliveryForm } from '../Cart';


import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';

interface ICartDeliveryContainer extends ISetNext, IUseStateCartDeliveryForm {
	title: string;

}


// Delivery unit in the basket
const CartDeliveryContainer: FC<ICartDeliveryContainer> = ({ title, isNext, setIsNext, setDeliveryPreise }) => {

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			<CartDeliveryForm setDeliveryPreise={setDeliveryPreise} />

		</StyledCartItemContainer>
		{isNext ? null : <BtnNext onClickNextBtnCart={() => setIsNext(true)} />}
	</>
	);
};

export default React.memo(CartDeliveryContainer);