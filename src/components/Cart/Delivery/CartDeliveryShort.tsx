import React, { FC } from 'react';
import { selectDeliveryDetails } from '../../../redux/CartSlice';
import { useAppSelector } from '../../../redux/hooks';
import { ArrowFn } from '../../../types/fnTypes';
import ShortShow from '../ShortShow';


interface ICartDeliveryShort {
	onClickBtnChange: ArrowFn
}


const CartDeliveryShort: FC<ICartDeliveryShort> = ({ onClickBtnChange }) => {
	const deliveryDetails = useAppSelector(selectDeliveryDetails);

	// delivery: {
	// 	city: '',
	// 	delivery: '',
	// 	deliveryDate: '',
	// 	deliveryTime: '',
	// 	deliveryStreet: '',
	// 	deliveryFlat: '',
	// 	comment: '',
	// 	shopAdress: '',
	// },


	return (
		<div>
			<ShortShow cangeOrderData={onClickBtnChange}>

			</ShortShow>
		</div>
	);
};

export default CartDeliveryShort;