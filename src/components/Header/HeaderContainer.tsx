import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { ILanguages, selectLangStiringsHeaderSundry } from '../../redux/LanguageSlice';
import Header from './Header';
import Flex from '../Flex';
import { useAppSelector } from '../../redux/hooks';
import DecktopSearchContainer from './DesktopSearch/DecktopSearchContainer';
import { selectIsDesktopScearch, selectIsUserMenuOpen } from '../../redux/MenuSlice';
import { useAppDispatch } from './../../redux/hooks';
import { openPopUp } from '../../redux/LoginSlice';
import { changeIsBodyLock } from '../../redux/ModalSlice';
import { selectIsLogSuccess } from './../../redux/LoginSlice';

interface HeaderContainerProps {
	language?: ILanguages;
	appScroll?: string;
	isUserMenuOpen?: boolean;
};

const StyledHeader = styled.header<HeaderContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	height:60px;
	z-index:${props => props.isUserMenuOpen ? '350' : '100'};
   width: 100%;
	padding-right: ${props => props.appScroll};
	background-color: rgba(255,255,255,0.6);
	backdrop-filter: blur(8px);
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height: 72px;
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		height: 80px;
	};
 `;



const HeaderContainer: FC<HeaderContainerProps> = (props) => {

	const sundry = useAppSelector(selectLangStiringsHeaderSundry);

	const isDesktopSearch = useAppSelector(selectIsDesktopScearch);

	const isLogSuccess = useAppSelector(selectIsLogSuccess);
	const isUserMenuOpen = useAppSelector(selectIsUserMenuOpen);

	const dispatch = useAppDispatch();

	const onClickLogin = () => {
		dispatch(openPopUp());
		dispatch(changeIsBodyLock(true));
	};



	return (<>
		<StyledHeader appScroll={props.appScroll} isUserMenuOpen={isUserMenuOpen}>
			<Flex direction='column'>
				<Container>
					<Header isLogSuccess={isLogSuccess} strings={sundry}
						onClickLogin={onClickLogin} />
				</Container>
				{isDesktopSearch ? <DecktopSearchContainer /> : null}
			</Flex>

		</StyledHeader>

	</>
	);
};

export default HeaderContainer;


