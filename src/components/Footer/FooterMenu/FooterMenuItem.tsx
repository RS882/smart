import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IMenuItemProps } from '../../../types/globalTypes';

interface IFooterMenuItemProps {
	$attr_last: boolean;
}

const StyledFooterMenuItem = styled(NavLink) <IFooterMenuItemProps>`
	margin-bottom:${props => props.$attr_last ? '0px' : '5px'};
	transition:color 0.3s ease 0s;
		&:hover{
			color:${props => props.theme.color.yellow}
		}
`;


const FooterMenuItem: FC<IMenuItemProps> = (props) => {

	return (
		<StyledFooterMenuItem to={`/${props.item_name}`} $attr_last={props.$attr_last}>
			{props.item_text}</StyledFooterMenuItem>
	);
};

export default FooterMenuItem;