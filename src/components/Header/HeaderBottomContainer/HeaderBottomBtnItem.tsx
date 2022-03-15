import React, { FC } from 'react';

import styled from 'styled-components';
import { theme } from '../../../theme';
import Button, { ButtonProps } from '../../Button';
import Flex from '../../Flex';
import Dot from './Dot';

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

const StyledDots = styled(Flex)`
	width:100%;	
	margin-bottom:8px;
	margin-top:20px;
`

const HeaderBottomBtnItem: FC<IHeaderBottomBtnItem> = (props) => {

	const dots: JSX.Element[] = ['1', '1', '1'].map((e, i) => <Dot key={'dot' + e + i} />);

	return (

		<StyledHeaderBottomItem onClick={props.onClickBottomItem}
			width='64px' height='64px' color='#BFCBD6' border='none'
			bgColor={theme.color.darkBlue || '#2A5275'} borderRadius='none'
			hoverBgColor='none' hoverColor={theme.color.text.mainLight || '#FFF'}>
			<Flex direction='column' >
				{props.classItem ?
					<StyledHBItemIcon className={props.classItem}></StyledHBItemIcon>
					: <StyledDots justufy='space-between'>{dots}</StyledDots>}
				<StyledHBItemText>{props.itemText}</StyledHBItemText>
			</Flex>
		</StyledHeaderBottomItem>

	);
};

export default HeaderBottomBtnItem;