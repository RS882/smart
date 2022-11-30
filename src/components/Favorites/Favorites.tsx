import React from 'react';
import styled from 'styled-components';
import BreadcrumbsContainer from '../Breadcrumbs/BreadcrumbsContainer';

const Margin1 = styled.main`
	margin: 150px;
`
const Favorites = () => {
	return (
		<Margin1>
			<BreadcrumbsContainer />
			Favorites
		</Margin1>
	);
};

export default Favorites;