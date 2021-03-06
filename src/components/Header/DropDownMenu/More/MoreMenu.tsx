import React, { FC } from 'react';
import styled from 'styled-components';



import Flex from '../../../Flex';
import MoreMenuItem from './MoreMenuItem';
import { selectLangStiringsHeaderDropMoreMenu } from './../../../../redux/LanguageSlice';
import { useAppSelector } from '../../../../redux/hooks';

const StyledMoreMenu = styled(Flex)`
	margin-top:20px;
	width: 100%;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top: 0px;
	};
`;



const MoreMenu: FC = (props) => {

	const dropMoreMenu = useAppSelector(selectLangStiringsHeaderDropMoreMenu);
	const dropMoreMenuType = dropMoreMenu !== null ? dropMoreMenu : {}

	const menuMoreItems = Object.entries(dropMoreMenuType).map((e, i) =>
		<MoreMenuItem key={e[0] + i} menuItem={e} />
	);
	return (
		<StyledMoreMenu direction='column' justufy='flex-start' align='flex-start'>
			{menuMoreItems}
		</StyledMoreMenu>
	);
};

export default MoreMenu;