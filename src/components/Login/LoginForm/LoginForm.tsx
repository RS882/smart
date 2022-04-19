import { Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';




const StyledForm = styled.form`
	border: 1px solid #000;
	margin: 30px 20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin:  20px;
	};
	
`

const LoginForm: FC = (props) => {
	const validators = Yup.object({
		scearchFild: Yup.string()
			.min(3, 'Must be 3 characters or more')
			.required('Required')
	});

	return (
		<Formik
			initialValues={{ scearchFild: '', }}
			validationSchema={validators}
			onSubmit={values => console.log(values.scearchFild)}
		>
			{formik => (
				<StyledForm onSubmit={formik.handleSubmit}>
					<label htmlFor="userEmailFild">userEmailFild
						<input
							id="userEmailFild"
							type="text"
							{...formik.getFieldProps('userEmailFild')}
						/>
					</label>
					{formik.touched.scearchFild && formik.errors.scearchFild ? (
						<div>{formik.errors.scearchFild}</div>
					) : null}
					<button type="submit">Submit</button>
				</StyledForm>
			)}
		</Formik>
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