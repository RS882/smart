import React, { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';

import CartFormRadio from './CartFormRadio';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartDeliveryTextCity, selectCartDeliveryTextDelivery, selectCartDeliveryTextPickup } from './../../../redux/LanguageSlice';
import styled from 'styled-components';
import SelectCityContainer, { StyledTitleDateBox } from './SelectCity/SelectCityContainer';

import { cityArr } from './../../../localization/uu';
import DeliveryDateBoxContainer from './DeliveryDateBox/DeliveryDateBoxContainer';
import { getDateIsMoreTodayForString } from '../../../utilits/functions';
import { IUseStateCartDeliveryForm } from '../Cart';

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
	margin-bottom:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding-bottom:30px;
		grid-template-columns:repeat(2,1fr);
		grid-column-gap :10px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-row-gap:20px;
	
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
	city: sessionStorage.getItem('city') || '',
	delivery: sessionStorage.getItem('delivery') || 'delivery',
	deliveryDate: sessionStorage.getItem('deliveryDate') || getDateIsMoreTodayForString(),
	deliveryTime: sessionStorage.getItem('deliveryTime') || '',
	deliveryStreet: '',
	deliveryFlat: '',
	comment: '',
	shopAdress: '',

};

const CartDeliveryForm: FC<IUseStateCartDeliveryForm> = ({ setDeliveryPreise }) => {

	const deliveyText = useAppSelector(selectCartDeliveryTextDelivery)!;
	const pickupText = useAppSelector(selectCartDeliveryTextPickup)!;
	const yourCityName = useAppSelector(selectCartDeliveryTextCity)!;



	const cityNames = cityArr.city;

	const timeInterval: [string, number][] = [['09:00–12:00', 0], ['12:00–15:00', 0], ['15:00–18:00', 0], ['18:00–21:00', 10], ['21:00–24:00', 15],];

	return (
		<Formik initialValues={initialValues}
			onSubmit={() => { }}>
			{(props: FormikProps<IDeliveryFormDate>) =>
			(<StyledDeliveryForm>
				<StyledRadioGruppeAndSelectCity>
					<SelectCityContainer name={'city'} option={cityNames} title={yourCityName!} />
					<div>
						<StyledTitleDateBox><StyledTitelDelivery>Delivery</StyledTitelDelivery></StyledTitleDateBox>
						<StyledRadioGruppe>
							<CartFormRadio name={'delivery'} value='delivery' label={deliveyText?.method!} />
							<CartFormRadio name={'delivery'} value='pickup' label={pickupText?.method!} />
						</StyledRadioGruppe>
					</div>
				</StyledRadioGruppeAndSelectCity>
				<DeliveryDateBoxContainer name={'deliveryDate'}
					dateMinMax={[getDateIsMoreTodayForString(), getDateIsMoreTodayForString(7)]}
					title={deliveyText?.date} />
				<SelectCityContainer name={'deliveryTime'} optionPlus={timeInterval}
					placholderText={deliveyText.timePlasholder} title={deliveyText.time}
					priseDelivery={deliveyText.price} setDeliveryPreise={setDeliveryPreise} />

			</StyledDeliveryForm>)
			}

		</Formik >
	);
};

export default React.memo(CartDeliveryForm);