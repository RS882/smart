import React, { FC } from 'react';
import styled from 'styled-components';



export interface IEyeIcon {
	isShow?: boolean;
	showText?: (arg: boolean) => void;
}


const StyledRichtWraper = styled.button<IEyeIcon>`
	display:flex;
	justify-content:center;
	align-items:center;
	position: relative;
	width: 75%;
	height: 75%;
	font-size:20px;
	color:${props => props.isShow ? props.theme.color.text.main : props.theme.color.text.second};
`;


const EyeIcon: FC<IEyeIcon> = (props) => {

	const eyeClassName = props.isShow ? '_icon-eye1' : '_icon-eye_off';

	return (
		<StyledRichtWraper type='button' isShow={props.isShow}
			onPointerDown={() => props.showText ? props.showText(true) : null}
			onPointerUp={() => props.showText ? props.showText(false) : null}
			className={eyeClassName} />
	);
}


export default EyeIcon;