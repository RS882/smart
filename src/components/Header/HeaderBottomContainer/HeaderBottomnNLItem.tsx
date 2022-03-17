import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Flex from '../../Flex';
import { IHeaderBottomItem } from './HeaderBottom';
import HeaderBottomItem from './HeaderBottomItem';




const StyledHeaderBottomItem = styled(Flex)`
position: relative;
	width: 64px;
	height: 64px;
	background-color:${props => props.theme.color.darkBlue || '#2A5275'};
	color:'#BFCBD6';
`;



const HeaderBottomNLItem: FC<IHeaderBottomItem> = (props) => {

	let location = useLocation();
	const itemName: string = `/${props.name}`;
	const itemColor: string = location.pathname === itemName ? theme.color.text.mainLight : '#BFCBD6';

	return (
		<StyledHeaderBottomItem>
			<NavLink to={itemName} style={{ color: itemColor }}>
				<HeaderBottomItem {...props} />
			</NavLink>
		</StyledHeaderBottomItem>
	);
};

export default HeaderBottomNLItem;