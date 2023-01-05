import { useField } from 'formik';
import React from 'react';
import AutoSubmitForFromik from '../utilits/AutoSubmitForFromik';
import CartDateBox from './Cart/CartDateBox';
import { SelectAttrProps } from './Cart/Delivery/CartDeliveryForm';
import { StyledInputBox, StyledInputDateMask } from './Cart/Delivery/DeliveryDateBox/DeliveryDateBoxContainer';
import { StyledCitySelect } from './Cart/Delivery/SelectCity/SelectCityContainer';

const SelectTypeFilter = ({ itemTypeName, isLangChange, ...props }: { itemTypeName: string[], isLangChange: boolean, } & SelectAttrProps) => {
	const [field] = useField(props);


	const optionElem: JSX.Element[] = itemTypeName.map((e, i) => <option key={e + i} value={e}>{e} </option>);
	return (
		<CartDateBox >
			<StyledInputBox>
				<StyledCitySelect  {...field} {...props}>	{optionElem}</StyledCitySelect>
				<StyledInputDateMask>{field.value}</StyledInputDateMask>
			</StyledInputBox>
			<AutoSubmitForFromik isSubmit={isLangChange} />
		</CartDateBox>

	);

};

export default SelectTypeFilter;