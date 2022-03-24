import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';

interface ICloseMenu {
	onClick: ArrowFn;
}

const StyledCloseMenu = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 36px;
	height: 36px;
	animation: rotateClose 3s linear infinite;
	&::before,
	&::after{
		content:'';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 25px;
		height: 2px;
		background-color:${props => props.theme.color.red || '#F15152'}
	};
	&::before{
		transform:translateX(-50%) rotate(45deg);
	};
	&::after{
		transform:translateX(-50%)rotate(-45deg);
	};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		top: 44px;
		right: 44px;
	};
	
	@keyframes rotateClose {
		0%{
			transform:rotate(0deg);
		}
		25%{
			transform:rotate(10deg);
		}
		50%{
			transform:rotate(0deg);
		}
		70%{
			transform:rotate(-10deg);
		}
		100%{
			transform:rotate(0deg);
		}
	}
`;

const CloseMenu: FC<ICloseMenu> = (props) => {
	return (
		<StyledCloseMenu {...props} />

	);
};

export default CloseMenu;