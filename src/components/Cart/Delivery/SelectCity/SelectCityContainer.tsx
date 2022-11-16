import { ErrorMessage, useField } from 'formik';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { validateSelectIsEnpty } from '../../../../utilits/validators';
import { IUseStateCartDeliveryForm } from '../../Cart';
import CartDateBox from '../../CartDateBox';
import { SelectAttrProps } from '../CartDeliveryForm';
import { StyledInputBox, StyledInputDateMask } from '../DeliveryDateBox/DeliveryDateBoxContainer';

interface ICartFormRadio {
	cityName?: string;
};


interface ISelectCityContainer extends IUseStateCartDeliveryForm, ICartFormRadio {
	option?: string[];
	title?: string;
	placholderText?: string;
	optionPlus?: [string, number][];
	priseDelivery?: string;

};
export const StyledCitySelect = styled.select`
	opacity:0;
	width: 100%;
	height: 100%;
`;


export const StyledTitleDateBox = styled.div`
	margin-bottom:8px;
`;
export const StyledErrorMessage = styled.div`
	font-size:12px;
	font-weight:700;
	color:${props => props.theme.color.red || '#F15152'};
	z-index:30;
	
`;
const StyledPriseText = styled.span`
	color:${props => props.theme.color.text.second || '#838688'};
`;


// component of the type of Select to the form of a dozen
const SelectCityContainer = ({ option, title, placholderText, optionPlus,
	priseDelivery, setDeliveryPreise, cityName,
	...props }: ISelectCityContainer & SelectAttrProps) => {

	const [field, meta] = useField({ ...props, validate: props.validate || validateSelectIsEnpty });


	//set the delivery price format
	const getPriseFormat = (prise: number, text: string = 'free'): string =>
		prise ? ` (${prise.toFixed(2) + '€'})` : ` (${text})`;

	// List output for the list Select
	const getOptionElemrnt = (option?: string[], optionPlus?: [string, number][]): JSX.Element[] | null => {
		if (!option && !optionPlus) return null;
		if (optionPlus) return optionPlus!.map((e, i) =>
			<option value={e[0]} key={e[0] + i}>{e[0]}{getPriseFormat(e[1], priseDelivery)}</option>);



		const res = field.name === 'paymentMethod' ?
			option!.map((e, i) => <option value={e} key={e + i}>{e}</option>) :
			option!.sort().map((e, i) => <option value={e} key={e + i}>{e}</option>);
		return res;
	};

	// We form a text for show 

	const valueText: string = field.value;
	const arr: [string, number] | null = optionPlus ? optionPlus!.filter(e => e[0] === valueText)[0] : null;
	const inputDate: JSX.Element = arr ?
		<span>{valueText}<StyledPriseText> {`${getPriseFormat(arr[1], priseDelivery)}`}</StyledPriseText></span>
		: <span>{valueText || placholderText || title}</span>;

	sessionStorage.setItem(field.name, valueText);

	// We set the delivery price
	useEffect(() => { arr && setDeliveryPreise !== undefined && setDeliveryPreise(arr[1]) }, [arr]);


	return (<div>
		<StyledTitleDateBox>{title}</StyledTitleDateBox>
		<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}>
			<StyledInputBox>
				<StyledCitySelect  {...field} {...props}>
					<option value='' disabled>{placholderText || title}</option>
					{getOptionElemrnt(option, optionPlus)}
				</StyledCitySelect>
				<StyledInputDateMask>{inputDate}</StyledInputDateMask>
			</StyledInputBox>
		</CartDateBox>
		<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
	</div>

	);
};

export default React.memo(SelectCityContainer);