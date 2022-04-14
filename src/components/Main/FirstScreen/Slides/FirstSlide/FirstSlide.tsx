import React, { FC } from 'react';
import styled from 'styled-components';
import { IBgImg } from './FirstSlideContainer';

interface FirstSlideProps {
	bgImg: IBgImg;
};

const StyledBg = styled.div`
/* background-image: url() */
`

const FirstSlide: FC<FirstSlideProps> = (props) => {
	return (
		<StyledBg {...props}>

		</StyledBg>
	);
};

export default FirstSlide;