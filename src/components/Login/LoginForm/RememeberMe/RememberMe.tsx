import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';

interface IrememberMe {
	value: boolean;
};


const StyledRememberMe = styled(Flex) <IrememberMe>`
	width: 100%;
	height: 100%;
	border-radius:4px;
	transition: all 0.3s ease 0s;
	background-color: ${props => props.value ? (props.theme.color.blue || '#4878A6') : 'transparent'};
	border: 1.5px solid ${props => props.value ? 'transparent' : (props.theme.color.cardBorder || '#EAEAF0')};
	& span{
		color:${props => props.value ? (props.theme.color.text.mainLight || '#fff') : 'transparent'};
		font-size:10px;
	}
`;

const RememberMe: FC<IrememberMe> = (props) => {
	return (
		<StyledRememberMe {...props} >
			<span className='_icon-checkbox'></span>
		</StyledRememberMe>
	);
};

export default RememberMe;