import React from 'react';
import styled from 'styled-components';
import Dot from '../../Dot';


const StyledHeaderYelllowDot = styled.div`
	position: absolute;
	top: 7px;
	right: 12px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:none;
	};
`


const HeaderYelllowDot = () => {
	return (
		<StyledHeaderYelllowDot>
			<Dot />
		</StyledHeaderYelllowDot>
	);
};

export default HeaderYelllowDot;