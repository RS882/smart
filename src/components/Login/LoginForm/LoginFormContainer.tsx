import React, { FC } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText } from '../../../redux/LanguageSlice';
import TitleForm from '../TitleForm';
import LoginForm from './LoginForm';

const LoginFormContainer: FC = (props) => {
	const loginStings = useAppSelector(selectLoginText);
	return (
		<div>
			<TitleForm title={loginStings?.title} />
			<LoginForm />

		</div>
	);
};

export default LoginFormContainer;


