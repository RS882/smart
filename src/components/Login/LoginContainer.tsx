import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { closePopUp, openLoginBox, openRegBox, selectIsLoginBox, selectIsRegBox, selectIsSubmit } from '../../redux/LoginSlice';
import Modal from '../Modal/Modal';
import ClosePopUpContainer from './ClosePopUpContainer';
import { useAppDispatch } from './../../redux/hooks';
import { changeIsBodyLock } from '../../redux/ModalSlice';
import LoginFormContainer from './LoginForm/LoginFormContainer';

interface ILoginMEnuShow {
	isOpen?: boolean;

}

const StyledLoginWrapper = styled.div`
	position:fixed;
	top: 0;
	left: 0;
	width:100vw;
	height: 100vh;
	z-index:700;
	

`;

const StyledComponetBox = styled.div<ILoginMEnuShow>`
	position: absolute;
	top: 100%; 
	left: 50%;
	transform:${props => props.isOpen ? `translate(-50%, -100%)` : `translate(-50%, 0%)`};
	max-width:370px;
	width:100%;
	overflow-y:auto;
	max-height:100vh;
	background-color:${props => props.theme.color.bg.main || '#fff'};
	border-radius:4px;
	transition: transform 0.5s ease 0s;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		top:${props => props.isOpen ? '50%' : `100%`}; 
		transform:${props => props.isOpen ? `translate(-50%, -50%)` : `translate(-50%, 0%)`};
		transition: top 0.5s ease 0s;
	};
`;

const LoginContainer: FC = (props) => {

	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const isLoginBox = useAppSelector(selectIsLoginBox);
	const isRegBox = useAppSelector(selectIsRegBox);
	const isSubmit = useAppSelector(selectIsSubmit);
	useEffect(() => {
		dispatch(openLoginBox(true));
		setIsOpen(true);
	}, []);


	const onClickClosePopUp = () => {
		setIsOpen(false);
	};
	const goToReg = () => {
		if (isLoginBox) {
			dispatch(openRegBox(true))
		} else if (isRegBox) {
			dispatch(openLoginBox(true))
		}
	};

	const closeWрhenTransitionEnd = () => {
		if (!isOpen) {
			dispatch(closePopUp());
			dispatch(changeIsBodyLock(false));
		}
	}



	return (
		<>
			<StyledLoginWrapper >
				<StyledComponetBox isOpen={isOpen} onTransitionEnd={closeWрhenTransitionEnd}>
					<LoginFormContainer goToReg={goToReg} isLogBox={isLoginBox} isRegBox={isRegBox} />
					<ClosePopUpContainer onClickClosePopUp={isSubmit ? () => { } : onClickClosePopUp} />
				</StyledComponetBox>
			</StyledLoginWrapper>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</>
	);
};

export default LoginContainer;