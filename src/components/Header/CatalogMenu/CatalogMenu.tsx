import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCatalogMenu = styled.ul`
	display:flex;
	flex-direction:column;
`

const CatalogMenu: FC = (props) => {
	return (
		<StyledCatalogMenu>
			catalog
		</StyledCatalogMenu>
	);
};

export default CatalogMenu;