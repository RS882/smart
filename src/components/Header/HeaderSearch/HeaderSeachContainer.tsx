import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';

import Flex from '../../Flex';

import HeaderSeach from './HeaderSeach';
import { useDispatch } from 'react-redux';
import { openDesktopScearch } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';

interface IHeaderSeachContainer {
	btnSearch: string | null;
}

const StyledHeaderSeachContainer = styled(Flex)`
	margin: 22px 8px 16px 0px;
	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display: flex;
	};
`;


const HeaderSeachContainer: FC<IHeaderSeachContainer> = (props) => {
	const dispatch = useDispatch();
	const onClickSearch: ArrowFn = () => {
		dispatch(openDesktopScearch(true));
		dispatch(changeIsBodyLock(true))
	};
	return (
		<StyledHeaderSeachContainer>
			<HeaderSeach btnSearch={props.btnSearch} onClickSearch={onClickSearch} />
		</StyledHeaderSeachContainer>
	);
};

export default HeaderSeachContainer;