import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../Button';

export interface ILoginMessage {
	message: string | undefined;
	onClickOk: () => void;
}

const StyledLoginMessageBox = styled.div`
	position: fixed;
	top: 50%; 
	left: 50%;
	transform:translate(-50%, -50%);
	border: 1px solid ${props => props.theme.color.darkBlue || '#fff'};
	background-color:${props => props.theme.color.bg.main || '#fff'};
	border-radius:4px;
	height: auto;
	width: auto;
	padding:50px;
	z-index:700 ;
	display: flex;
	flex-direction: column;
	align-items:center;

`;
const StyledMessage = styled.div`
	margin-bottom:20px;
	font-size:20px;
`;



const LoginMessage: FC<ILoginMessage> = ({ message, onClickOk }) => {


	//useEffect(() => { setTimeout(onClickOk, 5000) }, [])

	return (

		<StyledLoginMessageBox>
			<StyledMessage>{message}</StyledMessage>
			<Button onClick={onClickOk}> Ok </Button>
		</StyledLoginMessageBox>

	);
};

export default LoginMessage;