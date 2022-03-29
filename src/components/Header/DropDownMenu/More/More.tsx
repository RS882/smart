import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';
import ActionsContainer from './../../HeaderAction/ActionContainer';
import MoreMenu from './MoreMenu';

const StyledMore = styled(Flex)`
		width: 100%;
		padding-top: 30px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			padding-top: 35px;
		};
`;

const StyledActionsContainer = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:none;
	};
`

const More: FC = (props) => {
	return (
		<StyledMore direction='column' justufy='flex-start' align='flex-start' >
			<StyledActionsContainer>
				<ActionsContainer />
			</StyledActionsContainer>
			<MoreMenu />
		</StyledMore>
	);
};

export default More;