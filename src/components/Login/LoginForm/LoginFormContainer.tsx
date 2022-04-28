import React, { FC } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText, selectRegText } from '../../../redux/LanguageSlice';

import TitleForm from '../TitleForm';
import LoginForm, { ILoginForm } from './LoginForm';



const LoginFormContainer: FC<ILoginForm> = (props) => {
	const loginStrings = useAppSelector(selectLoginText);
	const regStrings = useAppSelector(selectRegText);
	const title: string | undefined = props.isLogBox ? loginStrings?.title : props.isRegBox ? regStrings?.title : '';

	return (
		<div>
			<TitleForm title={title} />
			<LoginForm goToReg={props.goToReg} isLogBox={props.isLogBox} isRegBox={props.isRegBox} />

		</div>
	);
};

export default LoginFormContainer;


