import React, { FC } from 'react';
import TitleForm from '../TitleForm';
import LoginForm from './LoginForm';

const LoginFormContainer: FC = (props) => {
	return (
		<div>
			<TitleForm title={'Lorem ipsum dolor.'} />
			<LoginForm />

		</div>
	);
};

export default LoginFormContainer;


