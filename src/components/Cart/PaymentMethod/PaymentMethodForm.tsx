import { Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import { setPaymentMethod } from '../../../redux/CartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectPaymentMethodTaxt } from '../../../redux/LanguageSlice';
import { ISetIsNext } from '../Cart';
import { StyledDeliveryForm } from '../Delivery/CartDeliveryForm';
import SelectCityContainer from '../Delivery/SelectCity/SelectCityContainer';



interface IPMValues {
	paymentMethod: string | null;
};

interface IPMForm {
	plHolder: string;
}

const PaymentMethodForm: FC<IPMForm & ISetIsNext> = ({ plHolder, setIsNext }) => {
	const dispatch = useAppDispatch();
	const paymentOption = useAppSelector(selectPaymentMethodTaxt)!;



	const initialValues: IPMValues = {
		paymentMethod: sessionStorage.getItem('paymentMethod') || '',
	};

	return (
		<Formik initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.validateForm(values);
				dispatch(setPaymentMethod(values.paymentMethod!));
				setIsNext(true);
			}}>
			{(props: FormikProps<IPMValues>) => {

				return (
					<StyledDeliveryForm id='PaymentMethod'>
						<SelectCityContainer name='paymentMethod' placholderText={plHolder} option={paymentOption} />
					</StyledDeliveryForm>
				)
			}}
		</Formik>
	);
};

export default PaymentMethodForm;