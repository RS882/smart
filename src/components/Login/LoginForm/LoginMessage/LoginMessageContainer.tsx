import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { clearRegMessage, closePopUp, selectLoginMessage } from '../../../../redux/LoginSlice';
import { changeIsBodyLock } from '../../../../redux/ModalSlice';
import Button from '../../../Button';

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



const LoginMessageContainer: FC = (props) => {
	const dispatch = useAppDispatch();
	const message = useAppSelector(selectLoginMessage);


	const onClickOk: () => void = () => {
		dispatch(clearRegMessage());
		dispatch(closePopUp());
		dispatch(changeIsBodyLock(false));
	};

	useEffect(() => { setTimeout(onClickOk, 5000) }, [])

	return (

		<StyledLoginMessageBox>
			<StyledMessage>{message}</StyledMessage>
			<Button onClick={onClickOk}> Ok </Button>
		</StyledLoginMessageBox>

	);
};

export default LoginMessageContainer;