import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
	return (
		<StyledHeaderBottomItem>
			<NavLink to={`/${props.name}`} style={{ color: '#BFCBD6' }}>
				<HeaderBottomItem {...props} />
			</NavLink>
		</StyledHeaderBottomItem>
	);
};

export default HeaderBottomNLItem;