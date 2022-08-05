import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Container from './../Container';
import FirstScreen from './FirstScreen/FirstScreen';
import HeaderMenuContainer from './../Header/HeaderMenu/HeaderMenuContainer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBannersItemText, selectItemsBoxName, selectLangStiringsHeaderMenuItem } from '../../redux/LanguageSlice';
import { getItem } from './../../redux/Thunk/thunkItem';

import ItemsContainer from './Items/ItemsContainer';
import { IItemData, selectitemsData } from '../../redux/ItemSlice';
import BanneActionrContainer, { IBannerItemObj } from './Banner/BanneActionrContainer';
import percImg from './../../assets/banner_item/percent.svg';
import giroImg from './../../assets/banner_item/pngegg1.png';
import segvImg from './../../assets/banner_item/pngwing1.png';
import swatchImg from './../../assets/banner_item/pngwing2.png';



const StyledMain = styled.main`
	margin-top: 80px;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 92px 20px 0 20px;
		
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		margin: 80px 0px 0 0px;
	};
`;

const StyledWrapper = styled.div`
	display:flex;
	flex-direction:column;
`;

const StyledBannerBox = styled.div`
	display:grid;
	grid-template-rows: repeat(2, 1fr);
	gap:20px;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		grid-template-rows: 1fr;
		grid-template-columns: repeat(2, 1fr);
	};
`

const Main: FC = (props) => {

	const itemsData = useAppSelector(selectitemsData);
	const namesItemsBox = useAppSelector(selectItemsBoxName);
	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem)
	const bannerItemsText = useAppSelector(selectBannersItemText)

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getItem(1));
	}, []);


	const filterItemsFun = [
		(arr: [] | IItemData[]) => arr.filter(e => e.salehit),
		(arr: [] | IItemData[]) => arr.filter(e => e.newitem),
		(arr: [] | IItemData[]) => arr.filter(e => e.itemType === 'itemsType4'),
		(arr: [] | IItemData[]) => arr.filter(e => e.itemType === 'itemsType3'),
		(arr: [] | IItemData[]) => arr.filter(e => e.itemType === 'itemsType6'),
	];

	//itemsBox: ['Хіти продажу', 'Новинки', 'Сігвеї', 'Моноколеси', 'Електорвелосипеди'],
	// itemsType1: '_icon-hoverboard',
	// itemsType2: '_icon-e_kick_scooter',
	// itemsType3: '_icon-mono_wheel',
	// itemsType4: '_icon-segway',
	// itemsType5: '_icon-e_scooter',
	// itemsType6: '_icon-e_bike',
	// itemsType7: '_icon-e_cars',
	// itemsType8: '_icon-e_skate',
	// itemsType9: '_icon-accessory',
	// itemsType10: '_icon-smart_toys',
	// itemsType11: '_icon-smart_watch',

	// bannerItemText: ['Скидки до 30% на сигвеи', 'Неделя смарт часов', 'Распродажа до — 50%', 'Smart Balance Premium по специальной цене',],
	const bannerItemImg = [
		{ srcItem: segvImg, w: '187', h: '180', },
		{ srcItem: swatchImg, w: '147', h: '166', },
		{ srcItem: percImg, w: '144', h: '124', },
		{ srcItem: giroImg, w: '241', h: '161', },
	];

	const bannerItems: IBannerItemObj[] = bannerItemImg.map((e, i) => ({
		...e, text: bannerItemsText !== null ? bannerItemsText[i] : '',
		callBack: () => {
			console.log(bannerItemsText !== null ? bannerItemsText[i] : '');
		},
	}));



	const itemsBoxs: JSX.Element[] = [0, 0, 0, 0, 0].map((e, i) => {
		return (
			<div key={namesItemsBox !== null ? namesItemsBox[i] + i : i}>
				<ItemsContainer iData={filterItemsFun[i](itemsData)} titleType={namesItemsBox !== null ? namesItemsBox[i] : ''} />
				{i === 1 ? <StyledBannerBox >
					<BanneActionrContainer bannerItem={bannerItems[0]} />
					<BanneActionrContainer bannerItem={bannerItems[1]} />
				</StyledBannerBox> : null}
				{i === 3 ? <StyledBannerBox >
					<BanneActionrContainer bannerItem={bannerItems[2]} />
					<BanneActionrContainer bannerItem={bannerItems[3]} />
				</StyledBannerBox> : null}
			</div>
		)
	});

	return (
		<StyledMain>
			<Container>
				<StyledWrapper>
					<HeaderMenuContainer strings={menuItem} />
					<FirstScreen />
					{itemsBoxs}

				</StyledWrapper>
			</Container>
		</StyledMain>
	);
};

export default React.memo(Main);
