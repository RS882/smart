import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectLangStiringsSlideText } from './../../../../../redux/LanguageSlice';
import SlideText from './SlideText';



const SlideTextWrapper = styled.div`
	position:absolute;
	top: 23px;
	left: 20px;
	width:126px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		top: 67px;
		left:75px;
		width:217px;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		top: 90px;
		left: 100px;
			width:289px;
	};
	
`

const SlideTextContainer: FC = (props) => {

	const slideTextLoad = useAppSelector(selectLangStiringsSlideText);
	const slideText = slideTextLoad ? slideTextLoad : '';

	return (
		<SlideTextWrapper>
			<SlideText text={slideText} />
		</SlideTextWrapper>
	);
};

export default SlideTextContainer;