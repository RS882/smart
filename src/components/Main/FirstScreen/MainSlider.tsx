import React, { FC } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSliderWraper = styled.div`
	margin-top:20px;
	border: 1px solid #af1313;

`;



const StyledSlider = styled(Slider)`
	border: 1px solid #36dd15;

`;

const Div1 = styled.div`
	border: 1px solid #0c2ad8;
	display: block;
	font-size:40px ;
	
`;
const StyledH = styled.h3`
	
	background-color:#990aac;
	height:160px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		height:360px;
		};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		height:524px;
		
	};
	
`

const MainSlider: FC = (props) => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <></>,
		prevArrow: <></>,
	};
	return (
		<StyledSliderWraper>

			<StyledSlider {...settings}>
				<Div1>
					<StyledH>Lorem .</StyledH>
				</Div1>
				<Div1>
					<StyledH>2</StyledH>
				</Div1>
				<Div1>
					<StyledH>3</StyledH>
				</Div1>
				<Div1>
					<StyledH>4</StyledH>
				</Div1>
				<Div1>
					<StyledH>5</StyledH>
				</Div1>
				<Div1>
					<StyledH>6</StyledH>
				</Div1>
			</StyledSlider>
		</StyledSliderWraper>
	);
};

export default MainSlider;