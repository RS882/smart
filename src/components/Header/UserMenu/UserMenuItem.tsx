import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuItemProps } from '../../../types/globalTypes';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../redux/hooks';
import { openUserMenu } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';
import { setLogOut } from '../../../redux/LoginSlice';

interface IHeaderMenuItemProps {
	$attr_last: boolean;
};

const StyledUserItem = styled.div <IHeaderMenuItemProps>`
	display:flex;
	height: 54px;
	width: 100%;
	align-items:center;
	
	color: ${props => props.$attr_last ? props.theme.color.red : props.theme.color.text.main};
	border-top:1px solid ${props => props.$attr_last ? props.theme.color.cardBorder : 'transparent'};
	background-color: ${props => props.theme.color.bg.main || '#fff'};
	transition:background-color 0.3s ease 0s;
	& button{
		display: block;
		width: 100%;;
		height: 100%;
		text-align:start;
		padding-left:20px;
	
	};
	&:hover{
		background-color: ${props => props.theme.color.lightBlue || '#EDF2F6'};
		& button{
			background-color:inherit;
	};
	};
	
`;

const UserMenuItem: FC<IMenuItemProps> = (props) => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onClickBtn = () => {
		dispatch(openUserMenu(false));
		dispatch(changeIsBodyLock(false));
		props.$attr_last ? dispatch(setLogOut()) :
			//navigate(`/privateOffice`);
			navigate(`/privateOffice/${props.item_name}`);
	};


	return (
		<StyledUserItem $attr_last={props.$attr_last}>
			<button onClick={onClickBtn}>{props.item_text}</button>
		</StyledUserItem>
	);
};

export default UserMenuItem;