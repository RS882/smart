import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';

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
const onClickSearch: ArrowFn = () => {
	console.log('search');

}

const HeaderSeachContainer: FC<IHeaderSeachContainer> = (props) => {
	return (
		<StyledHeaderSeachContainer>
			<HeaderSeach btnSearch={props.btnSearch} onClickSearch={onClickSearch} />
		</StyledHeaderSeachContainer>
	);
};

export default HeaderSeachContainer;