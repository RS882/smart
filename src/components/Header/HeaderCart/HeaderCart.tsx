import React, { FC } from 'react';

import styled from 'styled-components';

import Flex from '../../Flex';

import HeaderAction from '../HeaderAction/HeaderAction';


interface IHeaderCart {
	count: number;

};

const StyledHeaderCart = styled(Flex)`
	width: 48px;
	height: 48px;
`;

const HeaderCart: FC<IHeaderCart> = (props) => {

	return (
		<StyledHeaderCart >
			<HeaderAction name='cart' headerActionClassName='_icon-cart' count={props.count} />
		</StyledHeaderCart>
	);
};

export default HeaderCart;