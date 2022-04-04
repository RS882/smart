import React, { FC } from 'react';
import { useNavigate } from 'react-router';

interface CatalogMenuItemProps {
	IconComponent: FC;
	menuItem: { [propetry: string]: string };
}

const CatalogMenuItem: FC<CatalogMenuItemProps> = (props) => {

	const btnText = Object.entries(props.menuItem);
	const navigate = useNavigate();


	return (
		<li>
			<button onClick={() => navigate(`/${btnText[0]}`)}>
				<props.IconComponent />
				<div>{btnText[1]}</div>
			</button>
		</li>
	);
};

export default CatalogMenuItem;