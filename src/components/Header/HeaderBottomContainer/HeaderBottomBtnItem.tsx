import React, { FC } from 'react';

import styled from 'styled-components';
import { theme } from '../../../theme';
import Button, { ButtonProps } from '../../Button';
import Flex from '../../Flex';


import { IHeaderBottomItem } from './HeaderBottom';


interface IHeaderBottomBtnItem extends ButtonProps, IHeaderBottomItem {
	onClickBottomItem: (name?: string) => void;
}

const StyledHeaderBottomItem = styled(Button)`
	font-size:13px;
	
	&:focus{
		color:${props => props.theme.color.text.mainLight || '#FFF'};
	}
`;

const StyledHBItemText = styled.div`
	font-size:13px;
	text-transform:capitalize;
`
const StyledHBItemIcon = styled.div`
	font-size:24px;
	margin-bottom:5px;
`



const HeaderBottomBtnItem: FC<IHeaderBottomBtnItem> = (props) => {



	return (

		<StyledHeaderBottomItem onClick={props.onClickBottomItem}
			width='64px' height='64px' color='#BFCBD6' border='none'
			bgColor={theme.color.darkBlue || '#2A5275'} borderRadius='none'
			hoverBgColor='none' hoverColor={theme.color.text.mainLight || '#FFF'}>
			<Flex direction='column' >
				<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
				<StyledHBItemText>{props.itemText}</StyledHBItemText>
			</Flex>
		</StyledHeaderBottomItem>

	);
};

export default HeaderBottomBtnItem;