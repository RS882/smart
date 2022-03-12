import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import { ILanguages } from '../redux/appSlice';
import { ArrowFn } from '../types';
import LanguageBtn from './LaguageBtn';

import LanguageMenu from './LanguageMenu';


interface ILanguage extends ILanguages {
	onClickBtn: ArrowFn,
};

const LanguageWrapper = styled.div`
	position: relative;
	padding: 10px ;	
		background-color: ${props => props.theme.color.lightBlue};
		border-radius: 4px 4px 0 0;
		border: 1px solid  ${props => props.theme.color.darkBlue};
		border-bottom:none;
		padding: 9px 9px 10px 9px;
	&:hover{

	}
`;

const Languages: FC<ILanguage> = (props) => {

	return (
		<LanguageWrapper>
			<LanguageBtn onClick={props.onClickBtn}> {props.activeLanguage}</LanguageBtn>
			<LanguageMenu languages={props.languages?.filter(e => e !== props.activeLanguage)} />
		</LanguageWrapper>
	);
};

export default Languages;