import React, { FC } from 'react';
import styled from 'styled-components';

interface IEyeIcon {
	setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};
interface IBtn {
	isShow: boolean;
};


const StyledRichtWraper = styled.button<IBtn>`
	display:flex;
	justify-content:center;
	align-items:center;
	position: relative;
	width: 75%;
	height: 75%;
	font-size:20px;
	color:${props => props.isShow ? props.theme.color.text.main : props.theme.color.text.second};
`;


const EyeIcon: FC<IEyeIcon & IBtn> = ({ setShowPassword, isShow }) => {

	const eyeClassName = isShow ? '_icon-eye1' : '_icon-eye_off';

	return (
		<StyledRichtWraper type='button' isShow={isShow}
			onPointerDown={() => setShowPassword(true)}
			onPointerUp={() => setShowPassword(false)}
			className={eyeClassName} />
	);
}


export default EyeIcon;