import React, { FC } from 'react';
import styled from 'styled-components';

interface ISlideText {
	text: string;
}
const StyledSlideTextWrapper = styled.div`
	display:flex;
	flex-direction:column;
	color: ${props => props.theme.color.text.mainLight || '#fff'};
`;
const StyledH1 = styled.h1`
	margin-bottom:5px;
	font-weight: 700;
	font-size: 20px;
	line-height: 130%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 36px;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		font-size: 48px;
	};
	
`;
const StyledH2 = styled.h2`
	font-weight: 500;
	font-size: 16px;
	line-height: 130%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 24px;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		font-size: 32px;
	};
`

const SlideText: FC<ISlideText> = (props) => {
	return (
		<StyledSlideTextWrapper>
			<StyledH1>Apple Watch Series 6</StyledH1>
			<StyledH2>{props.text}</StyledH2>
		</StyledSlideTextWrapper>
	);
};

export default SlideText;