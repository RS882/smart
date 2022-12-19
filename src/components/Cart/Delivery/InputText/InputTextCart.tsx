import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFocusedField } from '../../../../utilits/hooks';
import { validateSelectIsEnpty } from '../../../../utilits/validators';
import CartDateBox from '../../CartDateBox';
import { InputAttrProps } from '../CartDeliveryForm';
import { StyledErrorMessage, StyledTitleDateBox } from '../SelectCity/SelectCityContainer';

interface IFiledTextCart {
	title: string;
	FormType?: string;
	isStorage?: boolean;
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
const FieldTextCart = ({ title, FormType = 'input', isStorage = true, ...props }: IFiledTextCart & InputAttrProps) => {



	const [field, meta] = useField({ ...props, validate: props.validate || validateSelectIsEnpty, });


	const [isFocus, onFocusFn] = useFocusedField(field.onBlur);

	const brdColor = meta.error && meta.touched ? '#F15152' : isFocus ? '#838688' : '';


	isStorage && sessionStorage.setItem(field.name, field.value);

	return (
		<div>
			<StyledTitleDateBox>{title}</StyledTitleDateBox>
			<CartDateBox bdColor={brdColor}
				heigthBox={FormType === 'input' ? '48px' : '96px'}>
				{FormType === 'input' ? <StyledInput {...field} {...props} {...onFocusFn} />
					: <StyledTextArea  {...field} {...props} {...onFocusFn} />}
			</CartDateBox>
			<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
		</div>
	);
};

export default React.memo(FieldTextCart);


