import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAppSelector } from '../../../redux/hooks';
import { selectLoginText } from '../../../redux/LanguageSlice';
import InputForm from '../InputForm/InputForm';



const StyledForm = styled(Form)`
	/* border: 1px solid #000; */
	margin: 30px 20px 0 ;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 20px 20px 0;
	};
`;

const LoginForm: FC = (props) => {

	const loginStings = useAppSelector(selectLoginText);

	const validators = Yup.object({
		userEmailFild: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.required('Required'),
		password: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.required('Required'),
	});

	return (
		<>
			<Formik
				initialValues={{ userEmailFild: '', password: '', renemberMe: 'false', }}
				validationSchema={validators}
				onSubmit={values => console.log(values)}
			>
				<StyledForm>
					<InputForm labeltext={loginStings?.emailOrTel} name={'userEmailFild'} />
					<InputForm labeltext={loginStings?.password} name={'password'} type={'password'} />
					<button>{loginStings?.forgotPassword}</button>
					<InputForm labeltext={loginStings?.renemberMe} name={'renemberMe'} type={'checkbox'} />
					<button type="submit">{loginStings?.loginBtn}</button>
				</StyledForm>
			</Formik >
			<button>{loginStings?.goToRegBtn}</button>
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