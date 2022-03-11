import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';


const StyledHeaderBottom = styled(Flex)`
	position: fixed;
	bottom: 0;
	left: 0;
	max-height: 64px;
	background-color: ${props => props.theme.color.darkBlue || '#2A5275'};
	color: ${props => props.theme.color.text.mainLight || '#FFF'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 104px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:none;
	};
	`

const HeaderBottom = () => {
	return (
		<StyledHeaderBottom justufy={'space-between'}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde voluptatem dolorum temporibus est molestiae placeat nulla et nesciunt dignissimos. Ad accusamus suscipit iure rem commodi a eum rerum dicta.
		</StyledHeaderBottom>


	);
};

export default HeaderBottom;