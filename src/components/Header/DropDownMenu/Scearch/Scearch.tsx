import React, { FC } from 'react';
import styled from 'styled-components';
import ScearchForm from './ScearchForm';

const StyledScearch = styled.div`
	border: 1px solid #000;
	width: 100%;
	margin-top:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top:50px;
	};
`

const Scearch: FC = (props) => {
	return (
		<StyledScearch>
			<ScearchForm />
		</StyledScearch>
	);
};

export default Scearch;