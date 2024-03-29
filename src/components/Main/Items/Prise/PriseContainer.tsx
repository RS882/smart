import React, { FC } from 'react';
import styled from 'styled-components';


interface IPrieseContainerProps {
	prise: string;
	discount: number;
	isOrder?: boolean;
}

const StyledPriseBox = styled.div`
	width:117px;
	display:flex;
	flex-direction:column;

`;


const StyledPeise = styled.div`
	font-weight: 700;
	color: ${props => props.theme.color.text.second || '#838688'};
	text-decoration-line: line-through;
	margin: 3px 0px;
`;
const StyledDiscountPrise = styled.div`
	font-weight: 700;
	font-size: 24px;
	margin:5px 0px;
`;

const StyledDiscountContainer = styled.div`
	display:flex;
	background: #F37748;
	border-radius: 14px;
	color: #fff;
	font-weight: 700;
	font-size: 14px;
	margin-top:5px;
`;
const StyledDiscountPerc = styled.div`
		background:#fff;
	color: ${props => props.theme.color.text.main};
	border-radius: 23px;
	padding: 0 4px;
	margin:3px 5px;
	font-weight: 400;
`;
const StyledDiscountSum = styled.div`
	margin:3px 0;

`;

const PriseContainer: FC<IPrieseContainerProps> = ({ prise, discount, isOrder = false }) => {

	const dicsountPrise = discount !== 0 ? (+prise - (+prise * discount / 100)).toFixed(2) : 0;
	const discounSum = discount !== 0 ? (+prise - +dicsountPrise).toFixed(2) : 0;


	return (
		<StyledPriseBox>
			<StyledPeise>
				{prise} €
			</StyledPeise>
			<StyledDiscountPrise>
				{dicsountPrise} €
			</StyledDiscountPrise>
			{isOrder ? null : <StyledDiscountContainer>
				<StyledDiscountPerc>{discount}%</StyledDiscountPerc>
				<StyledDiscountSum>- {discounSum} €</StyledDiscountSum>
			</StyledDiscountContainer>}

		</StyledPriseBox>
	);
};

export default PriseContainer;