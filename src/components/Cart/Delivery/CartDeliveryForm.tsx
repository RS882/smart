import React, { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import CartFormRadio from './CartFormRadio';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartDeliveryTextDelivery, selectCartDeliveryTextPickup } from './../../../redux/LanguageSlice';
import styled from 'styled-components';
import SelectCityContainer, { StyledTitleDateBox } from './SelectCity/SelectCityContainer';
import { validateSelectIsEnpty } from '../../../utilits/validators';

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

const StyledRadioGruppeAndSelectCity = styled.div`
	display: grid;
	grid-row-gap:10px;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	padding-bottom:10px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding-bottom:30px;
		grid-template-columns:repeat(2,1fr);
		grid-column-gap :10px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-row-gap:20px;
		grid-template-columns: repeat(2, minmax(1fr, 310px));
		grid-column-gap :30px;
		
	};
`;
const StyledRadioGruppe = styled.div`
display: grid;
grid-row-gap:10px;

@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
	grid-row-gap:20px;
	
};
`;

const StyledTitelDelivery = styled.span`
	color:transparent;
`;

const initialValues: IDeliveryFormDate = {
	city: '',
	delivery: 'delivery',
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
			onSubmit={() => { }}>
			{(props: FormikProps<IDeliveryFormDate>) =>
			(<StyledDeliveryForm>
				<StyledRadioGruppeAndSelectCity>
					<SelectCityContainer name={'city'} validate={validateSelectIsEnpty} />
					<div>
						<StyledTitleDateBox><StyledTitelDelivery>Delivery</StyledTitelDelivery></StyledTitleDateBox>
						<StyledRadioGruppe>
							<CartFormRadio name={'delivery'} value='delivery' label={deliveyText?.method!} />
							<CartFormRadio name={'delivery'} value='pickup' label={pickupText?.method!} />
						</StyledRadioGruppe>
					</div>
				</StyledRadioGruppeAndSelectCity>
			</StyledDeliveryForm>)
			}

		</Formik >
	);
};

export default React.memo(CartDeliveryForm);