import React, { FC } from 'react';

import { selectDeliveryDetails } from '../../../redux/CartSlice';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartDeliveryTextDelivery, selectCartDeliveryTextPickup } from '../../../redux/LanguageSlice';

import BtnNext from '../BtnNext';
import { ISetNext, IUseStateCartDeliveryForm } from '../Cart';


import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import CartDeliveryForm from './CartDeliveryForm';
import CartDeliveryShort from './CartDeliveryShort';



interface ICartDeliveryContainer extends ISetNext, IUseStateCartDeliveryForm {
	title: string;
};
export interface IDeliveryDetalsShort {
	city: string;
	adress: string;
	mode: string;
};


// Delivery unit in the basket
const CartDeliveryContainer: FC<ICartDeliveryContainer> = ({ title, isNext, setIsNext, setDeliveryPreise }) => {


	const deliveyText = useAppSelector(selectCartDeliveryTextDelivery)!;
	const pickupText = useAppSelector(selectCartDeliveryTextPickup)!;
	const deliveryDetails = useAppSelector(selectDeliveryDetails);
	// Speech store address
	const pickupShopDetails = deliveryDetails.delivery === 'pickup' ?
		pickupText.shope!.filter(e => e.idShop === deliveryDetails.shopAdress)[0] : null;

	const deliveryDetalsShort: IDeliveryDetalsShort = deliveryDetails.delivery === 'delivery' ? {
		city: deliveryDetails.city,
		adress: `${deliveryDetails.deliveryStreet}, ${deliveryDetails.deliveryFlat}`,
		mode: `${deliveryDetails.deliveryDate}, ${deliveryDetails.deliveryTime}`,
	} : {
		city: pickupShopDetails ? pickupShopDetails.city : '',
		adress: pickupShopDetails ? pickupShopDetails.adress : '',
		mode: pickupShopDetails ? pickupShopDetails.mode : '',
	};

	const deliveryTitelShort: string = deliveryDetails.delivery === 'delivery' ? deliveyText.shortTitle : pickupText.shortTitle;

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			{!isNext ? <CartDeliveryForm setDeliveryPreise={setDeliveryPreise} setIsNext={setIsNext} /> :
				<CartDeliveryShort onClickBtnChange={() => setIsNext(false)}
					deliveryDetals={deliveryDetalsShort} titel={deliveryTitelShort} />}
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext type='submit' form='DeliveryForm' />}
	</>
	);
};

export default React.memo(CartDeliveryContainer);