import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuItem } from '../../../types/LocalizationTypes';
import Flex from '../../Flex';
import MenuItemHOC from '../../HOC/MenuItemHOC';
import HeaderMenuItem from './HeaderMenuItem';


interface IHeaderMenuItems {
	strings: IMenuItem | null;

};

const StyledHeaderMenuItems = styled(Flex)`
position: relative;
	height: 100%;
	width: 100%;
`;

const HeaderMenuItems: FC<IHeaderMenuItems> = (props) => {

	return (
		<StyledHeaderMenuItems justufy='flex-start' >
			<MenuItemHOC items={props.strings} Component={HeaderMenuItem} />
		</StyledHeaderMenuItems>
	);
};

export default HeaderMenuItems;