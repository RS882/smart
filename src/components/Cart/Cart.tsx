import React, { FC } from 'react';
import styled from 'styled-components';

const Margin1 = styled.main`
	margin: 150px;
`
const Cart: FC<{ rrr?: string }> = (props) => {

	console.log(props.rrr);

	return (
		<Margin1>
			cart
		</Margin1>
	);
};

export default Cart;
