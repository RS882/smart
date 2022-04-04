import React, { FC } from 'react';
import styled from 'styled-components';
import { strings } from '../../../../localization/localization';


import Flex from '../../../Flex';
import MoreMenuItem from './MoreMenuItem';

const StyledMoreMenu = styled(Flex)`
	margin-top:20px;
	width: 100%;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top: 0px;
	};
`;


const menuMoreItems = Object.entries(strings.header.dropMoreMenu).map((e, i) =>
	<MoreMenuItem key={e[0] + i} menuItem={e} />
);




const MoreMenu: FC = (props) => {
	return (
		<StyledMoreMenu direction='column' justufy='flex-start' align='flex-start'>
			{menuMoreItems}
		</StyledMoreMenu>
	);
};

export default MoreMenu;