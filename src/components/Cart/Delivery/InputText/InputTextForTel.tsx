import { ErrorMessage, useField } from 'formik';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { validateSelectIsEnpty } from '../../../../utilits/validators';
import CartDateBox from '../../CartDateBox';
import { InputAttrProps } from '../CartDeliveryForm';
import { StyledErrorMessage, StyledTitleDateBox } from '../SelectCity/SelectCityContainer';

interface IFiledTextCart {
	title: string;

};

const StyledInput = styled.input`
	width:100%;
	height: 100%;
	&::placeholder{
		color: ${props => props.theme.color.text.second || '#838688'};
		margin-left:20px;
	}
`;
const StyledHelpers = styled.div`
	font-size:12px;
	font-weight:700;
	color: ${props => props.theme.color.text.second || '#838688'};
`;


// Components for text output For a telephone number
const FieldTextCartForTel = ({ title, ...props }: IFiledTextCart & InputAttrProps) => {
	const [field, meta, helpers] = useField({ ...props, validate: props.validate || validateSelectIsEnpty });
	// Filling template 
	const TELNUMBERSHABLON: string = '+49(';
	// Was there a click on the input field
	const [isClick, setIsClick] = useState(false);
	//We set up the position of the course in Input Element The default position -4 
	const setCursorPosition = (elem: EventTarget & HTMLInputElement, position: number = 4) =>
		setTimeout(() => elem.selectionStart = elem.selectionEnd = position);

	useEffect(() => {
		// If there was a click and the field is empty - fills it with a template
		isClick && !field.value && helpers.setValue(TELNUMBERSHABLON);
	}, [isClick, field.value]);

	const onClickTelField = (e: React.PointerEvent<HTMLInputElement>) => {
		const target = e.currentTarget;
		setIsClick(true);
		// The field is empty or the value of the template set the position of the cursor by default
		!field.value && setCursorPosition(target);
		field.value === TELNUMBERSHABLON && setCursorPosition(target);
	};

	const onChangeTelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Check -is the symbol the symbol is
		const isElemNumber = (num: string) => /\d/.test(num);
		const target = e.currentTarget;
		// We get an array of elements of the values that are numbers
		const onlyNumber = target.value.split('').filter(e => isElemNumber(e));

		const res = new Array(18).fill('_').map((e, i) => {
			// We get an array of template elements (+49(___) ___-__-__ )
			if (i === 0) return '+';
			if (i === 3) return '(';
			if (i === 7) return ')';
			if (i === 8) return ' ';
			if ([12, 15,].includes(i)) return '-';
			if (i > 17) return null;
			return e
		}).map(e => {
			const arrNumb = onlyNumber;
			// replace '_' sequentially with numbers from onlyNumber
			if (e === '_') {
				if (arrNumb.length === 0) return e;
				return arrNumb.splice(0, 1)[0];
			}
			return e;
		}).join('');
		// We set the value of the field
		helpers.setValue(res);
		// set the cursor in the desired position
		const cursorPosition: number = res.indexOf('_');
		cursorPosition > 0 ? setCursorPosition(target, cursorPosition) : setCursorPosition(target, target.selectionStart! + 1)

	};

	sessionStorage.setItem(field.name, field.value);
	return (
		<div>
			<StyledTitleDateBox>{title}</StyledTitleDateBox>
			<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''} heigthBox='48px' >
				<StyledInput  {...field} {...props} onClick={onClickTelField} onChange={onChangeTelNumber} />
			</CartDateBox>
			<StyledHelpers>Use only numbers</StyledHelpers>
			<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
		</div>
	);
};

export default React.memo(FieldTextCartForTel);