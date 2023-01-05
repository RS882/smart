import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectFavotitsText } from '../../redux/LanguageSlice';
import { openPopUp } from '../../redux/LoginSlice';
import { changeIsBodyLock } from '../../redux/ModalSlice';
import Button from '../Button';
import { useAppDispatch } from './../../redux/hooks';


const StyledLoginInFavoritesPageBox = styled.div`
	padding:30px;
	height:100%;
	display: flex;
	flex-direction:column;
	justify-content:space-between;
`;

const StyledText = styled.div`
	font-weight: 700;
`;
const StyledLoginBtn = styled.div`
	
`;

const LoginInFavoritesPage = () => {

	const dispatch = useAppDispatch();
	const text = useAppSelector(selectFavotitsText);

	const onClickLogin = () => {
		dispatch(openPopUp());
		dispatch(changeIsBodyLock(true));
	};


	return (
		<StyledLoginInFavoritesPageBox>
			<StyledText>{text.loginText}</StyledText>
			<StyledLoginBtn><Button width='99px' onClick={onClickLogin}>{text.btnText}</Button></StyledLoginBtn>
		</StyledLoginInFavoritesPageBox>
	);
};

export default LoginInFavoritesPage;