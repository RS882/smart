import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderStings } from '../../localization/localization';
import Button from '../Button';
import Flex from '../Flex';

import LanguageContainer from '../LanguageChoose/LanguageContainer';

import Logo from '../Logo/Logo';
import HeaderActionsContainer from './HeaderAction/HeaderActionsContainer';






interface HeaderProps {
	strings: IHeaderStings;

}

const StyledHeader = styled(Flex)`
	padding: 0 10px 0 15px;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 20px ;
		};
	`;

const StyledLoginBtn = styled(Button)`
		margin-right:10px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			width: 99px;
			height: 48px;
		};
	`

const Header: FC<HeaderProps> = (props) => {
	return (
		<StyledHeader justufy={'space-between'}>
			<Logo />
			<Flex>
				<HeaderActionsContainer />
				<StyledLoginBtn>{props.strings.btnEnter}</StyledLoginBtn>
				<LanguageContainer />
			</Flex>
		</StyledHeader>
	);
};

export default Header;