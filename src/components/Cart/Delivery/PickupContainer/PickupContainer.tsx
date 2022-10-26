import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks';
import { selectCartDeliveryTextPickup } from '../../../../redux/LanguageSlice';
import BtnChange from '../../BtnChange';
import CartFormRadio from '../CartFormRadio';
import { StyledTitleDateBox } from '../SelectCity/SelectCityContainer';
import ShopAdress from './ShopAdress';

interface IPickupContainer {
	city: string;
	getCityArrWithShops: () => string[];
};

const StyledRadioBox = styled.ul`
	display: grid;
	grid-template-rows: minmax(auto, 65px);
	row-gap:20px;
	margin-top:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		overflow-y:auto;
		height:455px;	
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		height:325px;	
	}
`;
const StyledRadioBoxForMobil = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: none;
	};

`;
const StyledRadioBoxForNabletAndDesktop = styled.div`
	display: none;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: block;
	};

`;


const PickupContainer: FC<IPickupContainer> = ({ city, getCityArrWithShops }) => {

	const pickupText = useAppSelector(selectCartDeliveryTextPickup)!;
	// The number of shown elements of stores of stores
	const [elemAmount, setElemAmount] = useState(10);
	// show the button or not
	const [isBtnShow, setIsBtnShow] = useState(true);
	// We get JSX to display the store list
	const getRadioElemFromArr = (arr: {
		city: string;
		adress: string;
		mode: string;
		idShop: string;
	}[]) => arr.filter(e => city && getCityArrWithShops().includes(city) ? e.city === city : e).
		map((e, i) =>
			<li key={e.city + e.adress + i}>
				<CartFormRadio name={'shopAdress'} value={e.idShop}
					bdColor='transparent' isOnlyBdColor={true} heigthBox='auto'>
					<ShopAdress city={e.city} adress={e.adress} mode={e.mode} />
				</CartFormRadio>
			</li>
		);
	// get a new array of the required number of elements
	const getCutArr = <T,>(arr: T[], amount: number) =>
		amount <= 0 || arr.length === 0 || arr.length < amount ? arr : arr.slice(0, amount);
	//show 10 more elements
	const showNext10 = () => {
		if (pickupText.shope.length - elemAmount <= 10) {
			setElemAmount(pickupText.shope.length);
			setIsBtnShow(false);
		} else {
			setElemAmount(elemAmount + 10);
		}
	};

	return (
		<>
			<StyledTitleDateBox>
				{`${pickupText.productIsAvailable[0]} ${pickupText.shope.length} ${pickupText.productIsAvailable[1]}`}
			</StyledTitleDateBox>
			<StyledRadioBoxForNabletAndDesktop>
				<StyledRadioBox>{getRadioElemFromArr(pickupText.shope)}</StyledRadioBox>
			</StyledRadioBoxForNabletAndDesktop>

			<StyledRadioBoxForMobil>
				<StyledRadioBox>{getRadioElemFromArr(getCutArr(pickupText.shope, elemAmount))}</StyledRadioBox>
				{isBtnShow ? <BtnChange onClickCangeBtnCart={showNext10} isBottomBd={false} textBtn={`${pickupText.btnNext} 10`} /> : null}
			</StyledRadioBoxForMobil>
		</>
	);
};

export default React.memo(PickupContainer);