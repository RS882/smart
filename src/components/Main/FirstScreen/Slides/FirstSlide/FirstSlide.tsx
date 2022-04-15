import React, { FC } from 'react';
import styled from 'styled-components';
import { IBgImg } from './FirstSlideContainer';

interface FirstSlideProps {
	bgImg: IBgImg;
};

const StyledBg = styled.div<FirstSlideProps>`
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
	
`

const FirstSlide: FC<FirstSlideProps> = (props) => {

	return (
		<StyledBg bgImg={props.bgImg}>

		</StyledBg>
	);
};

export default FirstSlide;