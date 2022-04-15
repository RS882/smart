import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';
import CloseMenu from './CloseMenu';


interface ICloseMenu {
	onClick: ArrowFn;
};

const StyledCloseMenuContainer = styled.div`
		position: absolute;
	top: 14px;
	right: 14px;
`;

const CloseMenuContainer: FC<ICloseMenu> = (props) => {
	return (
		<StyledCloseMenuContainer>
			<CloseMenu onClick={props.onClick} />
		</StyledCloseMenuContainer>
	);
};

export default CloseMenuContainer;