import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks';
import { selectCartDeliveryTextPickup } from '../../../../redux/LanguageSlice';
import CartFormRadio from '../CartFormRadio';
import { StyledTitleDateBox } from '../SelectCity/SelectCityContainer';
import ShopAdress from './ShopAdress';

interface IPickupContainer {
	city: string;
};

const StyledRadioBox = styled.ul`
	display: grid;
	grid-template-rows: minmax(auto, 65px);
	row-gap:20px;
	margin-top:30px;
	height:375px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		overflow-y:auto;
		height:455px;	
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		height:325px;	
	}
`;



const PickupContainer: FC<IPickupContainer> = ({ city }) => {

	const pickupText = useAppSelector(selectCartDeliveryTextPickup)!;

	const radioElem: JSX.Element[] = pickupText.shope.
		filter(e => city ? e.city === city : e).
		map((e, i) =>
			<li key={e.city + e.adress + i}>
				<CartFormRadio name={'shopAdress'} value={e.idShop}
					bdColor='transparent' isOnlyBdColor={true} heigthBox='auto'>
					<ShopAdress city={e.city} adress={e.adress} mode={e.mode} />
				</CartFormRadio>
			</li>
		)

	return (
		<>
			<StyledTitleDateBox>
				{`${pickupText.productIsAvailable[0]} ${pickupText.shope.length} ${pickupText.productIsAvailable[1]}`}
			</StyledTitleDateBox>
			<StyledRadioBox>
				{radioElem}
			</StyledRadioBox>
		</>
	);
};

export default PickupContainer;