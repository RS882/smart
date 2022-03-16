import React from 'react';
import styled from 'styled-components';
import Dot from '../../Dot';


const StyledHeaderYelllowDot = styled.div`
	position: absolute;
	top: 7px;
	right: 12px;
`


const HeaderYelllowDot = () => {
	return (
		<StyledHeaderYelllowDot>
			<Dot />
		</StyledHeaderYelllowDot>
	);
};

export default HeaderYelllowDot;