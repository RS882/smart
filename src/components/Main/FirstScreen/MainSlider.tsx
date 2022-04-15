import React, { FC } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideContainer from './Slides/FirstSlide/SlideContainer';
import { bgImgFirstSlide, bgImgSecondSlide } from './Slides/slideImg';

const StyledSliderWraper = styled.div`
	
	.slick-dots{
		bottom:6px;
		ul{
			margin: 0 6px;
			display:flex;
			li{
				margin:0;
				flex:1 1 100%;
				background-color:${props => props.theme.color.divider || '#C8CACB'};
				height: 3px;;
				border-radius:1.5px;
				&:not(:last-child){
					margin-right:3px;
				}
			}
			li.slick-active{
				background-color:${props => props.theme.color.lightBlue || '#EDF2F6'};
			}
		}
	}
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		margin-top:20px;

	};
`;
const StyledCustomPaging = styled.div`
	height: 100%;
	width: 100%;
`;


const Div1 = styled.div`
	font-size:30px ;
	
`;
const StyledSlideBox = styled.div`
	
	min-height:160px;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		min-height:360px;
		};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		max-height:524px;
		
	};
	
`;

const MainSlider: FC = (props) => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "ease",
		nextArrow: <></>,
		prevArrow: <></>,
		appendDots: (dots: JSX.Element) => <div><ul > {dots} </ul></div>,
		customPaging: () => <StyledCustomPaging />,
	};
	return (
		<StyledSliderWraper>

			<Slider {...settings}>
				<Div1>
					<StyledSlideBox><SlideContainer bgImg={bgImgFirstSlide} /></StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox><SlideContainer bgImg={bgImgSecondSlide} /></StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>3</StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>4</StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>5</StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>6</StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>5</StyledSlideBox>
				</Div1>
				<Div1>
					<StyledSlideBox>6</StyledSlideBox>
				</Div1>
			</Slider>
		</StyledSliderWraper>
	);
};

export default MainSlider;