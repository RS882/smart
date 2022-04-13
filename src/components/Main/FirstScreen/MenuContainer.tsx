import React, { FC } from 'react';
import styled from 'styled-components';
import CatalogMenu from '../../Header/CatalogMenu/CatalogMenu';

const StyledMenuContainer = styled.div`
	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display: block;
	
	};
`

const MenuContainer: FC = (props) => {
	return (
		<StyledMenuContainer>
			<CatalogMenu />
		</StyledMenuContainer>
	);
};

export default MenuContainer;