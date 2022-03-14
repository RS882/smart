import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderStings } from '../../localization/localization';
import Button from '../Button';
import Flex from '../Flex';

import LanguageContainer from '../LanguageChoose/LanguageContainer';

import Logo from '../Logo/Logo';
import HeaderActionsContainer from './HeaderAction/HeaderActionsContainer';
import HeaderSeachContainer from './HeaderSearch/HeaderSeachContainer';



interface HeaderProps {
	strings: IHeaderStings;

}

const StyledHeader = styled(Flex)`
	padding: 0 10px 0 15px;
	box-shadow:0px 4px 6px rgba(42, 82, 117, 0.06);
	height: 100%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 20px ;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		box-shadow: none;
	}; 
	`;

const StyledLoginBtn = styled(Button)`
		margin-right:10px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			width: 99px;
			height: 48px;
		};
	`;



const Header: FC<HeaderProps> = (props) => {
	return (
		<StyledHeader justufy={'space-between'}>
			<Logo />
			<Flex>
				<HeaderSeachContainer btnSearch={props.strings.btnSearch} />
				<HeaderActionsContainer />
				<StyledLoginBtn>{props.strings.btnEnter}</StyledLoginBtn>
				<LanguageContainer />
			</Flex>
		</StyledHeader>
	);
};

export default Header;