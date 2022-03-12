import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../Container';
import HeaderBottom from './HeaderBottom';

import HeaderMobile from './HeaderMobile';
import { strings } from './../../localization/localization';

import { ILanguages } from '../redux/LanguageSlice';


interface HeaderProps {
	language?: ILanguages;
};

const StyledHeader = styled.header<HeaderProps>`
	position: fixed;
	top: 0;
	left: 0;
	max-height:60px;
	z-index:100;
   width: 100%;
 `;



const Header: FC<HeaderProps> = (props) => {

	return (<>
		<StyledHeader>
			<Container>
				<HeaderMobile strings={strings.header} />
			</Container>
			<HeaderBottom />
		</StyledHeader>

	</>
	);
};

export default Header;