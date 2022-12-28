import { Formik, Form } from 'formik';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectDeliveryMethods, selectPaymentMethodTaxt, selectPersonalDataText } from '../../redux/LanguageSlice';
import { IUserDate, selectUserData } from '../../redux/LoginSlice';
import { StyledBtn, StyledPrivatOfficebox } from './GeneralInformation';
import FieldTextCart from '../Cart/Delivery/InputText/InputTextCart'
import { validateEmail } from '../../utilits/validators';
import Button from '../Button';
import SelectCityContainer from '../Cart/Delivery/SelectCity/SelectCityContainer';
import styled from 'styled-components';
import { useAppDispatch } from './../../redux/hooks';
import { changeUserData } from './../../redux/Thunk/thunkLogin';

interface IInitialValuesPersData {
	name: string;
	email: string;
	phoneNumber: string;
	city: string;
	postcode: string;
	adress: string;
	payMethod: string;
	deliveryMethod: string;
	avatar: string;
}


const StyledPersonalDataForm = styled(Form)`
	height:100%;
	width:100%;
	display: grid;
	gap:20px;
	padding-bottom:50px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
		padding-bottom:60px;
		grid-template-columns: repeat(2,1fr);
	};
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		padding-bottom:80px;
	};

`;
export const StyledBtnPrivatData = styled.div`
	width: 100%;
	display: flex;
	align-items:flex-end;
`;


const PersonalData = () => {

	const dispatsch = useAppDispatch();
	const user = useAppSelector(selectUserData);
	const textPersData = useAppSelector(selectPersonalDataText);
	const payMethod = useAppSelector(selectPaymentMethodTaxt);
	const deliveryMethod = useAppSelector(selectDeliveryMethods);


	const initialValues: IInitialValuesPersData = {
		name: user.name,
		email: user.email,
		phoneNumber: user.phone,
		city: user.city,
		postcode: user.zipIndex,
		adress: user.address,
		payMethod: payMethod.includes(user.paymentMethod) ? user.paymentMethod : '',
		deliveryMethod: deliveryMethod.includes(user.deliveryMethod) ? user.deliveryMethod : '',
		avatar: '',

	};
	return (
		<Formik initialValues={initialValues}
			onSubmit={(values) => {
				const resData: IUserDate = {
					...user,
					name: values.name,
					email: values.email,
					phone: values.phoneNumber,
					city: values.city,
					zipIndex: values.postcode,
					address: values.adress,
					paymentMethod: values.adress,
					deliveryMethod: values.deliveryMethod,
					avatar: values.avatar || user.avatar,
				};
				dispatsch(changeUserData(resData));

			}}>
			{(propsFormik) => (
				<StyledPrivatOfficebox>
					<StyledPersonalDataForm>
						<FieldTextCart name='name' title={textPersData.name} isStorage={false} placeholder={textPersData.placeholder} />
						<FieldTextCart name='email' title={textPersData.email} isStorage={false} validate={validateEmail} placeholder={textPersData.placeholder} />
						<FieldTextCart name='phoneNumber' isStorage={false} title={textPersData.phoneNumber}
							placeholder={textPersData.placeholder} validate={() => { }} />
						<FieldTextCart name='city' isStorage={false} title={textPersData.city}
							placeholder={textPersData.placeholder} validate={() => { }} />
						<FieldTextCart name='postcode' isStorage={false} title={textPersData.postcode}
							placeholder={textPersData.placeholder} validate={() => { }} />
						<FieldTextCart name='adress' isStorage={false} title={textPersData.adress}
							placeholder={textPersData.placeholder} validate={() => { }} />
						<SelectCityContainer name='payMethod' isStorage={false} title={textPersData.payMethod}
							placholderText={textPersData.placeholder} option={payMethod} validate={() => { }} />
						<SelectCityContainer name='deliveryMethod' isStorage={false} title={textPersData.deliveryMethod}
							placholderText={textPersData.placeholder} option={deliveryMethod} validate={() => { }} />
						<FieldTextCart name='avatar' isStorage={false} title={textPersData.avatar} type='file' validate={() => { }} />
						<StyledBtnPrivatData>
							<Button width='100%' height='48px' heigth768='48px' type='submit'  >{textPersData.btnText}</Button>
						</StyledBtnPrivatData>
					</StyledPersonalDataForm>
				</StyledPrivatOfficebox>
			)

			}

		</Formik>)
};

export default PersonalData;