import React from 'react';
import styled from 'styled-components';
import Scearch from './Scearch';

const StyledScearchContainer = styled.div`
		width: 100%;
		margin-top:30px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top:50px;
	};
`

const ScearchContainer = () => {
	return (
		<StyledScearchContainer>
			<Scearch />
		</StyledScearchContainer>
	);
};

export default ScearchContainer;