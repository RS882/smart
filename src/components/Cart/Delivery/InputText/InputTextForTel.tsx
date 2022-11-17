import { ErrorMessage, useField } from 'formik';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { validateSelectIsEnpty } from '../../../../utilits/validators';
import CartDateBox from '../../CartDateBox';
import { InputAttrProps } from '../CartDeliveryForm';
import { StyledErrorMessage, StyledTitleDateBox } from '../SelectCity/SelectCityContainer';

interface IFiledTextCart {
	title: string;
	FormType?: string;
};

const StyledInput = styled.input`
	width:100%;
	height: 100%;
	&::placeholder{
		color: ${props => props.theme.color.text.second || '#838688'};
		margin-left:20px;
	}
`;
const StyledTextArea = styled.textarea`
	width:100%;
	height: 100%;
	&::placeholder{
		color: ${props => props.theme.color.text.second || '#838688'};
		margin-left:20px;
	}
`;


// Components for text output
const FieldTextCartForTel = ({ title, FormType = 'input', ...props }: IFiledTextCart & InputAttrProps) => {
	const [field, meta, helpers] = useField({ ...props, validate: props.validate || validateSelectIsEnpty });
	// console.log(field);
	// console.log(meta);
	// console.log(helpers);
	// console.log(props);
	const TELNUMBERSHABLON: string = '+49(___) ___-__-__';


	// const [step, setStep] = useState(0);
	const numberPosition: number[] = [4, 5, 6, 9, 10, 11, 13, 14, 16, 17,];

	//const [cursorPosition, setCursorPosition] = useState(numberPosition[step]);
	const [isClick, setIsClick] = useState(false);

	const setCursorPosition = (elem: EventTarget & HTMLInputElement, position: number = 4) =>
		setTimeout(() => elem.selectionStart = elem.selectionEnd = position);

	useEffect(() => {
		isClick && !field.value && helpers.setValue(TELNUMBERSHABLON);
	}, [isClick, field.value])


	const onClickTelField = (e: React.PointerEvent<HTMLInputElement>) => {
		const target = e.currentTarget;
		isClick || setIsClick(true);
		!field.value && setCursorPosition(target);
		field.value === TELNUMBERSHABLON && setCursorPosition(target);
	};

	const onChangeTelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {

		const isElemNumber = (num: string) => /\d/.test(num);

		const target = e.currentTarget;

		field.value === TELNUMBERSHABLON && setCursorPosition(target);

		const telTextArr = target.value.split('');

		const getNextCursorPosition = (arr: string[], numPosition: number[]) => {
			const nextCursorPosition = arr.findIndex((e, i) => numPosition.includes(i) && !isElemNumber(e));
			const nextCursorPositionIndex = numPosition.findIndex(e => e === nextCursorPosition);
			console.log(numberPosition[nextCursorPositionIndex]);

			return numberPosition[nextCursorPositionIndex];
		};

		//console.log();

		const res = telTextArr.map((e, i) => {
			if (i === 0) return '+';
			if (i === 1 && !isElemNumber(e)) return '4';
			if (i === 2 && !isElemNumber(e)) return '9';
			if (numberPosition.includes(i) && !isElemNumber(e)) return '_';
			if (i === 3) return '(';
			if (i === 7) return ')';
			if (i === 8) return ' ';
			if ([12, 15,].includes(i)) return '-';
			if (i > 17) return null;
			return e
		}).join('');

		helpers.setValue(res);
		field.value !== TELNUMBERSHABLON && setCursorPosition(target, getNextCursorPosition(telTextArr, numberPosition));

		// const getTelIfLengthIsOk = (value: string): string => {
		// 	if (/^\+[\d]{2}\([\d]{3}\)\s[\d]{3}-[\d]{2}-[\d]{2}/.test(value)) {
		// 		//helpers.setError(undefined);
		// 		return value
		// 	};
		// 	if (!/[_()-\d\+\s]{18}/.test(value)) {
		// 		helpers.setError('An unacceptable symbol');
		// 		return value;
		// 	};



		// 	const res = value
		// 	return res;
		// };

		// let res: string;
		// if (telTextArr.length < shablonLength) {
		// 	res = '+49(___) ___-__-__'
		// 	setTimeout(() => { target.selectionStart = target.selectionEnd = numberPosition[4]; });
		// } else
		// 	if (telTextArr.length === shablonLength) {

		// 		console.log('1');

		// 		res = getTelIfLengthIsOk(target.value)
		// 		// 	} else
		// 		// 		if (telTextArr.length > shablonLength) {
		// 		// 			res = target.value;
		// 	} else {

		// 		res = target.value;
		// 	};


		// //console.log(/^\+[\d]{2}\([\d_]{3}\)\s[\d_]{3}-[\d_]{2}-[\d_]{2}/.test('+49(123) 33-53-52'));
		// //console.log(/[_()-\d\+\s]{18}/.test('+49(___) _d_-__-__'));


	}


	//sessionStorage.setItem(field.name, field.value);
	return (
		<div>
			<StyledTitleDateBox>{title}</StyledTitleDateBox>
			<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}
				heigthBox={FormType === 'input' ? '48px' : '96px'}>
				{FormType === 'input' ? <StyledInput  {...field} {...props} onClick={onClickTelField}
					onChange={onChangeTelNumber}
				/> : <StyledTextArea  {...field} {...props} />}
			</CartDateBox>
			<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
		</div>
	);
};

export default React.memo(FieldTextCartForTel);