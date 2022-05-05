import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { openUserMenu, selectIsUserMenuOpen } from '../../redux/MenuSlice';
import { ArrowFn } from '../../types/fnTypes';
import { ISundry } from '../../types/LocalizationTypes';
import Button from '../Button';
import Flex from '../Flex';
import LanguageContainer from '../LanguageChoose/LanguageContainer';
import HeaderActionsContainer from './HeaderAction/HeaderActionsContainer';

import HeaderLogo from './HeaderLogo';
import HeaderSeachContainer from './HeaderSearch/HeaderSeachContainer';
import HeaderTelContainer from './HeaderTel/HeaderTelContainer';
import UserMenuContainer from './UserMenu/UserMenuContainer';
import { useAppDispatch } from './../../redux/hooks';
import Modal from './../Modal/Modal';
import { changeIsBodyLock } from '../../redux/ModalSlice';



interface HeaderPropsMain {
	strings: ISundry | null;
	onClickLogin: ArrowFn;
	isLogSuccess: boolean;

}

const StyledHeader = styled(Flex)`
	padding: 0 10px;
	box-shadow:0px 4px 6px rgba(42, 82, 117, 0.06);
	height: 100%;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 20px ;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		box-shadow: none;
		padding: 0;
	}; 
	`;

const StyledLoginBtn = styled(Button)`
		margin-right:10px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			width: 99px;
			height: 48px;
		};
	`;

const StyledLoginSuccessBtnWrapper = styled.div`
	position: relative;
	margin-right:10px;
	width: 48px;
	height: 60px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width: 99px;
		height: 72px;
		};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		height: 80px;
	};
	
` ;
const StyledLoginSuccessBtn = styled.button`
	height: 100%;
	width: 100%;
	font-size:25px;
	color: ${props => props.theme.color.text.second || '#838688'};
	transition: color 0.3s ease 0s;
	&:hover{
		color: ${props => props.theme.color.darkBlue || '#2A5275'};
	};
	`;

const StyledUserMenu = styled.div < { isUserMenuOpen: boolean }> `
	position: absolute;
	top: 100%;
	right: -60px;
	transform:translateX(0);
	width: 270px;
	transition: all 0.3s ease 0s;
	overflow:hidden;
	border-radius: 0 0 4px 4px;
	z-index:200;
	opacity: ${props => props.isUserMenuOpen ? '1' : '0'};
	visibility:${props => props.isUserMenuOpen ? 'visible' : 'hidden'};
	transition: top 0.3s ease 0s;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		position: absolute;
		top: 100%;
		right: 0;
		transform:translateX(0);
		width: 270px;
		transition: all 0.3s ease 0s;
	};
	`;

const Header: FC<HeaderPropsMain> = (props) => {

	const isUserMenuOpen = useAppSelector(selectIsUserMenuOpen);
	const dispatch = useAppDispatch();

	const showUserMenu = () => {
		dispatch(openUserMenu(true));
		dispatch(changeIsBodyLock(true));
	}

	const closeUserMenu = () => {
		dispatch(openUserMenu(false));
		dispatch(changeIsBodyLock(false));
	}

	return (
		<StyledHeader justufy={'space-between'} >
			<HeaderLogo />
			<Flex>
				<HeaderTelContainer workTime={props.strings && props.strings.workTime} />
				<HeaderSeachContainer btnSearch={props.strings && props.strings.btnSearch} />
				<HeaderActionsContainer />
				{props.isLogSuccess ?
					<StyledLoginSuccessBtnWrapper onMouseEnter={showUserMenu} onMouseLeave={closeUserMenu}>
						<StyledLoginSuccessBtn onClick={showUserMenu} className='_icon-sing_in' />
						<StyledUserMenu isUserMenuOpen={isUserMenuOpen} >
							<UserMenuContainer />
						</StyledUserMenu>
					</StyledLoginSuccessBtnWrapper> :
					<StyledLoginBtn onClick={props.onClickLogin}>{props.strings && props.strings.btnEnter}</StyledLoginBtn>
				}
				<LanguageContainer />
			</Flex>
		</StyledHeader>
	);
};

export default Header;