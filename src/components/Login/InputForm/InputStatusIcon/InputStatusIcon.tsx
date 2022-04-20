import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';




interface IInputStatusIcon {
	Component?: FC;
	color: string;
};

const StyledInputStatusIcon = styled(Flex) <IInputStatusIcon>`
	flex: 0 0 40px;
	height: 48px;
	border: 1px solid ${props => props.color || 'none'};
	border-left:none;
	border-radius:0 4px 4px 0;
`;

const StyledComponetWrapper = styled(Flex)`
	width: 24px;
	height: 24px;
`;

const InputStatusIcon: FC<IInputStatusIcon> = (props) => {
	return (
		<StyledInputStatusIcon color={props.color}>
			{props.Component ? <StyledComponetWrapper><props.Component /></StyledComponetWrapper> : null}
		</StyledInputStatusIcon>
	);
};

export default InputStatusIcon;