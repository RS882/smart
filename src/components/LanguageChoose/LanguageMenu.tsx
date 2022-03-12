import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import { ILanguages } from '../redux/LanguageSlice';
import LanguageBtn from './LaguageBtn';
import { theme } from './../../theme';
import { ArrowFn } from '../types';

interface ILanguageMenu extends ILanguages {
	isMenu?: boolean;
	cnahgeActiveLng: ArrowFn;
};

interface ILanguageMenuStyled extends ILanguages {
	isMenu?: boolean;

};

const StyledLanguagesMenu = styled.div<ILanguageMenuStyled>`
	position: absolute;
	top: 100%;
	left: -1px;
	padding:0 9px;
	background-color: ${props => props.theme.color.lightBlue};
	border-radius: 0 0 4px 4px ;
	border: 1px solid  ${props => props.theme.color.darkBlue};
	border-top:none;
	transition: all 0.3s ease 0s;
	
		opacity: ${props => props.isMenu ? '1' : '0'};
		visibility: ${props => props.isMenu ? 'visible' : 'hidden'};
		
`;
const StyledLngBtnWrapper = styled.div`
	padding-bottom: 10px ;
`;

const LanguageMenu: FC<ILanguageMenu> = (props) => {

	const languageBtns = props.languages?.map((el, i) =>
		<StyledLngBtnWrapper key={el + i}>
			<LanguageBtn onClick={() => props.cnahgeActiveLng(el)} bgColor={theme.color.bg.main}
				color={theme.color.darkBlue}
				border={`1px solid ${theme.color.darkBlue}`} >
				{el}</LanguageBtn>
		</StyledLngBtnWrapper >
	);

	return (
		<StyledLanguagesMenu isMenu={props.isMenu}>
			<Flex direction='column'>
				{languageBtns}
			</Flex>
		</StyledLanguagesMenu>
	);
};

export default LanguageMenu;