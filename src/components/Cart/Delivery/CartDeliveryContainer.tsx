import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';

import BtnNext from '../BtnNext';
import { ISetNext, IUseStateCartDeliveryForm } from '../Cart';


import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';
import CartDeliveryShort from './CartDeliveryShort';



interface ICartDeliveryContainer extends ISetNext, IUseStateCartDeliveryForm {
	title: string;

};



// Delivery unit in the basket
const CartDeliveryContainer: FC<ICartDeliveryContainer> = ({ title, isNext, setIsNext, setDeliveryPreise }) => {



	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			{!isNext ? <CartDeliveryForm setDeliveryPreise={setDeliveryPreise} setIsNext={setIsNext}
			/> :
				<CartDeliveryShort onClickBtnChange={() => setIsNext(false)} />}
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext type='submit' form='DeliveryForm' />}
	</>
	);
};

export default React.memo(CartDeliveryContainer);