import React, { FC } from 'react';

import BtnNext from '../BtnNext';
import { ISetNext, IUseStateCartDeliveryForm } from '../Cart';


import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';


interface ICartDeliveryContainer extends ISetNext, IUseStateCartDeliveryForm {
	title: string;

};



// Delivery unit in the basket
const CartDeliveryContainer: FC<ICartDeliveryContainer> = ({ title, isNext, setIsNext, setDeliveryPreise }) => {



	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			<CartDeliveryForm setDeliveryPreise={setDeliveryPreise} setIsNext={setIsNext} />
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext type='submit' form='DeliveryForm' />}
	</>
	);
};

export default React.memo(CartDeliveryContainer);