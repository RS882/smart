import { useField } from 'formik';
import React from 'react';

import CartDateBox from '../CartDateBox';
import { InputAttrProps } from './CartDeliveryForm';
import RadioLabel from './RadioLabel';

interface ICartFormRadio {
	label: string;
};


// field for choosing a delivery method - radio
const CartFormRadio = ({ label, ...props }: ICartFormRadio & InputAttrProps) => {
	const [field] = useField({ ...props, type: 'radio', });

	return (
		<label>
			<CartDateBox bdColor={field.checked ? '#4878A6' : ''}>
				<input hidden type="radio" {...field} {...props} />
				<RadioLabel isChecked={field.checked!} label={label} />
			</CartDateBox>
		</label>

	);
};

export default React.memo(CartFormRadio);