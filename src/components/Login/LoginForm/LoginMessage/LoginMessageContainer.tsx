import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeisPasswordChange, clearRegMessage, closePopUp, selectIsPasswordChange, selectLoginMessage, selectUserData } from '../../../../redux/LoginSlice';
import { changeIsBodyLock } from '../../../../redux/ModalSlice';
import { loginUser } from '../../../../redux/Thunk/thunkLogin';

import LoginMessage from './LoginMessage';



const LoginMessageContainer: FC = (props) => {
	const dispatch = useAppDispatch();
	const message = useAppSelector(selectLoginMessage);
	const isPasswordChage = useAppSelector(selectIsPasswordChange);
	const user = useAppSelector(selectUserData);

	const onClickOk: () => void = () => {
		dispatch(clearRegMessage());
		dispatch(closePopUp());
		dispatch(changeIsBodyLock(false));
		isPasswordChage && dispatch(loginUser({
			userEmailFild: user.email,
			password: user.password,
			renemberMe: true,
		}));
		isPasswordChage && dispatch(changeisPasswordChange(false));
	};



	return (

		<LoginMessage message={message} onClickOk={onClickOk} />

	);
};



export default React.memo(LoginMessageContainer);