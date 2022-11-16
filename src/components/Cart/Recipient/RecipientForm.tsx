import { Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { validateEmail, validateTelAndForamt, validateTelNumberCartFormFormat } from '../../../utilits/validators';
import { StyledDeliveryForm } from '../Delivery/CartDeliveryForm';
import FieldTextCart from '../Delivery/InputText/InputTextCart';
import FieldTextCartForTel from '../Delivery/InputText/InputTextForTel';
import { selectRecipientTaxt } from './../../../redux/LanguageSlice';

interface IRecipientFormDate {
	name: string;
	surname: string;
	phone: string;
	email: string;
	dontCall: boolean;
};

const StyledRecipientFilds = styled.div`
	display: grid;
/* row-gap:30px; */
	
`;

const RecipientForm: FC = () => {

	const recipientText = useAppSelector(selectRecipientTaxt);

	const initialValues: IRecipientFormDate = {
		name: '',
		surname: '',
		phone: '',
		email: '',
		dontCall: true,
	};
	// формируем плаесхолдер для инпутов
	const getPlaceholder = (text: string, forExample = recipientText.forExample) => `${forExample}, ${text}`;

	return (
		<Formik initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.validateForm(values);
			}}>
			{(props: FormikProps<IRecipientFormDate>) => {



				return (<StyledDeliveryForm id='RecipientInCart'>
					<StyledRecipientFilds>
						<FieldTextCart name='name' title={recipientText.name}
							placeholder={getPlaceholder(recipientText.namePlaceholder)} />
						<FieldTextCart name='surname' title={recipientText.surname}
							placeholder={getPlaceholder(recipientText.surnamePlaceholder)} />
						<FieldTextCartForTel name='phone' title={recipientText.phoneNumber} validate={validateTelNumberCartFormFormat}
							placeholder={getPlaceholder('+49(___) ___-__-__')} />
						<FieldTextCart name='email' title={recipientText.eMail} validate={validateEmail}
							placeholder={getPlaceholder('smart@gmail.com')} />
					</StyledRecipientFilds>
				</StyledDeliveryForm>)
			}
			}

		</Formik>
	);
};

export default RecipientForm;