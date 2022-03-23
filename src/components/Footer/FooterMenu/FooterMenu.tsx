import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import { IFooterMenu } from '../../../types/LocalizationTypes';
import MenuItemHOC from '../../HOC/MenuItemHOC';
import FooterMenuItem from './FooterMenuItem';

interface FooterMenuProps {
	items: IFooterMenu;
}

const StyledTitle = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 100%;
	color:#838688;
	margin-bottom:20px;
`;



const FooterMenu: FC<FooterMenuProps> = (props) => {

	return (
		<Flex justufy='flex-start' direction='column' align='flex-start'>
			<StyledTitle> {props.items.titleName}</StyledTitle>
			<Flex justufy='flex-start' direction='column' align='flex-start'>
				<MenuItemHOC items={props.items.item} Component={FooterMenuItem} />
			</Flex>
		</Flex>
	);
};

export default FooterMenu;