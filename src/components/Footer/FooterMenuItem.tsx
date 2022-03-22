import React, { FC } from 'react';
import { IMenuItemProps } from './../../types/globalTypes';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooterMenuItem = styled(NavLink) <IMenuItemProps>`
	margin-bottom:${props => props.attrLast ? '0px' : '5px'};
	transition:color 0.3s ease 0s;
		&:hover{
			color:${props => props.theme.color.yellow}
		}
`;


const FooterMenuItem: FC<IMenuItemProps> = (props) => {

	return (
		<StyledFooterMenuItem to={`/${props.item_name}`} {...props}>
			{props.item_text}</StyledFooterMenuItem>
	);
};

export default FooterMenuItem;