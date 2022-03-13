import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../Container';
import HeaderBottom from './HeaderBottom';


import { strings } from '../../localization/localization';

import { ILanguages } from '../../redux/LanguageSlice';
import Header from './Header';


interface HeaderContainerProps {
	language?: ILanguages;
};

const StyledHeader = styled.header<HeaderContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	height:60px;
	z-index:100;
   width: 100%;
	background-color: ${props => props.theme.color.bg.main || `#fff`};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height: 72px;
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		height: 140px;
	};
 `;



const HeaderContainer: FC<HeaderContainerProps> = (props) => {

	return (<>
		<StyledHeader>
			<Container>
				<Header strings={strings.header} />
			</Container>
			<HeaderBottom />
		</StyledHeader>

	</>
	);
};

export default HeaderContainer;