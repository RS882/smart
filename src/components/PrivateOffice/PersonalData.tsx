import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectPersonalDataText } from '../../redux/LanguageSlice';
import { selectUserData } from '../../redux/LoginSlice';
import { StyledPrivatOfficebox } from './GeneralInformation';
import FieldTextCart from '../Cart/Delivery/InputText/InputTextCart'
import { validateEmail } from '../../utilits/validators';

const PersonalData = () => {
	const user = useAppSelector(selectUserData);
	const textPersData = useAppSelector(selectPersonalDataText);

	const initialValues = {
		name: user.name,
		email: user.email,
		phoneNumber: user.phone,
		city: user.city,
		postcode: user.zipIndex,
		adress: user.address,
		payMethod: user.paymentMethod,
		deliveryMethod: user.deliveryMethod,
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
						<FieldTextCart name='name' title={textPersData.name} isStorage={false} />
						<FieldTextCart name='email' title={textPersData.email} isStorage={false} validate={validateEmail} />
						<FieldTextCart name='phoneNumber' isStorage={false} title={textPersData.phoneNumber} />
						<FieldTextCart name='city' isStorage={false} title={textPersData.city} />
						<FieldTextCart name='postcode' isStorage={false} title={textPersData.postcode} />
						<FieldTextCart name='adress' isStorage={false} title={textPersData.adress} />
						<FieldTextCart name='payMethod' isStorage={false} title={textPersData.payMethod} />
						<FieldTextCart name='deliveryMethod' isStorage={false} title={textPersData.deliveryMethod} />
						<FieldTextCart name='avatar' isStorage={false} title={textPersData.avatar} />

					</StyledPrivatOfficebox>
				)
			}
			}

		</Formik>)
};

export default PersonalData;