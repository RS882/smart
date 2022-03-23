import React, { FC } from 'react';
import Flex from '../../Flex';
import styled from 'styled-components';
import ActionsContainer from './ActionContainer';


const StyledHeaderAC = styled(Flex)`
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: flex;
	};
`


const HeaderActionsContainer: FC = () => {

	return (
		<StyledHeaderAC>
			<ActionsContainer />
		</StyledHeaderAC>
	);
};

export default HeaderActionsContainer;