import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderStings } from '../../../localization/localization';
import Flex from '../../Flex';
import HeaderSeach from './HeaderSeach';

interface IHeaderSeachContainer {
	btnSearch: string;
}

const StyledHeaderSeachContainer = styled(Flex)`
	margin: 22px 8px 16px 0px;
	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display: flex;
	};
`;

const HeaderSeachContainer: FC<IHeaderSeachContainer> = (props) => {
	return (
		<StyledHeaderSeachContainer>
			<HeaderSeach btnSearch={props.btnSearch} />
		</StyledHeaderSeachContainer>
	);
};

export default HeaderSeachContainer;