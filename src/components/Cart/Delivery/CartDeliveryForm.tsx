import React, { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import CartFormRadio from './CartFormRadio';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartDeliveryTextDelivery, selectCartDeliveryTextPickup } from './../../../redux/LanguageSlice';
import styled from 'styled-components';

export interface IDeliveryFormDate {
	city: string;
	delivery: string;
	deliveryDate: string;
	deliveryTime: string;
	deliveryStreet: string;
	deliveryFlat: string;
	comment: string;
	shopAdress: string;

};
const StyledDeliveryForm = styled(Form)`
	margin-top:30px;
`;

const StyledRadioGruppe = styled.div`
	display: grid;
	grid-row-gap:10px;
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-row-gap:20px;
		
	};
`;

const initialValues: IDeliveryFormDate = {
	city: '',
	delivery: '',
	deliveryDate: '',
	deliveryTime: '',
	deliveryStreet: '',
	deliveryFlat: '',
	comment: '',
	shopAdress: '',

};

const CartDeliveryForm: FC = (props) => {

	const deliveyText = useAppSelector(selectCartDeliveryTextDelivery);
	const pickupText = useAppSelector(selectCartDeliveryTextPickup);

	return (
		<Formik initialValues={initialValues}
			// validationSchema={validators}
			onSubmit={() => { }}>
			{(props: FormikProps<IDeliveryFormDate>) =>
			(<StyledDeliveryForm>
				<StyledRadioGruppe>
					<CartFormRadio name={'delivery'} value='delivery' label={deliveyText?.method!} />
					<CartFormRadio name={'delivery'} value='pickup' label={pickupText?.method!} />
				</StyledRadioGruppe>
			</StyledDeliveryForm>)
			}

		</Formik >
	);
};

export default React.memo(CartDeliveryForm);