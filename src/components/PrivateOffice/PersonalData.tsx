import { Formik, FormikProps } from 'formik';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/LoginSlice';
import { StyledPrivatOfficebox } from './GeneralInformation';

const PersonalData = () => {
	const user = useAppSelector(selectUserData);

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



					</StyledPrivatOfficebox>
				)
			}
			}

		</Formik>)
};

export default PersonalData;