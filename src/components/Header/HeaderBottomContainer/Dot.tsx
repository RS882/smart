import React, { FC } from 'react';
import styled from 'styled-components';

interface IDot {
	bgColor?: string;
}

const StyledDot = styled.div<IDot>`
	width: 4px;
	height:4px;
	border-radius:50%;
	background-color:${props => props.bgColor || '#BFCBD6'};
`


const Dot: FC<IDot> = (props) => {
	return (
		<StyledDot />

	);
};

export default Dot;