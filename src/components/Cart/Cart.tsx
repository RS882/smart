import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { StyledMain } from './../Main/Main';


const StyledCartContainer = styled.div`

	border: 1px solid #000;
	display:flex;
`

const Cart: FC = (props) => {



	return (
		<StyledMain>
			<Container>
				<StyledCartContainer>
					cartsOFJAPFASDPFADPJFADPGJDFGJPADGJGDPGFAG
				</StyledCartContainer>
			</Container>
		</StyledMain>
	);
};

export default Cart;
