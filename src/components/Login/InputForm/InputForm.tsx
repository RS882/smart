import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';

import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';
import EyeIconContainer from './InputStatusIcon/EyeIconContainer';
import RememberMeFalse from '../LoginForm/RememeberMe/RememberMe';
import RemembeMeContainer from '../LoginForm/RememeberMe/RemembeMeContainer';
import LoockIcon from './InputStatusIcon/LoockIcon';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
	value?: boolean | string;
};

const StyledLabel = styled.label<{ isCheckbox: boolean, isPassword: boolean, }>`
	display: flex;
	flex-direction:column;
	line-height: 100%;
	margin-bottom: ${props => props.isPassword ? '10px' : '20px'};
	cursor: ${props => props.isCheckbox ? 'pointer' : 'auto'};
`;

const StyledInput = styled(Field) <{ $isPassword: boolean, }>`
	flex: 1 1 100%;
	height: 48px;
	padding-left:20px;
	border: 1px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-right: none;
	border-left:${props => props.$isPassword ? 'none' : ''} ;
	border-radius:${props => props.$isPassword ? '0' : '4px 0 0 4px'} ;
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
		<RemembeMeContainer value={!!props.value} text={props.labeltext} />;

	const IconComponent = isPassword ? EyeIconContainer : undefined;


	return (
		<>
			<StyledLabel isCheckbox={isCheckbox} isPassword={isPassword}>
				<Styledlabeltext>{labelElem}</Styledlabeltext>
				<StyledInputBox isCheckbox={isCheckbox} >
					{isPassword ? <LoockIcon /> : null}
					<StyledInput name={props.name}
						type={props.type ? props.type : 'text'} $isPassword={isPassword} />
					<StyledInputStatusIcon Component={IconComponent} />
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessage name={props.name} />
		</>
	);
};

export default InputForm;