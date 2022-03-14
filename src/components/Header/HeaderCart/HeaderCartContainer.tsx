import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { selectCartCount } from '../../../redux/ActionSlice';

import Flex from '../../Flex';

import HeaderCart from './HeaderCart';
;


const StyledHeaderCartContainer = styled(Flex)`
	
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display: flex;
	};
`;

const HeaderCartContainer = () => {
	const count = useSelector(selectCartCount);
	return (
		<StyledHeaderCartContainer>
			<HeaderCart count={count} />
		</StyledHeaderCartContainer>
	);
};

export default HeaderCartContainer;