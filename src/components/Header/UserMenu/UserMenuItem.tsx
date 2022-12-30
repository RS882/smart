import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuItemProps } from '../../../types/globalTypes';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { openUserMenu } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';
import { setLogOut } from '../../../redux/LoginSlice';
import { selectFavoritedItem } from '../../../redux/ActionSlice';
import { setOrderMessage } from '../../../redux/CartSlice';

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
	const favotiteItem = useAppSelector(selectFavoritedItem);

	const onClickBtn = (): void => {
		dispatch(openUserMenu(false));
		dispatch(changeIsBodyLock(false));

		const logOut = (): void => {
			dispatch(setLogOut());
			navigate(`/`);
			sessionStorage.clear();
			localStorage.clear();
		};

		const gotoMenuItem = (): string => {
			let res = props.item_name
			if (props.item_name === 'favorites' && favotiteItem.length === 0) {
				dispatch(setOrderMessage('You have no selected goods'));
				res = '';
			}
			return res;
		}
		//  

		// dispatch(setOrderMessage('You have no selected goods'));
		props.$attr_last ? logOut() : navigate(`/privateOffice/${gotoMenuItem()}`);
	};


	return (
		<StyledUserItem $attr_last={props.$attr_last}>
			<button onClick={onClickBtn}>{props.item_text}</button>
		</StyledUserItem>
	);
};

export default UserMenuItem;