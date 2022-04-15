import { IBgImg } from '../../../../types/sliderTypes';
import img320_1x from './../../../../assets/slider_img/slider1_320_1x.jpg';
import img320_2x from './../../../../assets/slider_img/slider1_320_2x.jpg';
import img768_1x from './../../../../assets/slider_img/slider1_768_1x.jpg';
import img768_2x from './../../../../assets/slider_img/slider1_768_2x.jpg';
import imgDesktop_1x from './../../../../assets/slider_img/slider1_desktop_1x.jpg';
import imgDesktop_2x from './../../../../assets/slider_img/slider1_desktop_2x.jpg';
import img2_320_1x from './../../../../assets/slider_img/slider2_320_1x.jpg';
import img2_320_2x from './../../../../assets/slider_img/slider2_320_2x.jpg';
import img2_768_1x from './../../../../assets/slider_img/slider2_768_1x.jpg';
import img2_768_2x from './../../../../assets/slider_img/slider2_768_2x.jpg';

export interface IImgObj {
	x1: IBgImg;
	x2: IBgImg;
};
export const bgImgFirstSlide: IImgObj = {
	x1: { '320': img320_1x, '768': img768_1x, '1000': imgDesktop_1x },
	x2: { '320': img320_2x, '768': img768_2x, '1000': imgDesktop_2x },
};

export const bgImgSecondSlide: IImgObj = {
	x1: { '320': img2_320_1x, '768': img2_768_1x, '1000': img2_768_1x },
	x2: { '320': img2_320_2x, '768': img2_768_2x, '1000': img2_768_2x },
};