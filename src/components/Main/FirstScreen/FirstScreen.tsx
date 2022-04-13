import React, { FC } from 'react';
import styled from 'styled-components';
import MenuContainer from './MenuContainer';

const StyledGrid = styled.div`
	display:grid;
	
border: 1px solid #000;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
	
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		grid-template-columns: 310px 1fr;
		column-gap:20px;
	};
`;

const FirstScreen: FC = (props) => {
	return (
		<StyledGrid>
			<MenuContainer />
			<div>slider</div>
		</StyledGrid>
	);
};

export default FirstScreen;