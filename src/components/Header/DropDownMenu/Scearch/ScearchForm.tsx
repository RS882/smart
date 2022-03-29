import React, { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledSubmitBtn = styled.button`
border: 1px solid #000;
`

const ScearchForm: FC = (props) => {

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
				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="scearchFild">scearchFild
						<input
							id="scearchFild"
							type="text"
							{...formik.getFieldProps('scearchFild')}
						/>
					</label>
					{formik.touched.scearchFild && formik.errors.scearchFild ? (
						<div>{formik.errors.scearchFild}</div>
					) : null}
					<StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
				</form>
			)}
		</Formik>
	);
};

export default ScearchForm;