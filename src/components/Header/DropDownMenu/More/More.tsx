import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';
import ActionsContainer from './../../HeaderAction/ActionContainer';
import MoreMenu from './MoreMenu';

const StyledMore = styled(Flex)`
	
	width: 100%;
	padding-top: 30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding-top: 50px;
	};
`

const More: FC = (props) => {
	return (
		<StyledMore direction='column' justufy='flex-start' align='flex-start' >
			<ActionsContainer />
			<MoreMenu />
		</StyledMore>
	);
};

export default More;