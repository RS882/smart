import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Flex from '../Flex';



const StyledDropDownMenuHOC = styled(Flex)`
	border: 1px solid red;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 300;
`;


const DropDownMenuHOC: FC = (props) => {

	;

	return (
		<Container>
			<StyledDropDownMenuHOC >

			</StyledDropDownMenuHOC>
		</Container>
	)
}
export default DropDownMenuHOC;
