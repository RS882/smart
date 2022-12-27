import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { selectIsShowPassword, selectUserData } from '../../redux/LoginSlice';
import { validatePassword } from '../../utilits/validators';
import InputForm from '../Login/InputForm/InputForm';
import { useAppDispatch, useAppSelector } from './../../redux/hooks';
import { selectchangePasswortText } from './../../redux/LanguageSlice';
import { StyledPrivatOfficebox } from './GeneralInformation';

interface IChangePasswortData {
	oldPasswort: string;
	newPasswort: string;
	confirmPasswort: string;
};

const StyledChangePasswortForm = styled(Form)`
	

`;


const ChangePasswort = () => {


	const dispatsch = useAppDispatch();
	const user = useAppSelector(selectUserData);
	const textChangepasswort = useAppSelector(selectchangePasswortText);
	const isShowPassword = useAppSelector(selectIsShowPassword);

	const initialValues: IChangePasswortData = {
		oldPasswort: user.password,
		newPasswort: '',
		confirmPasswort: '',
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				// const resData: IUserDate = {
				// 	...user,
				// 	name: values.name,
				// 	email: values.email,
				// 	phone: values.phoneNumber,
				// 	city: values.city,
				// 	zipIndex: values.postcode,
				// 	address: values.adress,
				// 	paymentMethod: values.adress,
				// 	deliveryMethod: values.deliveryMethod,
				// 	avatar: values.avatar || user.avatar,
				// };
				// dispatsch(changeUserData(resData));

			}}>
			{({ ...propsFormik }) => (
				<StyledPrivatOfficebox>
					<StyledChangePasswortForm>
						{/* <InputForm labeltext={textChangepasswort.enterOldPasswort}
							name={'password'} type={isShowPassword ? 'text' : 'password'}
							validate={validatePassword} {...propsFormik} /> */}
						{/* <StyledBtnPrivatData>
							<Button width='100%' height='48px' heigth768='48px' type='submit'>{textPersData.btnText}</Button>
						</StyledBtnPrivatData> */}
					</StyledChangePasswortForm>
				</StyledPrivatOfficebox>
			)

			}

		</Formik>
	);
};

export default ChangePasswort;