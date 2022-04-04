import React, { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';


interface CatalogMenuItemProps {
	iconClass: string;
	menuItem: { [propetry: string]: string };
	onClickCatalogItem: (itemType: string) => void;
};



const CatalogMenuItem: FC<CatalogMenuItemProps> = (props) => {

	const btnText: [string, string][] = Object.entries(props.menuItem);

	const spanElem: JSX.Element[] = Array(25).fill('path').map((e, i) =>
		<span key={e + i} className={`${e}${i + 1}`}></span>)



	return (
		<li>
			<button onClick={() => props.onClickCatalogItem(btnText[0][0])}>
				<div className={props.iconClass}>
					{spanElem}
				</div>
				<div>{btnText[0][1]}</div>
			</button>
		</li>
	);
};

export default CatalogMenuItem;