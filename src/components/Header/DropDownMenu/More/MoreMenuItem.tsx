import React, { FC } from 'react';
import styled from 'styled-components';
import { IMoreMenuItem } from '../../../../types/HeaderTypes';
import Flex from '../../../Flex';
import WithoutSubmenuItem from './WithoutSubmenuItem';
import { useAppDispatch } from './../../../../redux/hooks';

import { changeIsModal } from '../../../../redux/ModalSlice';
import { closeMenu } from '../../../../redux/MenuSlice';
import { useNavigate } from 'react-router';
import WithSubMenu from './WithSubMenu';



export interface IMenuMore {
	menuItemText: IMoreMenuItem;
};

const StyledMoreMenuItem = styled(Flex)`
	width: 100%;
	
`;

const MoreMenuItem: FC<IMenuMore> = (props) => {


	const isSubMenu = 'subMenu' in props.menuItemText;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onClickMenuItemMore = (pageName: string) => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
		navigate(`/${pageName}`);
	}


	return (
		<StyledMoreMenuItem >
			{isSubMenu ? <WithSubMenu menuItemText={props.menuItemText}
				onClickMenuItemMore={onClickMenuItemMore} /> :
				<WithoutSubmenuItem menuItemText={props.menuItemText}
					onClickMenuItemMore={onClickMenuItemMore} />
			}

		</StyledMoreMenuItem >
	);
};

export default MoreMenuItem;