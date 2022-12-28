import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { IUserDate, selectIsShowPassword, selectUserData } from '../../redux/LoginSlice';
import { changeUserData } from '../../redux/Thunk/thunkLogin';
import { validatePassword } from '../../utilits/validators';
import Button from '../Button';
import InputForm, { StyledStatusIcon } from '../Login/InputForm/InputForm';
import { useAppDispatch, useAppSelector } from './../../redux/hooks';
import { selectchangePasswortText } from './../../redux/LanguageSlice';
import { StyledPrivatOfficebox } from './GeneralInformation';
import InputFormForChangePass from './InputFormForChangePass';
import { StyledBtnPrivatData } from './PersonalData';

interface IChangePasswortData {
	oldPasswort: string;
	newPasswort: string;
	confirmPasswort: string;
};

const StyledChangePasswortForm = styled(Form)`
	display: grid;
	gap:20px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
		width:340px;
		padding-bottom:60px;
	};
`;


const StyledBtnBox = styled.div`
	display: flex;

`;


const ChangePasswort = () => {


	const dispatsch = useAppDispatch();
	const user = useAppSelector(selectUserData);
	const textChangepasswort = useAppSelector(selectchangePasswortText);


	const initialValues: IChangePasswortData = {
		oldPasswort: '',
		newPasswort: '',
		confirmPasswort: '',
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				console.log(actions);


				if (values.oldPasswort !== user.password) {
					actions.setFieldError('oldPasswort', 'Wrong password');
				} else if (values.oldPasswort === values.newPasswort) {
					actions.setFieldError('newPasswort', 'The new password is the same as the old one');
				} else if (values.newPasswort !== values.confirmPasswort) {
					actions.setFieldError('confirmPasswort', 'Error when re-entering password');
				} else {
					actions.validateForm(values);

					const resData: IUserDate = {
						...user,
						password: values.newPasswort,
					};
					dispatsch(changeUserData(resData));
					actions.resetForm();
				};
				actions.setSubmitting(false);

			}}>
			{({ ...propsFormik }) => {





				return (
					<StyledPrivatOfficebox>
						<StyledChangePasswortForm>
							<InputFormForChangePass text={textChangepasswort.enterOldPasswort} name={'oldPasswort'} />
							<InputFormForChangePass text={textChangepasswort.enterNewPasswort} name={'newPasswort'} />
							<InputFormForChangePass text={textChangepasswort.confirmNewPasswort} name={'confirmPasswort'} />
							<StyledBtnBox>
								<Button width='100%' height='48px' heigth768='48px' type='submit' disabled={propsFormik.isSubmitting} >{textChangepasswort.btnText}</Button>
								<StyledStatusIcon />
							</StyledBtnBox>
						</StyledChangePasswortForm>
					</StyledPrivatOfficebox>
				)
			}

			}

		</Formik>
	);
};

export default ChangePasswort;