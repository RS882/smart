import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartTextRecipient } from '../../../redux/LanguageSlice';
import { StyledTextTitleNotActive } from '../Delivery/DeliveryContainer';
import { StyledCartItemContainer } from '../Order/OrderContainer';




const RecipientContainer: FC = (props) => {
	const TitleText = useAppSelector(selectCartTextRecipient)

	return (
		<StyledCartItemContainer>
			<StyledTextTitleNotActive>{TitleText?.title}</StyledTextTitleNotActive>
		</StyledCartItemContainer>
	);
};

export default RecipientContainer;