import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';

interface IEyeIcon {
	isShow?: boolean;
}


const StyledRichtWraper = styled(Flex)`
	position: relative;
	width: 75%;
	height: 75%;
	/* border-radius:50%;
	border: 1.5px solid #22A44E;
	color:#22A44E; */
	font-size:20px;
`;


const EyeIcon: FC<IEyeIcon> = (props) => <StyledRichtWraper className={props.isShow ? '_icon-eye1' : '_icon-eye_off'} />;

export default EyeIcon;