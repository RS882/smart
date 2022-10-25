import { useField } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { validateSelectIsEnpty } from '../../../../utilits/validators';
import CartDateBox from '../../CartDateBox';
import { InputAttrProps } from '../CartDeliveryForm';
import { StyledTitleDateBox } from '../SelectCity/SelectCityContainer';

interface IFiledTextCart {
	title: string;
	FormType?: string;
};

const StyledInput = styled.input`
	width:100%;
	height: 100%;
`;
const StyledTextArea = styled.textarea`
	width:100%;
	height: 100%;
`;


// Components for text output
const FieldTextCart = ({ title, FormType = 'input', ...props }: IFiledTextCart & InputAttrProps) => {
	const [field, meta] = useField({ ...props, validate: props.validate || validateSelectIsEnpty });
	sessionStorage.setItem(field.name, field.value);
	return (
		<div>
			<StyledTitleDateBox>{title}</StyledTitleDateBox>
			<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}
				heigthBox={FormType === 'input' ? '48px' : '96px'}>
				{FormType === 'input' ? <StyledInput  {...field} {...props} /> : <StyledTextArea  {...field} {...props} />}
			</CartDateBox>
		</div>
	);
};

export default React.memo(FieldTextCart);