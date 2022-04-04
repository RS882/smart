import React, { FC } from 'react';
import styled from 'styled-components';
import CatalogMenu from '../../CatalogMenu/CatalogMenu';

const StyledDropCatalogContainer = styled.div`
	border: 1px solid #000;
	margin-top:15px;
	width: 100%;
@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
	margin-top:20px;
	};
`

const DropCatalogContainer: FC = (props) => {
	return (
		<StyledDropCatalogContainer>
			<CatalogMenu />
		</StyledDropCatalogContainer>
	);
};

export default DropCatalogContainer;