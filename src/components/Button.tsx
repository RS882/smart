import React from 'react';
import styled from 'styled-components';
import Flex from './Flex';



const StyledButton = styled.button`
	width:;
	height:;
	color:;
	border: ;
	border-radius: 4px;
line-height:;
background-color:;
`


const Button = (children, ...props) => {
	return (
		<StyledButton {...props} >
			<Flex>{children}</Flex>
		</StyledButton>
	);
};

export default Button;