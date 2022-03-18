import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import HeaderMenuItem from './HeaderMenuItem';


export interface IMenuItem {
	itemName: string;
	itemText: string;
};

interface IHeaderMenuItems {
	menuItemArray: IMenuItem[];
};

const StyledHeaderMenuItems = styled(Flex)`
position: relative;
	height: 100%;
	width: 100%;
`;



const HeaderMenuItems: FC<IHeaderMenuItems> = (props) => {

	const MenuItemElem = props.menuItemArray.map((e, i) => {
		const attrFirst = i === 0 || false;

		return <HeaderMenuItem key={e.itemName + i} itemName={e.itemName} itemText={e.itemText} attrFirst={attrFirst} />
	})
	return (
		<StyledHeaderMenuItems justufy='flex-start' >
			{MenuItemElem}
		</StyledHeaderMenuItems>
	);
};

export default HeaderMenuItems;