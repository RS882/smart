import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuMoreWithoutSub } from './MoreMenuItem';



export interface WithoutSubmenuItemProps {
	menuItem: IMenuMoreWithoutSub;
	onClickMenuItemMore: (e: string) => void;
}

const StylyedWithoutSubmenuItem = styled.button`
	width: 100%;
	height: 100%;
	padding: 15px 0;
	text-align: start;
	text-transform: capitalize;
	transition: all 0.3s ease 0s;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	&:hover,
	&:focus{
		background-color:${props => props.theme.color.blue};
		color:${props => props.theme.color.text.mainLight};
		border-radius:4px;
		padding-left:10px;
		border-bottom: none;
	}
`
const WithoutSubmenuItem: FC<WithoutSubmenuItemProps> = (props) => {

	const propsArr = Object.entries(props.menuItem);



	return (
		<StylyedWithoutSubmenuItem onClick={() => props.onClickMenuItemMore(propsArr[0][0])}>
			{propsArr[0][1]}
		</StylyedWithoutSubmenuItem>
	);
};

export default WithoutSubmenuItem;