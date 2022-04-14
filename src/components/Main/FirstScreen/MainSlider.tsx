import React, { FC } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSliderWraper = styled.div`
	margin-top:20px;
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
`;



const Div1 = styled.div`
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
	
`;

const MainSlider: FC = (props) => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <></>,
		prevArrow: <></>,
		appendDots: (dots: JSX.Element) => (
			<div>
				<ul > {dots} </ul>
			</div>
		),
		customPaging: () => <></>,
	};
	return (
		<StyledSliderWraper>

			<Slider {...settings}>
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
				<Div1>
					<StyledH>5</StyledH>
				</Div1>
				<Div1>
					<StyledH>6</StyledH>
				</Div1>
			</Slider>
		</StyledSliderWraper>
	);
};

export default MainSlider;