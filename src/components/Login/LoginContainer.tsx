import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { closePopUp, selectIsSubmit } from '../../redux/LoginSlice';
import Flex from '../Flex';
import Modal from '../Modal/Modal';
import ClosePopUpContainer from './ClosePopUpContainer';
import { useAppDispatch } from './../../redux/hooks';
import { changeIsBodyLock } from '../../redux/ModalSlice';
import LoginFormContainer from './LoginForm/LoginFormContainer';



const StyledLoginWrapper = styled(Flex)`
	position:fixed;
	top: 0;
	left: 0;
	width:100vw;
	height: 100vh;
	z-index:700;
	align-items:flex-end;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		align-items:center;
	};
`;

const StyledComponetBox = styled.div`
	position: relative;
	max-width:370px;
	width:100%;
	overflow-y:auto;
	max-height:100vh;
	background-color:${props => props.theme.color.bg.main || '#fff'};
	border-radius:4px;
`;

const LoginContainer: FC = (props) => {

	const dispatch = useAppDispatch();

	const [isLoginBox, setIsLoginBox] = useState(true);
	const [isRegBox, setIsRegBox] = useState(false);
	const isSubmit = useAppSelector(selectIsSubmit)

	const onClickClosePopUp = () => {
		dispatch(closePopUp());
		dispatch(changeIsBodyLock(false));
	};

	const goToReg = () => {
		if (isLoginBox) {
			setIsLoginBox(false);
			setIsRegBox(true);
		} else if (isRegBox) {
			setIsRegBox(false);
			setIsLoginBox(true);
		}

	};

	return (
		<>
			<StyledLoginWrapper>
				<StyledComponetBox >
					<LoginFormContainer goToReg={goToReg} isLogBox={isLoginBox} isRegBox={isRegBox} />
					<ClosePopUpContainer onClickClosePopUp={isSubmit ? () => { } : onClickClosePopUp} />
				</StyledComponetBox>
			</StyledLoginWrapper>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</>
	);
};

export default LoginContainer;