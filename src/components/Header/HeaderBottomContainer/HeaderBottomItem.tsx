import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from './../../Flex';
import { IHeaderBottomItem } from './HeaderBottom';
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
	return (
		<Flex direction='column'>
			<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
			<StyledHBItemText>{props.itemText}</StyledHBItemText>
			{props.name === 'cart' && <HeaderYelllowDot />}
		</Flex>


	);
};

export default HeaderBottomItem;