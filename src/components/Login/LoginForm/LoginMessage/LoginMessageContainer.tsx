import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { clearRegMessage, closePopUp, selectLoginMessage } from '../../../../redux/LoginSlice';
import { changeIsBodyLock } from '../../../../redux/ModalSlice';

import LoginMessage from './LoginMessage';



const LoginMessageContainer: FC = (props) => {
	const dispatch = useAppDispatch();
	const message = useAppSelector(selectLoginMessage);

	const onClickOk: () => void = () => {
		dispatch(clearRegMessage());
		dispatch(closePopUp());
		dispatch(changeIsBodyLock(false));
	};



	return (

		<LoginMessage message={message} onClickOk={onClickOk} />

	);
};



export default React.memo(LoginMessageContainer);