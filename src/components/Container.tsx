import React, { FC } from 'react';
import styled from 'styled-components';


interface ContainerProps {
	bgColor?: string,
};

const StyledContainer = styled.div<ContainerProps>`
/* border: 1px solid ${props => props.bgColor || props.theme.color.bg.main || `#fff`}; */
margin: 0 auto;
box-sizing: content-box;
max-width: none;

background-color: ${props => props.bgColor || props.theme.color.bg.main || `#fff`};
@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		max-width: ${props => props.theme.width.maxContainer + 'px' || '1300px'};
		padding: 0 ${props => props.theme.width.containerPadding + 'px' || '20px'};
};
`;


const Container: FC<ContainerProps> = (props) => {
	return <StyledContainer {...props} />;
};

export default Container;