import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';
import Flex from './../../Flex';

import HeaderYelllowDot from './HeaderYelllowDot';



const StyledHBItemText = styled.div`
	font-size:13px;
	text-transform:capitalize;
	
`
const StyledHBItemIcon = styled.div`
	font-size:24px;
	margin-bottom:5px;
	
`


const HeaderBottomItem: FC<IHeaderBottomItem> = (props) => {

	const isShowDot = (props.name === 'cart' && props.isCartFull) || (props.name === 'more' && props.isMoreFull);

	return (
		<Flex direction='column'>
			<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
			<StyledHBItemText>{props.itemText}</StyledHBItemText>
			{isShowDot && < HeaderYelllowDot />}
		</Flex>


	);
};

export default HeaderBottomItem;