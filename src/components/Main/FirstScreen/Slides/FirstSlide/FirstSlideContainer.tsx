import React, { FC } from 'react';
import { selectIsRetina } from '../../../../../redux/AppSlice';
import { useAppSelector } from '../../../../../redux/hooks';
import img320_1x from './../../../../../assets/slider_img/slider1_320_1x.jpg';
import img320_2x from './../../../../../assets/slider_img/slider1_320_2x.jpg';
import img768_1x from './../../../../../assets/slider_img/slider1_768_1x.jpg';
import img768_2x from './../../../../../assets/slider_img/slider1_768_2x.jpg';
import imgDesktop_1x from './../../../../../assets/slider_img/slider1_desktop_1x.jpg';
import imgDesktop_2x from './../../../../../assets/slider_img/slider1_desktop_2x.jpg';
import FirstSlide from './FirstSlide';

export interface IBgImg {
	'320': string,
	'768': string,
	'1000': string,
}

const FirstSlideContainer: FC = (props) => {
	const isRetina = useAppSelector(selectIsRetina);

	const bgImg: IBgImg = isRetina ?
		{ '320': img320_2x, '768': img768_2x, '1000': imgDesktop_2x } :
		{ '320': img320_1x, '768': img768_1x, '1000': imgDesktop_1x }

	return (

		<FirstSlide bgImg={bgImg} />

	);
};

export default FirstSlideContainer;