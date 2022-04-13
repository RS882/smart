import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';

import { ILanguages, selectLangStiringsHeaderMenuItem, selectLangStiringsHeaderSundry } from '../../redux/LanguageSlice';
import Header from './Header';

import Flex from '../Flex';
import HeaderMenuContainer from './HeaderMenu/HeaderMenuContainer';
import { useAppSelector } from '../../redux/hooks';

interface HeaderContainerProps {
	language?: ILanguages;
	appScroll?: string;
};

const StyledHeader = styled.header<HeaderContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	height:60px;
	z-index:100;
   width: 100%;
	padding-right: ${props => props.appScroll};
	background-color: ${props => props.theme.color.bg.main || `#fff`};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height: 72px;
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		height: 140px;
	};
 `;



const HeaderContainer: FC<HeaderContainerProps> = (props) => {

	const sundry = useAppSelector(selectLangStiringsHeaderSundry)
	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem)



	return (<>
		<StyledHeader appScroll={props.appScroll}>
			<Flex direction='column'>
				<Container>
					<Header strings={sundry} />
				</Container>
				<HeaderMenuContainer strings={menuItem} />
			</Flex>

		</StyledHeader>

	</>
	);
};

export default HeaderContainer;