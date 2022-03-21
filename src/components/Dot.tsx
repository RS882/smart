import React, { FC } from 'react';
import styled from 'styled-components';

interface IDot {
	bgColor?: string;
	size?: string;
}

const StyledDot = styled.div<IDot>`
	width: ${props => props.size || '8px'};
	height: ${props => props.size || '8px'};
	border-radius: 50%;
	background-color: ${props => props.theme.color.yellow || '#FBB13C'};
`


const Dot: FC<IDot> = (props) => {
	return (
		<StyledDot {...props} />

	);
};

export default Dot;