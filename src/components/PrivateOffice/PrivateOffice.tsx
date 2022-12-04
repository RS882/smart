import React, { FC } from 'react';
import styled from 'styled-components';
import { Routes } from 'react-router-dom';

import { routePrivOff } from './privOfRoutObj';
import getRouteElement from '../HOC/RouteComponent';
import UserMenuContainer from '../Header/UserMenu/UserMenuContainer';

import Container from '../Container';
import { StyledMain } from '../Main/Main';




const StyledPrivateOfficeBox = styled.div`
	width:100%;
	margin-top: 20px;
	display: grid;
	
	row-gap:20px;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin-top: 30px;
		row-gap:30px;
		grid-template-columns: minmax(0,305px) 1fr;
		grid-template-rows: 20px 1fr;
		
	};

`;

const StyledBreadcrumbs = styled.div`
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		grid-column:1/3;
	};


`;


const StyledDestopMenu = styled.div`
	display:none;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		display:block;
		
	};
`;

const PrivateOffice = () => {


	return (

		<StyledMain>
			<Container>
				<StyledPrivateOfficeBox>

					<StyledBreadcrumbs>Breadcrumbs</StyledBreadcrumbs>

					<StyledDestopMenu>
						<UserMenuContainer />
					</StyledDestopMenu>

					<Routes>
						{getRouteElement(routePrivOff)}
					</Routes>

				</StyledPrivateOfficeBox>
			</Container>
		</StyledMain>

	);
};

export default PrivateOffice;
