import React, { FC } from 'react';
import styled from 'styled-components';
import SlideTextContainer from '../SlideText/SlideTextContainer';
import { IBgImg } from '../../../../../types/sliderTypes';


interface SlideProps {
	bgImg: IBgImg;
};

const StyledBg = styled.div<SlideProps>`
	position: relative;
	height:50vw;
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: cover;
	background-image:${props => `url(${props.bgImg[320]} )`};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		border-radius:4px;
		height:calc((100vw - 40px)/2) ;
		background-image:${props => `url(${props.bgImg[768]} )`};
		};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		background-position: 100% 100%;
		height:524px ;
		background-image:${props => `url(${props.bgImg[1000]} )`};
	};
	
`;
const StyledBgText = styled.div`
	position: absolute;
	top: 0;
	left:0;
	height: 100%;
	width: 50%;
	background-color:#000;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:none;
	};
`;

const Slide: FC<SlideProps> = (props) => {

	return (
		<StyledBg bgImg={props.bgImg}>
			<StyledBgText />
			<SlideTextContainer />
		</StyledBg>
	);
};

export default Slide;