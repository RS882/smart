import React, { FC } from 'react';
import styled from 'styled-components';
import { Routes, useLocation } from 'react-router-dom';

import { routePrivOff } from './privOfRoutObj';
import getRouteElement from '../HOC/RouteComponent';
import UserMenuContainer from '../Header/UserMenu/UserMenuContainer';

import Container from '../Container';
import { StyledMain } from '../Main/Main';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';




export const StyledPrivateOfficeBox = styled.div`
	width:100%;
	margin-top: 20px;
	display: grid;
	row-gap:20px;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin-top: 30px;
		row-gap:30px;
		grid-template-columns: minmax(0,305px) 1fr;
		grid-template-rows: 20px auto  1fr;
		
	};

`;

export const StyledBreadcrumbs = styled.div`
	padding-left:20px;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		grid-column:1/3;
	};

`;


export const StyledDestopMenu = styled.div`
	display:none;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		display:block;
		
	};
`;

export const StyledTitel = styled(StyledBreadcrumbs)`
	
	font-weight: 700;
	font-size: 24px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		font-size: 28px;
		
	};
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		font-size: 36px;
	};
`;

const PrivateOffice = () => {


	const urlArr = useLocation().pathname.split('/');
	const urlLast = urlArr.length > 2 ? routePrivOff.filter(e => e.path === urlArr[2])[0].linkText : '';
	const text = ['Home', 'Privat Office', urlLast];

	return (

		<StyledMain>
			<Container>
				<StyledPrivateOfficeBox>

					<StyledBreadcrumbs>
						<Breadcrumbs text={text} />
					</StyledBreadcrumbs>

					<StyledTitel>{urlLast}</StyledTitel>

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
