import React, { FC } from 'react';
import styled from 'styled-components';
import MainSlider from './MainSlider';
import MenuContainer from './MenuContainer';

const StyledGrid = styled.div`
	display:grid;
	grid-template-columns: minmax(0,1fr);
	border: 1px solid #000;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		grid-template-columns: 310px minmax(0,1fr);
		column-gap:20px;
	};
`;

const FirstScreen: FC = (props) => {
	return (
		<StyledGrid>
			<MenuContainer />
			<MainSlider />
		</StyledGrid>
	);
};

export default FirstScreen;