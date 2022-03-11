import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../Container';
import HeaderBottom from './HeaderBottom';

import HeaderMobile from './HeaderMobile';
import { strings } from './../../localization/localization';

interface HeaderProps {

};

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	max-height:60px;
	z-index:100;
   width: 100%;
 `;

const ContainerHeader = styled(Container)`
`;

const Header: FC<HeaderProps> = (props) => {

	return (<>
		<StyledHeader>
			<ContainerHeader>
				<HeaderMobile strings={strings.header} />
			</ContainerHeader>
			<HeaderBottom />
		</StyledHeader>

	</>
	);
};

export default Header;