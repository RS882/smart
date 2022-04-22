import { ErrorMessage, Field, FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';

import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';
import EyeIconContainer from './InputStatusIcon/EyeIconContainer';

import RemembeMeContainer from '../LoginForm/RememeberMe/RemembeMeContainer';
import LoockIcon from './InputStatusIcon/LoockIcon';
import ErrorMessageContainer from './ErrorMessageContainer';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
	validate?: (value: string) => string | undefined;
	validateTel?: (value: string) => string | undefined;
};

interface IFormValues {
	userEmailFild: string;
	password: string;
	renemberMe: boolean;
}

const StyledLabel = styled.label<{ isCheckbox: boolean, isPassword: boolean, }>`
	display: flex;
	flex-direction:column;
	line-height: 100%;
	margin-bottom: ${props => props.isPassword ? '10px' : '20px'};
	cursor: ${props => props.isCheckbox ? 'pointer' : 'auto'};
`;

const StyledInput = styled(Field) <{ $isPassword: boolean, color: string }>`
	flex: 1 1 100%;
	display: block;
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
	display: ${props => props.isCheckbox ? 'none' : 'flex'};
	width: 100%;
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
	width: 100%;
	height: 100%;
`;
const StyledInputWrapper = styled.div`
	position: relative;
`


const InputForm = (props: IIptumForm & FormikProps<IFormValues>) => {

	const isCheckbox: boolean = props.type === 'checkbox';
	const isPassword: boolean = props.name === 'password';
	const labelElem: JSX.Element = !isCheckbox ? <>{props.labeltext}</> :
		<RemembeMeContainer value={!!props.values.renemberMe} text={props.labeltext} />;

	type ErrorsKey = keyof typeof props.errors;
	type TouchedKey = keyof typeof props.touched;

	const IconComponent = isPassword ? EyeIconContainer :
		!props.touched[props.name as TouchedKey] ? undefined :
			props.errors[props.name as ErrorsKey] ? ErrorTextIcon : RichtTextIcon;

	const inputColorBrd: string = !props.touched[props.name as TouchedKey] ? '#EAEAF0' :
		props.errors[props.name as ErrorsKey] ? '#F15152' : '#22A44E';

	const formatPhoneNumber = (value: any) => {
		if (props.validateTel && !!props.validateTel(value) === false) {
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

	return (
		<StyledInputWrapper>
			<StyledLabel isCheckbox={isCheckbox} isPassword={isPassword}>
				<Styledlabeltext>{labelElem}</Styledlabeltext>
				<StyledInputBox isCheckbox={isCheckbox} >
					<StyledLooCkIcon $isPassword={isPassword} />
					<StyledInput name={props.name}
						type={props.type ? props.type : 'text'} $isPassword={isPassword}
						validate={props.validate} color={inputColorBrd}
						onBlur={(event: any) => {
							if (props.name === 'userEmailFild') {
								const formatted = formatPhoneNumber(props.values.userEmailFild);
								props.setFieldValue(props.name, formatted);
							}
							props.handleBlur(event);
						}}
					/>
					<StyledInputStatusIcon color={inputColorBrd} Component={IconComponent} />
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessageContainer name={props.name} />
		</StyledInputWrapper>
	);
};

export default InputForm;