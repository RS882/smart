import React, { FC } from 'react';
import { FieldHookConfig, Form, Formik, FormikProps } from 'formik';

import CartFormRadio from './CartFormRadio';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartDeliveryTextCity, selectCartDeliveryTextDelivery, selectCartDeliveryTextPickup } from './../../../redux/LanguageSlice';
import styled from 'styled-components';
import SelectCityContainer, { StyledTitleDateBox } from './SelectCity/SelectCityContainer';

import { cityArr } from './../../../localization/uu';
import DeliveryDateBoxContainer from './DeliveryDateBox/DeliveryDateBoxContainer';
import { getDateIsMoreTodayForString } from '../../../utilits/functions';
import { IUseStateCartDeliveryForm } from '../Cart';
import FieldTextCart from './InputText/InputTextCart';
import PickupContainer from './PickupContainer/PickupContainer';
import { ISetIsNext } from './../Cart';
import { useAppDispatch } from './../../../redux/hooks';
import { setDeliveryDate, } from '../../../redux/CartSlice';
import { validateSelectIsEnpty } from './../../../utilits/validators';


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

export type InputAttrProps = FieldHookConfig<string> & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>;
export type SelectAttrProps = FieldHookConfig<string> & React.SelectHTMLAttributes<HTMLSelectElement> & React.ClassAttributes<HTMLSelectElement>;

export const StyledDeliveryForm = styled(Form)`
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
const StyledDeliveryGroup = styled.div`
	display: grid;
	grid-gap:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-template-columns:repeat(2,1fr);
		
	};
`;
const StyledCommentBox = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column:1/3;
		
	};
	
`;

// Form for delivery of goods
const CartDeliveryForm: FC<IUseStateCartDeliveryForm & ISetIsNext> = ({ setDeliveryPreise, setIsNext }) => {

	const dispatch = useAppDispatch();
	const deliveyText = useAppSelector(selectCartDeliveryTextDelivery)!;
	const pickupText = useAppSelector(selectCartDeliveryTextPickup)!;
	const yourCityName = useAppSelector(selectCartDeliveryTextCity)!;

	const initialValues: IDeliveryFormDate = {
		city: sessionStorage.getItem('city') || '',
		delivery: sessionStorage.getItem('delivery') || 'delivery',
		deliveryDate: new Date(sessionStorage.getItem('deliveryDate')!) < new Date(getDateIsMoreTodayForString()) ? getDateIsMoreTodayForString()! : sessionStorage.getItem('deliveryDate')!,
		deliveryTime: sessionStorage.getItem('deliveryTime') || '',
		deliveryStreet: sessionStorage.getItem('deliveryStreet') || '',
		deliveryFlat: sessionStorage.getItem('deliveryFlat') || '',
		comment: sessionStorage.getItem('comment') || '',
		shopAdress: sessionStorage.getItem('shopAdress') || pickupText.shope[0].idShop,
	};
	// List of cities
	const cityNames: string[] = cityArr.city;
	// List of delivery intervals and delivery costs
	const timeInterval: [string, number][] = [['09:00–12:00', 0], ['12:00–15:00', 0], ['15:00–18:00', 0], ['18:00–21:00', 10], ['21:00–24:00', 15],];

	//List of cities where there are shops
	const getCityArrWithShops: () => string[] = () => {
		const setCity: Set<string> = new Set();
		pickupText.shope.forEach(e => setCity.add(e.city));
		return Array.from(setCity);
	};



	return (
		<Formik initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.validateForm(values);
				// сохраняем данные в зависимости от способа доставки
				values.delivery === 'delivery' && dispatch(setDeliveryDate({ ...values, shopAdress: '', }));
				values.delivery === 'pickup' && dispatch(setDeliveryDate({
					...values,
					deliveryDate: '',
					deliveryTime: '',
					deliveryStreet: '',
					deliveryFlat: '',
					comment: '',
					city: '',

				}));
				setIsNext(true);
			}}>
			{(props: FormikProps<IDeliveryFormDate>) => {
				sessionStorage.setItem('delivery', props.values.delivery);
				sessionStorage.setItem('shopAdress', props.values.shopAdress);
				// The city in which a pickup store is chosen
				const cityNameFromShopAdress: string = props.values.shopAdress ?
					pickupText.shope.filter(e => e.idShop === props.values.shopAdress)[0].city : '';


				return (<StyledDeliveryForm id='DeliveryForm'>
					<StyledRadioGruppeAndSelectCity>

						<SelectCityContainer name={'city'} title={yourCityName!} cityName={cityNameFromShopAdress}
							option={props.values.delivery === 'delivery' ? cityNames : getCityArrWithShops()}
							validate={props.values.delivery === 'delivery' ? validateSelectIsEnpty : () => { }} />

						<div>
							<StyledTitleDateBox><StyledTitelDelivery>Delivery</StyledTitelDelivery></StyledTitleDateBox>
							<StyledRadioGruppe>
								<CartFormRadio name={'delivery'} value='delivery'>{deliveyText?.method!}</CartFormRadio>
								<CartFormRadio name={'delivery'} value='pickup' >{pickupText?.method!}</CartFormRadio>
							</StyledRadioGruppe>
						</div>
					</StyledRadioGruppeAndSelectCity>

					{props.values.delivery === 'delivery' ?
						<StyledDeliveryGroup>
							<DeliveryDateBoxContainer name={'deliveryDate'}
								dateMinMax={[getDateIsMoreTodayForString(), getDateIsMoreTodayForString(7)]}
								title={deliveyText?.date} />
							<SelectCityContainer name={'deliveryTime'} optionPlus={timeInterval}
								placholderText={deliveyText.timePlasholder} title={deliveyText.time}
								priseDelivery={deliveyText.price} setDeliveryPreise={setDeliveryPreise} />
							<FieldTextCart name='deliveryStreet' title={deliveyText?.street} />
							<FieldTextCart name='deliveryFlat' title={deliveyText?.flat} />
							<StyledCommentBox>
								<FieldTextCart name='comment' title={deliveyText?.comment} FormType='textArea'
									validate={() => { }} />
							</StyledCommentBox>
						</StyledDeliveryGroup> : null}


					{props.values.delivery === 'pickup' ? <PickupContainer city={props.values.city}
						getCityArrWithShops={getCityArrWithShops} /> : null}

				</StyledDeliveryForm>)
			}
			}

		</Formik >
	);
};

export default React.memo(CartDeliveryForm);