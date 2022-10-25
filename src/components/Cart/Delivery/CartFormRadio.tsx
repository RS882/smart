import { useField } from 'formik';
import React from 'react';

import CartDateBox, { ICartDateBox } from '../CartDateBox';
import { InputAttrProps } from './CartDeliveryForm';
import RadioLabel from './RadioLabel';



// field for choosing a delivery method - radio
const CartFormRadio = ({ children, bdColor, isOnlyBdColor, heigthBox, ...props }: ICartDateBox & InputAttrProps) => {
	const [field, meta, helpers] = useField({ ...props, type: 'radio', });



	return (
		<label>
			<CartDateBox bdColor={bdColor ? bdColor : field.checked ? '#4878A6' : ''}
				isOnlyBdColor={isOnlyBdColor} heigthBox={heigthBox}>
				<input hidden type="radio" {...field} {...props} />
				<RadioLabel isChecked={field.checked!} >{children}</RadioLabel>
			</CartDateBox>
		</label >

	);
};

export default React.memo(CartFormRadio);