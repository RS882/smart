import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Button, { ButtonProps } from '../../Button';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';

import HeaderBottomItem from './HeaderBottomItem';
import { ArrowFn } from '../../../types/fnTypes';


interface IHeaderBottomBtnItem extends ButtonProps, IHeaderBottomItem {
	onClickBottomItem: ArrowFn;
}

const StyledHeaderBottomItem = styled(Button)`
	font-size:13px;
	position: relative;
	&:focus{
		color:${props => props.theme.color.text.mainLight || '#FFF'};
	}
`;



const HeaderBottomBtnItem: FC<IHeaderBottomBtnItem> = (props) => {

	return (

		<StyledHeaderBottomItem onClick={props.onClickBottomItem}
			width='64px' height='64px' color='#BFCBD6' border='none'
			bgColor={theme.color.darkBlue || '#2A5275'} borderRadius='none'
			hoverBgColor='none' hoverColor={theme.color.text.mainLight || '#FFF'}>
			<HeaderBottomItem {...props} />
		</StyledHeaderBottomItem>

	);
};

export default HeaderBottomBtnItem;