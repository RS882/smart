import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText } from '../../../redux/LanguageSlice';
import Button from '../../Button';

import InputForm from '../InputForm/InputForm';
import LoockIcon from '../InputForm/InputStatusIcon/LoockIcon';
import { selectIsShowPassword } from './../../../redux/LoginSlice';

interface IValuesLogin {
	userEmailFild?: string;
	password?: string;
	renemberMe?: boolean;
}

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

	const loginStings = useAppSelector(selectLoginText);
	const isShowPassword = useAppSelector(selectIsShowPassword);

	// const validate = (values: IValuesLogin) => {
	// 	const errors: IValuesLogin = {};


	// 	if (!values.password) {
	// 		errors.password = 'Required';
	// 	} else if (values.password.length < 3) {
	// 		errors.password = 'Must be 20 characters or less';
	// 	}

	// 	if (!values.userEmailFild) {
	// 		errors.userEmailFild = 'Required';
	// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmailFild)) {
	// 		errors.userEmailFild = 'Invalid email address';
	// 	}

	// 	return errors;
	// };
	const validatePassword = (value: string) => {
		let error: string | undefined = undefined;
		if (!value) {
			error = 'Required';
		} else if (value.length < 3) {
			error = 'Must be 3 characters or more';
		}
		return error;
	};
	const validateEmail = (value: string) => {
		let error: string | undefined = undefined;
		if (!value) {
			error = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address/phone number';
		}
		return error;
	};

	const validateTel = (value: string) => {
		let error: string = '';
		if (!value) {
			error = 'Required';
		} else if (!/(?<!\d)\d{10}(?!\d)/i.test(value)) {
			error = 'Invalid email address/phone number';
		}
		return error;
	};
	const validateEmailOrTel = (value: string) =>
		(validateEmail(value) !== undefined) ? validateTel(value) : undefined;




	// const validators = Yup.object({
	// 	userEmailFild: Yup.string()
	// 		.email('Invalid email address')
	// 		.required('Required'),
	// 

	// 	password: Yup.string()
	// 		.min(3, 'Must be 3 characters or more')
	// 		.required('Required'),
	// });



	return (
		<>
			<Formik
				initialValues={{ userEmailFild: '', password: '', renemberMe: true, }}
				// validationSchema={validators}
				onSubmit={values => console.log(values)}
			>
				{({ values, touched, errors, ...props }) => {

					return <StyledForm>
						<InputForm labeltext={loginStings?.emailOrTel} name={'userEmailFild'}
							validate={validateEmailOrTel}
							error={errors.userEmailFild} touched={touched.userEmailFild} />

						<InputForm labeltext={loginStings?.password}
							name={'password'} type={isShowPassword ? 'text' : 'password'}
							validate={validatePassword}
							error={errors.password} touched={touched.password} />

						<StyledForgotPasswordBtn type='button'>{loginStings?.forgotPassword}</StyledForgotPasswordBtn>

						<InputForm labeltext={loginStings?.renemberMe}
							name={'renemberMe'} type={'checkbox'} value={values.renemberMe} />

						<StyledSubmiiBtn width='100%' height='36px' heigth768='48px'
							type="submit">{loginStings?.loginBtn}</StyledSubmiiBtn>
					</StyledForm>
				}}
			</Formik >
			<StyledGotoRegBtn type='button'>{loginStings?.goToRegBtn}</StyledGotoRegBtn>
		</>
	);
};

export default LoginForm;



// const ScearchForm: FC = (props) => {

// 	const validators = Yup.object({
// 		scearchFild: Yup.string()
// 			.min(3, 'Must be 3 characters or more')
// 			.required('Required')
// 	});



// 	return (
// 		<Formik
// 			initialValues={{ scearchFild: '', }}
// 			validationSchema={validators}
// 			onSubmit={values => console.log(values.scearchFild)}
// 		>
// 			{formik => (
// 				<form onSubmit={formik.handleSubmit}>
// 					<label htmlFor="scearchFild">scearchFild
// 						<input
// 							id="scearchFild"
// 							type="text"
// 							{...formik.getFieldProps('scearchFild')}
// 						/>
// 					</label>
// 					{formik.touched.scearchFild && formik.errors.scearchFild ? (
// 						<div>{formik.errors.scearchFild}</div>
// 					) : null}
// 					<StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
// 				</form>
// 			)}
// 		</Formik>
// 	);
// };

// export default ScearchForm;