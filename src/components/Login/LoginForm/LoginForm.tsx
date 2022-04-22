import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText } from '../../../redux/LanguageSlice';
import { validateEmailOrTel, validatePassword, validateTel } from '../../../utilits/validators';
import Button from '../../Button';

import InputForm from '../InputForm/InputForm';

import { changeIsSubmit, selectIsShowPassword } from './../../../redux/LoginSlice';
import { useAppDispatch } from './../../../redux/hooks';



const StyledForm = styled(Form)`
	
	margin: 30px 20px 0 ;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 20px 20px 0;
	};
`;

const StyledForgotPasswordBtn = styled.button`
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
`



const LoginForm: FC = (props) => {

	const dispatch = useAppDispatch();
	const loginStings = useAppSelector(selectLoginText);
	const isShowPassword = useAppSelector(selectIsShowPassword);




	// const validators = Yup.object({
	// 	userEmailFild: Yup.string()
	// 		.email('Invalid email address')
	// 		.required('Required'),
	// 

	// 	password: Yup.string()
	// 		.min(3, 'Must be 3 characters or more')
	// 		.required('Required'),
	// });

	// 	<Form>
	// 	<Field
	// 	  name="phone"
	// 	  component={CustomInputComponent}
	// 	  onBlur={event => {
	// 		 const formatted = formatPhoneNumber(props.values['phone']);
	// 		 props.setFieldValue('phone', formatted);
	// 		 props.handleBlur(event);
	// 	  }}
	// 	/>
	//  </Form>

	const onLoginCubmit = (values: any, props: any) => {
		dispatch(changeIsSubmit(true))
		console.log(values)
		setTimeout(() => {
			props.resetForm()
			props.setSubmitting(false)
			dispatch(changeIsSubmit(false))
		}, 2000)
	}

	return (
		<>
			<Formik
				initialValues={{ userEmailFild: '', password: '', renemberMe: true, }}
				// validationSchema={validators}
				onSubmit={onLoginCubmit}
			>
				{({ ...props }) => {
					return <StyledForm>
						<InputForm  {...props} name={'userEmailFild'}
							labeltext={loginStings?.emailOrTel} type={'text'}
							validate={validateEmailOrTel} validateTel={validateTel} />

						<InputForm labeltext={loginStings?.password}
							name={'password'} type={isShowPassword ? 'text' : 'password'}
							validate={validatePassword} {...props} />

						<StyledForgotPasswordBtn type='button'>{loginStings?.forgotPassword}</StyledForgotPasswordBtn>

						<InputForm labeltext={loginStings?.renemberMe}
							name={'renemberMe'} type={'checkbox'} {...props} />

						<StyledSubmiiBtn width='100%' height='36px' heigth768='48px'
							type="submit" disabled={props.isSubmitting}
						>{loginStings?.loginBtn}</StyledSubmiiBtn>

					</StyledForm>
				}}
			</Formik >
			<StyledGotoRegBtn type='button'>{loginStings?.goToRegBtn}</StyledGotoRegBtn>
		</>
	);
};

export default LoginForm;


