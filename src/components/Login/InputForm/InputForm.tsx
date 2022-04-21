import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';

import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';
import EyeIconContainer from './InputStatusIcon/EyeIconContainer';

import RemembeMeContainer from '../LoginForm/RememeberMe/RemembeMeContainer';
import LoockIcon from './InputStatusIcon/LoockIcon';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
	value?: boolean | string;
	error?: string | undefined;
	touched?: boolean;
	validate?: (value: string) => string | undefined;
};

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


const InputForm: FC<IIptumForm> = (props) => {
	const isCheckbox: boolean = props.type === 'checkbox';
	const isPassword: boolean = props.name === 'password';

	const labelElem: JSX.Element = !isCheckbox ? <>{props.labeltext}</> :
		<RemembeMeContainer value={!!props.value} text={props.labeltext} />;
	const IconComponent = isPassword ? EyeIconContainer :
		!props.touched ? undefined :
			props.error ? ErrorTextIcon : RichtTextIcon;

	const inputColorBrd: string = !props.touched ? '#EAEAF0' :
		props.error ? '#F15152' : '#22A44E';


	return (
		<>
			<StyledLabel isCheckbox={isCheckbox} isPassword={isPassword}>
				<Styledlabeltext>{labelElem}</Styledlabeltext>
				<StyledInputBox isCheckbox={isCheckbox} >
					<StyledLooCkIcon $isPassword={isPassword} />
					<StyledInput name={props.name}
						type={props.type ? props.type : 'text'} $isPassword={isPassword}
						validate={props.validate} color={inputColorBrd} />
					<StyledInputStatusIcon color={inputColorBrd} Component={IconComponent} />
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessage name={props.name} />
		</>
	);
};

export default InputForm;