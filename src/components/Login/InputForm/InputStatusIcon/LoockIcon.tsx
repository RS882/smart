import React, { FC } from 'react';
import styled from 'styled-components';

interface ILockIcon {
	color?: string;
}
const StyledLoockIconWrapper = styled.div<ILockIcon>`
display:flex;
align-items:center;
width: 50px;
height:48px;
border-radius: 4px 0 0 4px;
border: 1px solid  ${props => props.color ? props.color : '#EAEAF0'};
border-right:none;
& span{
	margin-left:24px;
	color: #ADAABF;
	font-size:24px;
}
`;
const LoockIcon: FC<ILockIcon> = (props) => {

	return (
		<StyledLoockIconWrapper {...props}>
			<span className='_icon-lock_icon'></span>
		</StyledLoockIconWrapper>
	);
};

export default LoockIcon;