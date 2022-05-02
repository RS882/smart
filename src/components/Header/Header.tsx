import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../types/fnTypes';
import { ISundry } from '../../types/LocalizationTypes';
import Button from '../Button';
import Flex from '../Flex';
import LanguageContainer from '../LanguageChoose/LanguageContainer';
import HeaderActionsContainer from './HeaderAction/HeaderActionsContainer';

import HeaderLogo from './HeaderLogo';
import HeaderSeachContainer from './HeaderSearch/HeaderSeachContainer';
import HeaderTelContainer from './HeaderTel/HeaderTelContainer';



interface HeaderPropsMain {
	strings: ISundry | null;
	onClickLogin: ArrowFn;
	isLogSuccess: boolean;
	openUserMenu: ArrowFn;
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
	border: 1px solid #000;
	color: ${props => props.theme.color.text.second || '#838688'};
	transition: color 0.3s ease 0s;
	&:hover{
		color: ${props => props.theme.color.darkBlue || '#2A5275'};
	};
	`;

const Header: FC<HeaderPropsMain> = (props) => {




	return (
		<StyledHeader justufy={'space-between'} >
			<HeaderLogo />
			<Flex>
				<HeaderTelContainer workTime={props.strings && props.strings.workTime} />
				<HeaderSeachContainer btnSearch={props.strings && props.strings.btnSearch} />
				<HeaderActionsContainer />
				{props.isLogSuccess ?
					<StyledLoginSuccessBtnWrapper>
						<StyledLoginSuccessBtn onTouchStart={props.openUserMenu} className='_icon-sing_in' />
					</StyledLoginSuccessBtnWrapper> :
					<StyledLoginBtn onClick={props.onClickLogin}>{props.strings && props.strings.btnEnter}</StyledLoginBtn>}

				<LanguageContainer />
			</Flex>
		</StyledHeader>
	);
};

export default Header;