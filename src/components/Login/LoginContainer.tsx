import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { closePopUp, selectIsLoginBox, selectIsRegBox } from '../../redux/LoginSlice';
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
`;

const StyledComponetBox = styled.div`
	position: relative;
	max-width:370px;
	width:100%;
	height: 300px;
	background-color:${props => props.theme.color.bg.main || '#fff'};
	border-radius:4px;
	

`

const LoginContainer: FC = (props) => {

	const dispatch = useAppDispatch();
	// const isLoginBox = useAppSelector(selectIsLoginBox);
	// const isRegBox = useAppSelector(selectIsRegBox);
	const [isLoginBox, setIsLoginBox] = useState(true);
	const [isRegBox, setIsRegBox] = useState(false);

	const onClickClosePopUp = () => {
		dispatch(closePopUp());
		dispatch(changeIsBodyLock(false));
	}

	return (
		<>
			<StyledLoginWrapper>
				<StyledComponetBox >
					{isLoginBox ? <LoginFormContainer /> : null}
					<ClosePopUpContainer onClickClosePopUp={onClickClosePopUp} />
				</StyledComponetBox>
			</StyledLoginWrapper>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</>
	);
};

export default LoginContainer;