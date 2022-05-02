import React, { FC } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserMenuText } from '../../../redux/LanguageSlice';



const UserMenuContainer: FC = (props) => {

	const userMenuItemtext = useAppSelector(selectUserMenuText);

	return (
		<div>

		</div>
	);
};

export default UserMenuContainer;