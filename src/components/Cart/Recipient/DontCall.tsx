import { useField } from 'formik';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectRecipientTaxt } from '../../../redux/LanguageSlice';
import { InputAttrProps } from '../Delivery/CartDeliveryForm';
import { StyledCheckboxBlock, StyledCheckboxLabel } from '../Total/CartTotalContainer';
import RememberMe from './../../Login/LoginForm/RememeberMe/RememberMe';

const DontCall = ({ ...props }: InputAttrProps) => {

	const [field] = useField({ ...props })
	const dontCallText = useAppSelector(selectRecipientTaxt).dontCallMe;
	const isChecked: boolean = !!field.value;
	return (
		<StyledCheckboxBlock>
			<StyledCheckboxLabel >
				<input hidden type='checkbox' {...field} {...props} checked={isChecked} />
				<RememberMe value={isChecked} />
			</StyledCheckboxLabel>
			{dontCallText}
		</StyledCheckboxBlock>
	);
};

export default React.memo(DontCall);