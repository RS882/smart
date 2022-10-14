import { useField, FieldHookConfig } from 'formik';
import React, { FC } from 'react';

import CartDateBox from '../CartDateBox';
import RadioLabel from './RadioLabel';

interface ICartFormRadio {
	label: string;
};


// field for choosing a delivery method - radio
const CartFormRadio = ({ label, ...props }: ICartFormRadio & FieldHookConfig<string> & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) => {
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