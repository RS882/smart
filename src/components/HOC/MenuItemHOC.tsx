import React, { FC } from 'react';

type IMenuItem = { [property: string]: string };
interface IComponentProps {
	item_name: string;
	item_text: string;
	$attrFirst: boolean;
	$attr_last: boolean;
};
interface MenuItemProps {
	items: IMenuItem | null;
	Component: React.FC<IComponentProps>;
};
export interface ImenuItemArray {
	itemName: string;
	itemText: string;
};


const MenuItemHOC: FC<MenuItemProps> = (props) => {
	const items = props.items !== null ? props.items : { '': '' };
	const menuItemArray: ImenuItemArray[] = Object.entries(items).map(e => ({ itemName: e[0], itemText: e[1] }))
	const MenuItemElem: JSX.Element[] = menuItemArray.map((e, i, arr) => {
		const attrFirst: boolean = (i === 0) || false;
		const attrLast: boolean = (i === arr.length - 1) || false;
		return <props.Component key={e.itemName + i} item_name={e.itemName} item_text={e.itemText}
			$attr_last={attrLast} $attrFirst={attrFirst} />
	})

	return (
		<>
			{MenuItemElem}
		</>
	);
};

export default MenuItemHOC;