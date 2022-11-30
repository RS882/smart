import React, { FC } from 'react';
import styled from 'styled-components';
import { Routes } from 'react-router-dom';

import { routePrivOff } from './privOfRoutObj';
import getRouteElement from '../HOC/RouteComponent';

const StyledPrivateOfficeContainer = styled.main`
	margin: 150px;
`;

const StyledMenu = styled.div`
height:100px;
`;


const PrivateOffice: FC = () => {


	return (
		<StyledPrivateOfficeContainer>
			PrivateOffice

			<Routes>
				{getRouteElement(routePrivOff)}
			</Routes>


		</StyledPrivateOfficeContainer>
	);
};

export default PrivateOffice;
