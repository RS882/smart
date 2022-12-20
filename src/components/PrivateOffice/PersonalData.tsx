import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectDeliveryMethods, selectPaymentMethodTaxt, selectPersonalDataText } from '../../redux/LanguageSlice';
import { selectUserData } from '../../redux/LoginSlice';
import { StyledBtn, StyledPrivatOfficebox } from './GeneralInformation';
import FieldTextCart from '../Cart/Delivery/InputText/InputTextCart'
import { validateEmail } from '../../utilits/validators';
import Button from '../Button';
import SelectCityContainer from '../Cart/Delivery/SelectCity/SelectCityContainer';


const PersonalData = () => {
	const user = useAppSelector(selectUserData);
	const textPersData = useAppSelector(selectPersonalDataText);
	const payMethod = useAppSelector(selectPaymentMethodTaxt);
	const deliveryMethod = useAppSelector(selectDeliveryMethods);



	const initialValues = {
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
			onSubmit={(values, actions) => {
				// actions.validateForm(values);
				// dispatch(setRecipient(values));
				// setIsNext(true);
			}}>
			{(props) => {




				return (
					<StyledPrivatOfficebox>
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
						<StyledBtn>
							<Button width='100%' type='submit'>{textPersData.btnText}</Button>
						</StyledBtn>
					</StyledPrivatOfficebox>
				)
			}
			}

		</Formik>)
};

export default PersonalData;