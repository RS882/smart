import React, { FC } from 'react';
import styled from 'styled-components';
import { ICatalogMenu } from '../../../types/LocalizationTypes';

import CatalogMenuItem from './CatalogMenuItem';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { changeIsModal } from '../../../redux/ModalSlice';
import { closeMenu } from '../../../redux/MenuSlice';
import { setSelectedItemsType } from '../../../redux/CatalogSlice';
import { selectLangStiringsHeaderCatalogMenu } from '../../../redux/LanguageSlice';




const StyledCatalogMenu = styled.ul`
	display:flex;
	flex-direction:column;
	background-color: ${props => props.theme.color.lightBlue || '#EDF2F6'};
	border-radius: 0 0 4px 4px;
	padding-top:16px;
`

const CatalogMenu: FC = (props) => {

	const itemClassName: ICatalogMenu = {
		itemsType1: '_icon-hoverboard',
		itemsType2: '_icon-e_kick_scooter',
		itemsType3: '_icon-mono_wheel',
		itemsType4: '_icon-segway',
		itemsType5: '_icon-e_scooter',
		itemsType6: '_icon-e_bike',
		itemsType7: '_icon-e_cars',
		itemsType8: '_icon-e_skate',
		itemsType9: '_icon-accessory',
		itemsType10: '_icon-smart_toys',
		itemsType11: '_icon-smart_watch',
	};

	const navigate = useNavigate();
	const dispatch = useAppDispatch();


	const onClickCatalogItem = (itemType: string) => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
		dispatch(setSelectedItemsType(itemType));
		navigate(`/catalog`);
	};


	const catalogMenu = useAppSelector(selectLangStiringsHeaderCatalogMenu);
	const catalogMenuType: ICatalogMenu = catalogMenu !== null ? catalogMenu : { '': '' }

	const menuItems: JSX.Element[] = Object.entries(itemClassName).map(e => ({
		iconClass: e[1],
		menuItem: { [e[0]]: catalogMenuType[e[0]] },
	})).map((e, i) => <CatalogMenuItem onClickCatalogItem={onClickCatalogItem} key={e.iconClass + i} {...e} />);




	return (
		<StyledCatalogMenu>
			{menuItems}
		</StyledCatalogMenu>
	);
};

export default CatalogMenu;