import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import LanguageBtn from './LaguageBtn';
import { theme } from './../../theme';
import { LngFn } from '../../types/fnTypes';




interface ILanguageMenu {
	cnahgeActiveLng: LngFn;
	languages: string[];
	isMenu: boolean;
};

const StyledLanguagesMenu = styled.div<ILanguageMenu>`
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

	const languageBtns = props.languages.map((e, i) =>
		<StyledLngBtnWrapper key={e + i}>
			<LanguageBtn onClick={() => props.cnahgeActiveLng(e)} bgColor={theme.color.bg.main}
				color={theme.color.darkBlue}
				border={`1px solid ${theme.color.darkBlue}`} >
				{e}</LanguageBtn>
		</StyledLngBtnWrapper >
	);

	return (
		<StyledLanguagesMenu {...props} >
			<Flex direction='column'>
				{languageBtns}
			</Flex>
		</StyledLanguagesMenu>
	);
};

export default LanguageMenu;