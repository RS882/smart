import React, { FC } from 'react';
import styled from 'styled-components';
import { IMoreMenuItem } from '../../../../types/HeaderTypes';
import Flex from '../../../Flex';
import MoreMenuItem from './MoreMenuItem';

const StyledMoreMenu = styled(Flex)`
	margin-top:20px;
	width: 100%;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top: 50px;
	};
`;

const menuItemText: IMoreMenuItem = {
	menuText: 'меню еще',
	subMenu: [
		{ sub1: 'sub1slkdjalsjda;ldjaldaj;d  lazsfasfafasdasdsd', },
		{ sub2: 'sub1', },
		{ sub3: 'sub1', },
		{ sub4: 'sub1', },
		{ sub5: 'sub1', },
		{ sub6: 'sub1', },
	]

}

const MoreMenu: FC = (props) => {
	return (
		<StyledMoreMenu direction='column' justufy='flex-start' align='flex-start'>
			<MoreMenuItem menuItemText={menuItemText} />
		</StyledMoreMenu>
	);
};

export default MoreMenu;