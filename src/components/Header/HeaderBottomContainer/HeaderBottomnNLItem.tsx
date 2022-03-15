import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../../Flex';
import { IHeaderBottomItem } from './HeaderBottom';





const StyledHeaderBottomItem = styled(Flex)`
	width: 64px;
	height: 64px;
	background-color:${props => props.theme.color.darkBlue || '#2A5275'};
	color:'#BFCBD6';
`


const StyledHBItemText = styled.div`
	font-size:13px;
	text-transform:capitalize;
	
`
const StyledHBItemIcon = styled.div`
	font-size:24px;
	margin-bottom:5px;
`

const HeaderBottomNLItem: FC<IHeaderBottomItem> = (props) => {
	return (
		<StyledHeaderBottomItem>
			<NavLink to={`/${props.name}`} style={{ color: '#BFCBD6' }}>
				<Flex direction='column'>
					<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
					<StyledHBItemText>{props.itemText}</StyledHBItemText>
				</Flex>
			</NavLink>
		</StyledHeaderBottomItem>
	);
};

export default HeaderBottomNLItem;