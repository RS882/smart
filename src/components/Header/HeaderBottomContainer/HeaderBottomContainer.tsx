import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../../Flex';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';

import { IBottomBtn } from './../../../types/LocalizationTypes';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectIsCartFull, selectIsMoreFull } from '../../../redux/ActionSlice';
import { useNavigate } from 'react-router';
import { changeIsModal } from '../../../redux/ModalSlice';
import HeaderBottomBtnItem from './HeaderBottomBtnItem';



interface IHeaderBottom {
	strings: IBottomBtn;

};

const StyledHeaderBottomContainer = styled(Flex)`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 64px;
	z-index:100;
   width: 100%;
	background-color: ${props => props.theme.color.darkBlue || '#2A5275'};
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 104px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:none;
	};
	`

const HeaderBottomContainer: FC<IHeaderBottom> = (props) => {


	const btnArray: IHeaderBottomItem[] =
		[{ name: '', classItem: '_icon-home', },
		{ name: 'catalog', classItem: '_icon-catalog', },
		{ name: 'cart', classItem: '_icon-cart', },
		{ name: 'search', classItem: '_icon-search_rev', },
		{ name: 'more', classItem: '_icon-dots', },]
			.map((e) => ({ ...e, itemText: props.strings[e.name || 'home'] }));

	const exceptionsItem: string[] = ['catalog', 'search', 'more',]

	const isMoreFull: boolean = useAppSelector(selectIsMoreFull);
	const isCartFull: boolean = useAppSelector(selectIsCartFull);

	const disptch = useAppDispatch();
	const navigate = useNavigate();
	//----------------------------------------
	const getMenuItemsNav = (itemArray: IHeaderBottomItem[], btnArray: string[]): { [property: string]: () => void } => {
		const obj: { [property: string]: () => void } = {};
		itemArray.forEach(e => {
			obj[e.name] = btnArray.includes(e.name) ? () => { } :
				() => navigate(`/${e.name}`)
		});
		return obj;
	};
	//-------------------------------------
	const onClickBottomItem = (name: string) => {
		disptch(changeIsModal(true));
		getMenuItemsNav(btnArray, exceptionsItem)[name]();
	};

	const btnElements: JSX.Element[] = btnArray.map((e, i): JSX.Element =>
		<HeaderBottomBtnItem key={e.name + i} isMoreFull={isMoreFull} isCartFull={isCartFull}
			onClickBottomItem={() => onClickBottomItem(e.name)} {...e} />
	);

	return (
		<StyledHeaderBottomContainer justufy={'space-between'}>
			{btnElements}
		</StyledHeaderBottomContainer>


	);
};

export default HeaderBottomContainer;