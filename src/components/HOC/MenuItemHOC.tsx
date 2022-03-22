import React, { FC } from 'react';

type IMenuItem = { [property: string]: string };
interface IComponentProps {
	item_name: string;
	item_text: string;
	attrFirst: boolean;
	attrLast: boolean;
};
interface MenuItemProps {
	items: IMenuItem;
	Component: React.FC<IComponentProps>;
};
export interface ImenuItemArray {
	itemName: string;
	itemText: string;
};

const MenuItemHOC: FC<MenuItemProps> = (props) => {
	const menuItemArray: ImenuItemArray[] = Object.entries(props.items).map(e => ({ itemName: e[0], itemText: e[1] }))
	const MenuItemElem: JSX.Element[] = menuItemArray.map((e, i, arr) => {
		const attrFirst = (i === 0) || false;
		const attrLast = (i === arr.length - 1) || false;
		return <props.Component key={e.itemName + i} item_name={e.itemName} item_text={e.itemText}
			attrFirst={attrFirst} attrLast={attrLast} />
	})

	return (
		<>
			{MenuItemElem}
		</>
	);
};

export default MenuItemHOC;