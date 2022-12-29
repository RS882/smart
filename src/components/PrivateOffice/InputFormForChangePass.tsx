import React, { FC } from 'react';
import { validatePassword } from '../../utilits/validators';
import InputForm from '../Login/InputForm/InputForm';
import styled from 'styled-components';


interface IFormForChangePass {
	text?: string;
	name: string;

};
const StyledFormForChangePassWrapper = styled.div`
	display: flex;
`;

const StyledInputForm = styled.div`
	flex: 1 0 100%;
`;


const InputFormForChangePass: FC<IFormForChangePass> = ({ text, name }) => {

	return (
		<StyledFormForChangePassWrapper>
			<StyledInputForm>
				<InputForm labeltext={text} name={name} type={'password'} validate={validatePassword} isStatusIcon={true} />
			</StyledInputForm>
		</StyledFormForChangePassWrapper>
	);
};

export default React.memo(InputFormForChangePass);