import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';
import Flex from './../../Flex';
import HeaderYelllowDot from './HeaderYelllowDot';

interface ShowDotProps {
	name: string;
}

const StyledHBItemText = styled.div`
	font-size:13px;
	text-transform:capitalize;
	
`;
const StyledHBItemIcon = styled.div`
	font-size:24px;
	margin-bottom:5px;
	
`;

const StyledShowDot = styled.div<ShowDotProps>`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:${props => props.name === 'more' && 'none'};
	};

`


const HeaderBottomItem: FC<IHeaderBottomItem> = (props) => {

	const isShowDot = (props.name === 'cart' && props.isCartFull) || (props.name === 'more' && props.isMoreFull);

	return (
		<Flex direction='column'>
			<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
			<StyledHBItemText>{props.itemText}</StyledHBItemText>
			<StyledShowDot name={props.name}>
				{isShowDot && < HeaderYelllowDot />}
			</StyledShowDot>
		</Flex>


	);
};

export default HeaderBottomItem;