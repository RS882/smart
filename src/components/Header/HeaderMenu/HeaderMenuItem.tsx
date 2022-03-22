import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IMenuItemProps } from '../../../types/globalTypes';
import Flex from '../../Flex';



const StyledHeaderMenuItem = styled(Flex) <IMenuItemProps>`
	color:${props => props.theme.color.text.mainLight || '#fff'};
	margin-right:${props => props.attrFirst ? '24px' : '20px'};
	padding:${props => props.attrFirst ? '0px ' : '0 10px'};
	border-radius: ${props => props.attrFirst ? 'none' : '4px'};
	text-transform: capitalize;
	height:100%;
	width:${props => props.attrFirst ? '310px' : ''};
	transition: background-color 0.3s ease 0s;
	background-color:${props => props.attrFirst ? '#243C53' : ''};
	&:hover{
		color:${props => props.attrFirst ? props.theme.color.yellow : ''};
		background-color:${props => props.attrFirst ? '#243C53' : props.theme.color.darkBlue || '#2A5275'};
	};
	
`
const StyledLink = styled(NavLink)`
	height: 100%;
`;
const StyledIcon = styled.div`
	font-size:24px;
	margin: 0 10px 0 20px;
`

const HeaderMenuItem: FC<IMenuItemProps> = (props) => {

	return (
		<StyledLink to={`/${props.item_name}`} >
			<StyledHeaderMenuItem {...props} justufy='flex-start'>
				{props.attrFirst && <StyledIcon className='_icon-catalog'></StyledIcon>}
				{props.item_text}
			</StyledHeaderMenuItem>
		</StyledLink>
	);
};

export default HeaderMenuItem;