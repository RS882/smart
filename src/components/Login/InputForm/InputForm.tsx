import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorTextIcon from './InputStatusIcon/ErrorTextIcon';
import InputStatusIcon from './InputStatusIcon/InputStatusIcon';
import RichtTextIcon from './InputStatusIcon/RichtTextIcon';


interface IIptumForm {
	labeltext?: string;
	name: string;
	type?: string;
};

const StyledLabel = styled.label`
	display: flex;
	flex-direction:column;
	line-height: 100%;

`;

const StyledInput = styled(Field)`
	flex: 1 1 100%;
	height: 48px;
	border: 1px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-right:none;
	border-radius:4px 0 0 4px;
`;
const Styledlabeltext = styled.div`
	margin-bottom:8px;
`;
const StyledInputBox = styled.div`
	display:flex;
`;
const StyledInputStatusIcon = styled(InputStatusIcon).attrs(props => ({
	color: props.theme.color.cardBorder || '#EAEAF0',
}
))``;


const InputForm: FC<IIptumForm> = (props) => {
	return (
		<>
			<StyledLabel htmlFor={props.name}>
				<Styledlabeltext>{props.labeltext}</Styledlabeltext>
				<StyledInputBox>
					{props.type !== 'checkbox' ? <StyledInput name={props.name} type={props.type ? props.type : 'text'} /> : null}
					{props.type !== 'checkbox' ? <StyledInputStatusIcon Component={RichtTextIcon} /> : null}
				</StyledInputBox>
			</StyledLabel>
			<ErrorMessage name={props.name} />
		</>
	);
};

export default InputForm;