import React, { FC } from 'react';
import styled from 'styled-components';
import MenuContainer from './MenuContainer';

const StyledGrid = styled.div`
	display:grid;

	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
	
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		grid-template-columns: 310px 1fr;
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