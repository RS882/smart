import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText, selectRegText } from '../../../redux/LanguageSlice';
import { validateEmail, validateEmailOrTel, validateLength, validatePassword, validateTel, validateTelAndForamt } from '../../../utilits/validators';
import Button from '../../Button';
import InputForm from '../InputForm/InputForm';
import { changeIsSubmit, selectIsShowPassword, setLoginSuccess } from './../../../redux/LoginSlice';
import { useAppDispatch } from './../../../redux/hooks';
import { ArrowFn } from '../../../types/fnTypes';
import UserAgreementBtn from './RegForm/UserAgreementBtn';


export interface ILoginForm {
	goToReg: ArrowFn;
	isLogBox: boolean;
	isRegBox: boolean;

}

export interface ValuesLog {
	userEmailFild?: string;
	password?: string;
	renemberMe?: boolean;
	userRegName?: string;
	userRegEmail?: string;
	userRegTelNumber?: string;

}

const StyledForm = styled(Form)`
	
	margin: 30px 20px 0 ;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 20px 20px 0;
	};
`;

export const StyledForgotPasswordBtn = styled.button`
	margin-bottom:20px;
	color:${props => props.theme.color.blue || '#4878A6'};
	transition: color 0.3s ease 0s;
	&:hover{
		color:${props => props.theme.color.darkBlue || '#2A5275'};
	};
`;
const StyledSubmiiBtn = styled(Button)`
	margin-bottom:26px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-bottom:20px;
	};
`;
const StyledGotoRegBtn = styled(StyledForgotPasswordBtn)`
	display:flex;
	justify-content:center;
	width: 100%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-bottom:30px;
	};
`;

const LoginForm: FC<ILoginForm> = (props) => {

	const dispatch = useAppDispatch();
	const loginStings = useAppSelector(selectLoginText);
	const regStrings = useAppSelector(selectRegText);
	const isShowPassword = useAppSelector(selectIsShowPassword);



	const onLoginSubmit = (isLogin: boolean, isRegistr: boolean) =>
		(values: ValuesLog, { setSubmitting, resetForm }: FormikHelpers<ValuesLog>) => {
			dispatch(changeIsSubmit(true))
			//---------------------
			if (isLogin) {
				const logValues = {
					userEmailFild: values.userEmailFild,
					password: values.password,
					renemberMe: values.renemberMe,
				};
				console.log('Login');
				console.log(logValues);
			};
			if (isRegistr) {
				const regValues = {
					userRegName: values.userRegName,
					userRegEmail: values.userRegEmail,
					userRegTelNumber: values.userRegTelNumber,
					password: values.password,
				};
				console.log('Registration')
				console.log(regValues);

			};

			//---------------------
			setTimeout(() => {
				dispatch(setLoginSuccess())
				resetForm()
				setSubmitting(false)
				dispatch(changeIsSubmit(false))
			}, 2000)
		};

	const choseLogOrRegText = (logText: string | undefined, regText: string | undefined,
		isLog = props.isLogBox, isReg = props.isRegBox): string | undefined =>
		isLog && !isReg ? logText : !isLog && isReg ? regText : '';

	const initialValues: ValuesLog = {
		userEmailFild: '',
		password: '',
		renemberMe: true,
		userRegName: '',
		userRegEmail: '',
		userRegTelNumber: '',
	};

	const isLog: boolean = props.isLogBox && !props.isRegBox;
	const isReg: boolean = !props.isLogBox && props.isRegBox;



	return (
		<>
			<Formik
				initialValues={initialValues}
				// validationSchema={validators}
				onSubmit={onLoginSubmit(props.isLogBox, props.isRegBox)}
			>
				{({ ...propsFormik }) => {
					return <StyledForm>
						{isLog ? <InputForm  {...propsFormik} name={'userEmailFild'}
							labeltext={loginStings?.emailOrTel} type={'text'}
							validate={validateEmailOrTel} validateTel={validateTel} /> : null}

						{isReg ? <InputForm  {...propsFormik} name={'userRegName'}
							labeltext={regStrings?.name} type={'text'}
							validate={validateLength} /> : null}

						{isReg ? <InputForm  {...propsFormik} name={'userRegEmail'}
							labeltext={regStrings?.email} type={'text'}
							validate={validateEmail} /> : null}

						{isReg ? <InputForm  {...propsFormik} name={'userRegTelNumber'}
							labeltext={regStrings?.tel} type={'text'}
							validate={validateTelAndForamt} validateTel={validateTel} /> : null}


						<InputForm labeltext={choseLogOrRegText(loginStings?.password, regStrings?.createPassword)}
							name={'password'} type={isShowPassword ? 'text' : 'password'}
							validate={validatePassword} {...propsFormik} />


						{isLog ? <StyledForgotPasswordBtn type='button'>{loginStings?.forgotPassword}
						</StyledForgotPasswordBtn> : null}

						{isReg ? <UserAgreementBtn regText={regStrings?.regText} /> : null}

						{isLog ? <InputForm labeltext={loginStings?.renemberMe}
							name={'renemberMe'} type={'checkbox'} {...propsFormik} /> : null}

						<StyledSubmiiBtn width='100%' height='36px' heigth768='48px'
							type="submit" disabled={propsFormik.isSubmitting}>
							{choseLogOrRegText(loginStings?.loginBtn, regStrings?.regBtn)}
						</StyledSubmiiBtn>

					</StyledForm>
				}}
			</Formik >
			<StyledGotoRegBtn onClick={props.goToReg} type='button'>
				{choseLogOrRegText(loginStings?.goToRegBtn, regStrings?.goToLoginBtn)}
			</StyledGotoRegBtn>
		</>
	);
};

export default LoginForm;


