import React, { FC } from 'react';
import { selectIsRetina } from '../../../../../redux/AppSlice';
import { useAppSelector } from '../../../../../redux/hooks';
import FirstSlide from './FirstSlide';
import { IBgImg } from './../../../../../types/sliderTypes';
import { IImgObj } from './../slideImg';


interface SlideContainerProps {
	bgImg: IImgObj;
}

const SlideContainer: FC<SlideContainerProps> = (props) => {
	const isRetina = useAppSelector(selectIsRetina);

	const bgImg: IBgImg = isRetina ? props.bgImg.x2 : props.bgImg.x1;

	return (

		<FirstSlide bgImg={bgImg} />

	);
};

export default SlideContainer;