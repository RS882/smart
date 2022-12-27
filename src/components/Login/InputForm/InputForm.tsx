import { ErrorMessage, Field, FormikProps, useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';

import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';
import EyeIconContainer from './InputStatusIcon/EyeIconContainer';

import RemembeMeContainer from '../LoginForm/RememeberMe/RemembeMeContainer';
import LoockIcon from './InputStatusIcon/LoockIcon';
import ErrorMessageContainer from './ErrorMessageContainer';
import { InputAttrProps } from '../../Cart/Delivery/CartDeliveryForm';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
	validate?: (value: string) => string | undefined;
	validateTel?: (value: string) => string | undefined;
};


const StyledLabel = styled.label<{ isCheckbox: boolean, isPassword: boolean, }>`
	display: flex;
	flex-direction:column;
	line-height: 100%;
	margin-bottom: ${props => props.isPassword ? '10px' : '20px'};
	cursor: ${props => props.isCheckbox ? 'pointer' : 'auto'};
`;

const StyledInput = styled(Field) <{ $isPassword: boolean, color: string }>`

	height: 48px;
	padding-left: ${props => props.$isPassword ? '55px' : '20px'};
	border: 1px solid ${props => props.color};
	border-right: none;
	border-radius:4px 0 0 4px;

`;
const Styledlabeltext = styled.div`
	margin-bottom: 8px;
`;
const StyledInputBox = styled.div<{ isCheckbox: boolean, }>`
	display: ${props => props.isCheckbox ? 'none' : 'grid'};
	grid-template-columns: calc(100% - 40px) 40px;
	grid-template-rows:1fr;
	position:relative;
`;
const StyledInputStatusIcon = styled(InputStatusIcon).attrs(props => ({
	color: props.color,
}
))`

	`;
const StyledLooCkIcon = styled(LoockIcon) <{ $isPassword: boolean, }>`
	display: ${props => props.$isPassword ? 'flex' : 'none'};
	position:absolute;
	top: 0;
	left: 0;
	height: 100%;
`;
const StyledInputWrapper = styled.div`
	position: relative;
`


const InputForm = ({ type = 'text', labeltext, validateTel, ...props }: IIptumForm & InputAttrProps) => {

	const [field, meta, helpers] = useField(props);

	const isCheckbox: boolean = type === 'checkbox';
	const isPassword: boolean = field.name === 'password';
	const isChecked: boolean = !!field.value;

	const labelElem: JSX.Element = !isCheckbox ? <>{labeltext}</> : <RemembeMeContainer value={isChecked} text={labeltext} />;


	const IconComponent = isPassword ? EyeIconContainer : !meta.touched ? undefined : meta.error ? ErrorTextIcon : RichtTextIcon;

	const inputColorBrd: string = !meta.touched ? '#EAEAF0' : meta.error ? '#F15152' : '#22A44E';

	const formatPhoneNumber = (value: any) => {
		if (validateTel && !!validateTel(value) === false) {
			const res = value.split('')
			const arrMod = (arr: string[], arrModPos: number[], modElem = '-') => arrModPos.forEach(e => arr.splice(e, 0, modElem));
			arrMod(res, [0], '(');
			arrMod(res, [4], ')');
			arrMod(res, [5], ' ');
			arrMod(res, [9, 12]);
			return res.join('');
		}
		return value;
	};

	const onBlurFormatTel = (event: React.FocusEvent<any, Element>) => {
		if (field.name === 'userEmailFild' || field.name === 'userRegTelNumber') {
			const formatted = formatPhoneNumber(field.value);
			helpers.setValue(formatted);
		};
		field.onBlur(event)
	};


	return (
		<StyledInputWrapper>
			<StyledLabel isCheckbox={isCheckbox} isPassword={isPassword}>
				<Styledlabeltext>{labelElem}</Styledlabeltext>
				<StyledInputBox isCheckbox={isCheckbox} >
					<StyledLooCkIcon $isPassword={isPassword} />
					<StyledInput {...field} {...props} type={type} $isPassword={isPassword}
						color={inputColorBrd} onBlur={onBlurFormatTel} checked={isChecked} />
					<StyledInputStatusIcon color={inputColorBrd} Component={IconComponent} />
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessageContainer name={field.name} />
		</StyledInputWrapper>
	);
};

export default InputForm;