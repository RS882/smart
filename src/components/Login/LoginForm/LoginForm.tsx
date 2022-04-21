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

	const validators = Yup.object({
		userEmailFild: Yup.string()
			.email('Invalid email address')
			// .min(3, 'Must be 3 characters or more')
			.required('Required') && Yup.string()
				.min(3, 'Must be 3 characters or more')
				.required('Required'),
		password: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.required('Required'),
	});

	return (
		<>
			<Formik
				initialValues={{ userEmailFild: '', password: '', renemberMe: true, }}
				validationSchema={validators}
				onSubmit={values => console.log(values)}
			>
				{({ values, touched, errors, ...props }) => {
					console.log(touched);


					return <StyledForm>
						<InputForm labeltext={loginStings?.emailOrTel} name={'userEmailFild'} />

						<InputForm labeltext={loginStings?.password}
							name={'password'} type={isShowPassword ? 'text' : 'password'} />

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