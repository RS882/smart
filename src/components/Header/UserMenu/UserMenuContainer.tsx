import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserMenuText } from '../../../redux/LanguageSlice';
import MenuItemHOC from '../../HOC/MenuItemHOC';
import UserMenuItem from './UserMenuItem';


const StyledUserMenuContainer = styled.div`
	display:flex;
	width: 100%;
	flex-direction:column;
	border: 1px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
	overflow:hidden;
	border-radius: 0 0 4px 4px;
`


const UserMenuContainer: FC = (props) => {

	const userMenuItemtext = useAppSelector(selectUserMenuText);

	return (
		<StyledUserMenuContainer>
			<MenuItemHOC items={userMenuItemtext} Component={UserMenuItem} />
		</StyledUserMenuContainer>
	);
};

export default UserMenuContainer;