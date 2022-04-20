import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';

import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';
import EyeIconContainer from './InputStatusIcon/EyeIconContainer';
import RememberMeFalse from '../LoginForm/RememeberMe/RememberMe';
import RemembeMeContainer from '../LoginForm/RememeberMe/RemembeMeContainer';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
};

const StyledLabel = styled.label<{ isCheckbox: boolean, isPassword: boolean, }>`
	display: flex;
	flex-direction:column;
	line-height: 100%;
	margin-bottom: ${props => props.isPassword ? '10px' : '20px'};
	cursor: ${props => props.isCheckbox ? 'pointer' : 'auto'};
`;

const StyledInput = styled(Field) <IIptumForm>`
	flex: 1 1 100%;
	height: 48px;
	border: 1px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-right: none;
	border-radius: 4px 0 0 4px;
`;
const Styledlabeltext = styled.div`
	margin-bottom: 8px;
`;
const StyledInputBox = styled.div<{ isCheckbox: boolean, }>`
	display: ${props => props.isCheckbox ? 'none' : 'flex'};
`;
const StyledInputStatusIcon = styled(InputStatusIcon).attrs(props => ({
	color: props.theme.color.cardBorder || '#EAEAF0',
}
))`
	`;


const InputForm: FC<IIptumForm> = (props) => {
	const isCheckbox: boolean = props.type === 'checkbox';
	const isPassword: boolean = props.name === 'password';

	const labelElem: JSX.Element = !isCheckbox ? <>{props.labeltext}</> :
		<RemembeMeContainer text={props.labeltext} />;


	return (
		<>
			<StyledLabel isCheckbox={isCheckbox} isPassword={isPassword}>
				<Styledlabeltext>{labelElem}</Styledlabeltext>
				<StyledInputBox isCheckbox={isCheckbox} >
					<StyledInput name={props.name} type={props.type ? props.type : 'text'} />
					<StyledInputStatusIcon Component={EyeIconContainer} />
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessage name={props.name} />
		</>
	);
};

export default InputForm;