import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import { IFooterMenu } from '../../types/LocalizationTypes';

const StyledTitle = styled.h3`
`


const FooterMenu: FC<IFooterMenu> = (props) => {
	const menuItems = Object.entries(props.item);
	return (
		<Flex justufy='flex-start' direction='column' align='flex-start'>
			<StyledTitle> {props.titleName}</StyledTitle>
			<Flex justufy='flex-start' direction='column' align='flex-start'>
				{menuItems}
			</Flex>
		</Flex>
	);
};

export default FooterMenu;