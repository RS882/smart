import React, { FC } from 'react';
import styled from 'styled-components';


interface ContainerProps {
	bgColor?: string,
};

const StyledContainer = styled.div<ContainerProps>`
	border: 1px solid #fff;
	margin: 0 auto;
	box-sizing: content-box;
	max-width: none;
	width: 100%;
	height: 100%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			max-width: ${props => props.theme.width.maxContainer || '1300px'};
	};
`;
const Container: FC<ContainerProps> = (props) => {
	return <StyledContainer {...props} />;
};

export default Container;