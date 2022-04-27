import React, { FC } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText, selectRegText } from '../../../redux/LanguageSlice';
import { ILoginBoxStrings, IRegBoxStrings } from '../../../types/LocalizationTypes';
import TitleForm from '../TitleForm';
import LoginForm, { ILoginForm } from './LoginForm';



const LoginFormContainer: FC<ILoginForm> = (props) => {
	const loginStrings = useAppSelector(selectLoginText);
	const regStrings = useAppSelector(selectRegText);
	const title: string | undefined = props.isLogBox ? loginStrings?.title : props.isRegBox ? regStrings?.title : undefined;


	const textString: IRegBoxStrings | ILoginBoxStrings | null = props.isLogBox ? loginStrings : props.isRegBox ? regStrings : null;

	return (
		<div>
			<TitleForm title={title} />
			<LoginForm goToReg={props.goToReg} textString={textString} isLogBox={props.isLogBox} isRegBox={props.isRegBox} />

		</div>
	);
};

export default LoginFormContainer;


