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
import { closeMenu, openCatalog, openMore, openScearch } from '../../../redux/MenuSlice';

import { selectLangStiringsHeaderBottomBtn } from '../../../redux/LanguageSlice';




interface IHeaderBottom {
	appScroll?: string;
};



const StyledHeaderBottomContainer = styled(Flex) <IHeaderBottom>`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 64px;
	z-index:300;
   width: 100%;
	padding-right: ${props => props.appScroll};
	background-color: ${props => props.theme.color.darkBlue || '#2A5275'};
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 104px;
		padding-right: ${props => props.appScroll};
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:none;
	};
	`

const HeaderBottomContainer: FC<IHeaderBottom> = (props) => {

	const isMoreFull: boolean = useAppSelector(selectIsMoreFull);
	const isCartFull: boolean = useAppSelector(selectIsCartFull);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const onClickOpenCatalog = () => {
		dispatch(changeIsModal(true));
		dispatch(openCatalog(true));
	}
	const onClickOpenSearch = () => {
		dispatch(changeIsModal(true));
		dispatch(openScearch(true));
	}
	const onClickOpenMore = () => {
		dispatch(changeIsModal(true));
		dispatch(openMore(true));
	}

	const str: IBottomBtn | null = useAppSelector(selectLangStiringsHeaderBottomBtn);
	const string: IBottomBtn = str !== null ? str : { '': '' };

	const btnArray: IHeaderBottomItem[] =
		[{ name: '', classItem: '_icon-home', },
		{ name: 'catalog', classItem: '_icon-catalog', fnItem: onClickOpenCatalog, },
		{ name: 'cart', classItem: '_icon-cart', },
		{ name: 'search', classItem: '_icon-search_rev', fnItem: onClickOpenSearch, },
		{ name: 'more', classItem: '_icon-dots', fnItem: onClickOpenMore, }]
			.map((e) => ({ ...e, itemText: string[e.name || 'home'] }));

	//----------------------------------------
	const getMenuItemsNav = (itemArray: IHeaderBottomItem[]): { [property: string]: () => void } => {
		const obj: { [property: string]: () => void } = {};
		itemArray.forEach(e => {
			const navFn: () => void = () => {
				dispatch(closeMenu());
				dispatch(changeIsModal(false));
				navigate(`/${e.name}`);
			};
			obj[e.name] = e.fnItem || navFn;
		});
		return obj;
	};
	//-------------------------------------
	const onClickBottomItem = (name: string) => {
		getMenuItemsNav(btnArray)[name]();
	};

	const btnElements: JSX.Element[] = btnArray.map((e, i): JSX.Element =>
		<HeaderBottomBtnItem key={e.name + i} isMoreFull={isMoreFull} isCartFull={isCartFull}
			onClickBottomItem={() => onClickBottomItem(e.name)} {...e} />
	);

	return (
		<StyledHeaderBottomContainer justufy={'space-between'} appScroll={props.appScroll}>
			{btnElements}
		</StyledHeaderBottomContainer>


	);
};

export default HeaderBottomContainer;