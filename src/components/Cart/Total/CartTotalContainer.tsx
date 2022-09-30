import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { selectItemInCart } from '../../../redux/ActionSlice';
import { useAppSelector } from '../../../redux/hooks';
import { ArrowFn } from '../../../types/fnTypes';
import Button from '../../Button';
import { StyledCartItemTitle } from '../Order/OrderContainer';
import { selectCartTextTotal } from './../../../redux/LanguageSlice';

interface ICartTotalContainer {
	totalPrise: string;
	deliveryPrise?: number;
	isCheckout: boolean;
	onCheckout: ArrowFn;
	goToUserAagreement: ArrowFn;
};

const StyledCartTotelBox = styled.div`
	background-color:${props => props.theme.color.lightBlue || '#EDF2F6'};
	margin: 20px -20px 20px;
	padding:  20px;
	display: flex;
	flex-direction:column;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 0;
		padding:  30px;
	};
`;

const StyledTotalTitle = styled.div`
	margin-bottom:20px;
`;

const StyledTotalPrise = styled.div`
	display: flex;
	justify-content:space-between;
	align-items:center;
	margin-bottom:20px;
`;
const StyledText = styled.div`

	font-size: 20px;
	color:${props => props.theme.color.text.second || '#838688'};
`;
const StyledTotal = styled.div`
	display: flex;
	justify-content:space-between;

	padding-bottom:20px;
	padding-top:20px;
	border-top: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding-top:30px;
	};
`;

const StyledTotalText = styled.div`
	font-size: 20px;
	font-weight: 600;

	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 24px;
	};
`;
const StyledPrise = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 130%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 36px;
	};
`;

const StyledAcceptUserAagreement = styled.div`
	display: flex;

	flex-wrap:wrap;
	padding:20px 0 0  0;
	font-size:14px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 16px;
		padding:20px 20px 0;
	};
`;

const StyledCheckboxBlock = styled.div`
	display: flex;
	align-items:center;
`;
const StyledCheckbox = styled.input`
	width:24px;
	height:24px;
	margin-right:10px;
`;

const StyledAToUserAagreementBnt = styled.button`
	text-align:start;
	padding-left:1em;
	color:${props => props.theme.color.blue || '#4878A6'};
	transition: color 0.3s ease 0s;
	&:hover{
		color:${props => props.theme.color.darkBlue || '#4878A6'};
	}
	`;




const CartTotalContainer: FC<ICartTotalContainer> = ({ totalPrise, deliveryPrise = 0,
	isCheckout, onCheckout, goToUserAagreement }) => {
	const cartTotalText = useAppSelector(selectCartTextTotal);
	const countItwm = useAppSelector(selectItemInCart).length;
	const prise: string = (+totalPrise + deliveryPrise).toFixed(2) + '€';
	const [isChecked, setIsChecked] = useState(false)


	const handleChange = () => {
		setIsChecked(!isChecked); // инвертируем стейт
	}
	return (<>
		<StyledCartTotelBox>
			<StyledTotalTitle>
				<StyledCartItemTitle>{cartTotalText?.title}</StyledCartItemTitle>
			</StyledTotalTitle>
			<StyledTotalPrise>
				<StyledText>{countItwm} {cartTotalText?.goodForAmmount}</StyledText>
				<div>{totalPrise}€</div>
			</StyledTotalPrise>
			<StyledTotalPrise>
				<StyledText>{cartTotalText?.costOfDelivery}</StyledText>
				<div>{!deliveryPrise ? cartTotalText?.free : `${deliveryPrise.toFixed(2)}€`}</div>
			</StyledTotalPrise>
			<StyledTotal>
				<StyledTotalText>{cartTotalText?.toPay}</StyledTotalText>
				<StyledPrise>{prise}</StyledPrise>
			</StyledTotal>
			<Button disabled={!isChecked && isCheckout} width='100%' onClick={onCheckout}>{cartTotalText?.checkout}</Button>
		</StyledCartTotelBox>

		<StyledAcceptUserAagreement>
			<StyledCheckboxBlock>
				<StyledCheckbox type='checkbox' checked={isChecked} onChange={handleChange} />
				{cartTotalText?.byConfirming[0]}
			</StyledCheckboxBlock>
			<StyledAToUserAagreementBnt onClick={goToUserAagreement}>{cartTotalText?.byConfirming[1]}</StyledAToUserAagreementBnt>
		</StyledAcceptUserAagreement>
	</>);
};

export default React.memo(CartTotalContainer);