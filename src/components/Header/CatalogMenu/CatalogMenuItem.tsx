import React, { FC } from 'react';
import styled from 'styled-components';



interface CatalogMenuItemProps {
	iconClass: string;
	menuItem: { [propetry: string]: string };
	onClickCatalogItem: (itemType: string) => void;
};

const StyledBtn = styled.button`
	display:flex;
	width: 100%;
	height: 48px;
	align-items:center;
	transition: background-color 0.3s ease 0s;

	&:hover{
		background-color:#DAE4ED;
	}
`;

const StyledItemIcon = styled.div`
	margin:0 10px 0 18px;
	font-size: 32px;
`;


const CatalogMenuItem: FC<CatalogMenuItemProps> = (props) => {

	const btnText: [string, string][] = Object.entries(props.menuItem);
	const spanElem: JSX.Element[] = Array(25).fill('path').map((e, i) =>
		<span key={e + i} className={`${e}${i + 1}`}></span>);

	return (
		<li>
			<StyledBtn onClick={() => props.onClickCatalogItem(btnText[0][0])}>
				<StyledItemIcon className={props.iconClass}>
					{spanElem}
				</StyledItemIcon>
				<div>{btnText[0][1]}</div>
			</StyledBtn>
		</li>
	);
};

export default CatalogMenuItem;