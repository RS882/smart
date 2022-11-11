import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledCartItemContainer } from './CartItemBox';


interface ICartMetodNotActivProps {
	title: string;
};
export const StyledTextTitleNotActive = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 120%;
	color:${props => props.theme.color.text.second || '#838688'};
`;

// Inactive basket menu items
const CartMetodNotActiv: FC<ICartMetodNotActivProps> = ({ title }) => {
	return (
		<StyledCartItemContainer>
			<StyledTextTitleNotActive>{title}</StyledTextTitleNotActive>
		</StyledCartItemContainer >
	);
};

export default React.memo(CartMetodNotActiv);