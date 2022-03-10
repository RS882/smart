import React, { FC } from 'react';
import styled from 'styled-components';


interface FlexProps {
	direction?: string,
	justufy?: string,
	align?: string,
	margin?: string,
};

const StyledFlex = styled.div<FlexProps>`
	display: flex;
	flex-direction:${props => props.direction || 'row'};
	justify-content:${props => props.justufy || 'center'};
	align-items:${props => props.align || 'center'};
	margin:${props => props.margin || '0px'};
`;

const Flex: FC<FlexProps> = (props) => {

	return <StyledFlex {...props} />
};

export default Flex;