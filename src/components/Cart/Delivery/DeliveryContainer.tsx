import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartTextDeliveryMethod } from '../../../redux/LanguageSlice';
import { StyledCartItemContainer } from '../Order/OrderContainer';

export const StyledTextTitleNotActive = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 120%;
	color:${props => props.theme.color.text.second || '#838688'};
`;


const DeliveryContainer: FC = (props) => {
	const deliveryText = useAppSelector(selectCartTextDeliveryMethod)

	return (
		<StyledCartItemContainer>
			<StyledTextTitleNotActive>{deliveryText?.title}</StyledTextTitleNotActive>
		</StyledCartItemContainer>
	);
};

export default DeliveryContainer;