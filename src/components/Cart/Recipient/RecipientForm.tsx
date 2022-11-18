import { Formik, FormikProps, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { setRecipient } from '../../../redux/CartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { validateEmail, validateTelNumberCartFormFormat } from '../../../utilits/validators';
import { StyledDeliveryForm } from '../Delivery/CartDeliveryForm';
import FieldTextCart from '../Delivery/InputText/InputTextCart';
import FieldTextCartForTel from '../Delivery/InputText/InputTextForTel';
import { selectRecipientTaxt } from './../../../redux/LanguageSlice';
import DontCall from './DontCall';

export interface IRecipientFormDate {
	name: string;
	surname: string;
	phone: string;
	email: string;
	dontCall: boolean;
};

const StyledRecipientFilds = styled.div`
	display: grid;
	gap:20px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		grid-template-columns: repeat(2, 1fr);
	};
`;
const StyledDontCallMe = styled.div`
	grid-column: 1/3;
`;

// Automatic sending of the form 
const AutoSubmit = () => {
	const { values, submitForm } = useFormikContext();
	useEffect(() => { submitForm() }, [values, submitForm]);
	return null;
};

const RecipientForm: FC = () => {
	const recipientText = useAppSelector(selectRecipientTaxt);
	const initialValues: IRecipientFormDate = {
		name: sessionStorage.getItem('name') || '',
		surname: sessionStorage.getItem('surname') || '',
		phone: sessionStorage.getItem('phone') || '',
		email: sessionStorage.getItem('email') || '',
		dontCall: true,
	};
	// We form PLACEHOLDER for Input
	const getPlaceholder = (text: string, forExample = recipientText.forExample) => `${forExample}, ${text}`;
	const dispatch = useAppDispatch();
	return (
		<Formik initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.validateForm(values);
				dispatch(setRecipient(values))
			}}>
			{(props: FormikProps<IRecipientFormDate>) => {

				return (<StyledDeliveryForm id='RecipientInCart'>
					<StyledRecipientFilds>
						<FieldTextCart name='name' title={recipientText.name}
							placeholder={getPlaceholder(recipientText.namePlaceholder)} />
						<FieldTextCart name='surname' title={recipientText.surname}
							placeholder={getPlaceholder(recipientText.surnamePlaceholder)} />
						<FieldTextCartForTel name='phone' title={recipientText.phoneNumber} validate={validateTelNumberCartFormFormat}
							placeholder={getPlaceholder('+49(123) 456-78-90')} />
						<FieldTextCart name='email' title={recipientText.eMail} validate={validateEmail}
							placeholder={getPlaceholder('smart@gmail.com')} />
						<StyledDontCallMe>
							<DontCall name='dontCall' />
						</StyledDontCallMe>
					</StyledRecipientFilds>
					<AutoSubmit />
				</StyledDeliveryForm>)
			}
			}

		</Formik>
	);
};

export default React.memo(RecipientForm);