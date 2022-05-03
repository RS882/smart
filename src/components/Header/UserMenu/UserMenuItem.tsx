import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuItemProps } from '../../../types/globalTypes';

import { NavLink } from 'react-router-dom';

interface IHeaderMenuItemProps {
	$attr_last: boolean;
};

const StyledUserItem = styled(NavLink) <IHeaderMenuItemProps>`
	display:flex;
	height: 54px;
	width: 100%;
	align-items:center;
	padding-left:20px;
	color: ${props => props.$attr_last ? props.theme.color.red : props.theme.color.text.main};
	border-top:1px solid ${props => props.$attr_last ? props.theme.color.cardBorder : 'transparent'};
	background-color: ${props => props.theme.color.bg.main || '#fff'};
	transition:background-color 0.3s ease 0s;
	&:hover{
		background-color: ${props => props.theme.color.lightBlue || '#EDF2F6'};
	}
	
`
const UserMenuItem: FC<IMenuItemProps> = (props) => {
	return (
		<StyledUserItem to={`/${props.item_name}`} $attr_last={props.$attr_last}>
			{props.item_text}
		</StyledUserItem>
	);
};

export default UserMenuItem;