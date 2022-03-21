import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { strings } from '../../localization/localization';
import { ILanguages } from '../../redux/LanguageSlice';
import Header from './Header';
import HeaderBottomContainer from './HeaderBottomContainer/HeaderBottomContainer';
import Flex from '../Flex';
import HeaderMenuContainer from './HeaderMenu/HeaderMenuContainer';


interface HeaderContainerProps {
	language?: ILanguages;
};

const StyledHeader = styled.header`
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
			<Flex direction='column'>
				<Container>
					<Header strings={strings.header.sundry} />
				</Container>
				<HeaderMenuContainer strings={strings.header.menuItem} />
			</Flex>
			<HeaderBottomContainer strings={strings.header.bottomBtn} />
		</StyledHeader>

	</>
	);
};

export default HeaderContainer;