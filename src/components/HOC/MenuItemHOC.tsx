import React, { FC } from 'react';
interface IComponentProps {
	itemName: string;
	itemText: string;
	attrFirst: boolean;
}
interface MenuItemProps {
	items: string[];
	Component: React.FC<IComponentProps>;
};
interface ImenuItemArray {
	itemName: string;
	itemText: string;
}

const MenuItemHOC: FC<MenuItemProps> = (props) => {
	const menuItemArray: ImenuItemArray[] = Object.entries(props.items).map(e => ({ itemName: e[0], itemText: e[1] }))
	const MenuItemElem: JSX.Element[] = menuItemArray.map((e, i) => {
		const attrFirst = i === 0 || false;
		return <props.Component key={e.itemName + i} itemName={e.itemName} itemText={e.itemText} attrFirst={attrFirst} />
	})

	return (
		<>
			{MenuItemElem}
		</>
	);
};

export default MenuItemHOC;