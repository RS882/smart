
import { FieldHookConfig, useField } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks';
import { selectDateMonDayText } from '../../../../redux/LanguageSlice';
import CartDateBox from '../../CartDateBox';
import { StyledTitleDateBox } from '../SelectCity/SelectCityContainer';

interface IDeliveryDateBoxContainer {
	dateMinMax: string[];
	title: string;


};


export const StyledInputBox = styled.div`
	position: relative;
	width: 100%;
`;
const StyledInputDateInput = styled.input`
	width: 100%;
	 opacity:0; 
	&::-webkit-calendar-picker-indicator{
		background-color:red;
		width: 100%;
		cursor: pointer;
	}
`;
export const StyledInputDateMask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: ${props => props.theme.color.text.main};
	background-repeat: no-repeat;
	background-position: calc(100% - 0.25em) 0.35em;
	background-size: 0.85em auto;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M70.3 13.8L40 66.3 9.7 13.8z' fill='%23000'%3E%3C/path%3E%3C/svg%3E");
	pointer-events: none;
	z-index:10;
`;
//Delivery Day component
const DeliveryDateBoxContainer = ({ title, dateMinMax, ...props }: IDeliveryDateBoxContainer & FieldHookConfig<string> & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>) => {
	const [field, meta] = useField({ ...props, type: 'date', });
	const dateText = useAppSelector(selectDateMonDayText)!;
	//formates the date for the output
	const fieldDate = new Date(field.value);
	const dayofDifferent: number = fieldDate.getDate() - new Date().getDate();
	const dayW: string = (dayofDifferent + 1 <= dateText.futureDays.length) ?
		dateText.futureDays[dayofDifferent] + ', ' : '';
	const dateElem: string = `${dayW}${fieldDate.getDate()} ${dateText.month[fieldDate.getMonth()]},
	 ${dateText.day[fieldDate.getDay()]}`;

	sessionStorage.setItem(field.name, field.value);

	return (<div>
		<StyledTitleDateBox>{title}</StyledTitleDateBox>
		<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}>
			<StyledInputBox>
				<StyledInputDateInput type="date" {...field} {...props} min={dateMinMax[0]} max={dateMinMax[1]} />
				<StyledInputDateMask  >{dateElem}</StyledInputDateMask>
			</StyledInputBox>
		</CartDateBox>
	</div>
	);
};

export default DeliveryDateBoxContainer;