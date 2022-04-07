import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../../../Flex';
import WithoutSubmenuItem from './WithoutSubmenuItem';
import { useAppDispatch } from './../../../../redux/hooks';

import { changeIsModal } from '../../../../redux/ModalSlice';
import { closeMenu } from '../../../../redux/MenuSlice';
import { useNavigate } from 'react-router';
import WithSubMenu from './WithSubMenu';
import { IMoreMenuItem } from '../../../../types/LocalizationTypes';



export interface IMenuMore {
	menuItem: [string, IMoreMenuItem];
};
export interface IMenuMoreWithoutSub {
	[property: string]: string
}

const StyledMoreMenuItem = styled(Flex)`
	width: 100%;
	text-transform:capitalize;
	
`;

const MoreMenuItem: FC<IMenuMore> = (props) => {


	const isSubMenu = 'subMenu' in props.menuItem[1];
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onClickMenuItemMore = (pageName: string) => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
		navigate(`/${pageName}`);
	}
	const menuItemWithoutSub: IMenuMoreWithoutSub = !isSubMenu ?
		{ [props.menuItem[0]]: props.menuItem[1].menuText } : {};



	return (
		<StyledMoreMenuItem >
			{isSubMenu ? <WithSubMenu menuItem={props.menuItem}
				onClickMenuItemMore={onClickMenuItemMore} /> :
				<WithoutSubmenuItem menuItem={menuItemWithoutSub}
					onClickMenuItemMore={onClickMenuItemMore} />
			}

		</StyledMoreMenuItem >
	);
};

export default MoreMenuItem;