import React, { FC } from 'react';
import styled from 'styled-components';


import { ILanguages } from '../redux/LanguageSlice';
import { ArrowFn } from '../types';
import LanguageBtn from './LaguageBtn';

import LanguageMenu from './LanguageMenu';


interface ILanguage extends ILanguages {
	onClickBtnLng: ArrowFn,
	cnahgeActiveLng: ArrowFn,
	isMenu?: boolean,
};

interface ILanguageStyled extends ILanguages {
	isMenu?: boolean,
};

const LanguageWrapper = styled.div<ILanguageStyled>`
	position: relative;
	padding: 9px 9px 10px 9px ;	
	transition: all 0.3s ease 0s;
		background-color:  ${props => props.isMenu && props.theme.color.lightBlue};
		border-radius:  ${props => props.isMenu && '4px 4px 0 0'};
		border: 1px solid  ${props => props.isMenu ? props.theme.color.darkBlue : props.theme.color.bg.main};
		border-bottom: 1px solid ${props => props.theme.color.bg.main || '#fff'};
	
`;

const Languages: FC<ILanguage> = (props) => {

	return (
		<LanguageWrapper isMenu={props.isMenu}>
			<LanguageBtn onClick={props.onClickBtnLng}> {props.activeLanguage}</LanguageBtn>
			<LanguageMenu cnahgeActiveLng={props.cnahgeActiveLng} isMenu={props.isMenu}
				languages={props.languages?.filter(e => e !== props.activeLanguage)} />
		</LanguageWrapper>
	);
};

export default Languages;