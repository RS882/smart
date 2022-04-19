import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';


const StyledRichtWraper = styled(Flex)`
	position: relative;
	width: 75%;
	height: 75%;
	border-radius:50%;
	border: 1.5px solid #22A44E;
	color:#22A44E;
	font-size:6px;
`;


const RichtTextIcon: FC = (props) => <StyledRichtWraper className='_icon-checkbox' />;

export default RichtTextIcon;