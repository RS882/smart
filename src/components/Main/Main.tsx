import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Container from './../Container';
import FirstScreen from './FirstScreen/FirstScreen';
import HeaderMenuContainer from './../Header/HeaderMenu/HeaderMenuContainer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectItemsBoxName, selectLangStiringsHeaderMenuItem } from '../../redux/LanguageSlice';
import { getItem } from './../../redux/Thunk/thunkItem';
import store from '../../redux/store';
import ItemsContainer from './Items/ItemsContainer';
import { IItemData, selectitemsData } from '../../redux/ItemSlice';

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
const Main: FC = (props) => {

	const itemsData = useAppSelector(selectitemsData);
	const namesItemsBox = useAppSelector(selectItemsBoxName);
	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem)
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


	const itemsBoxs: JSX.Element[] = [0, 0, 0, 0, 0].map((e, i) => <ItemsContainer key={namesItemsBox !== null ? namesItemsBox[i] + i : i} iData={filterItemsFun[i](itemsData)} titleType={namesItemsBox !== null ? namesItemsBox[i] : ''} />)

	return (
		<StyledMain>
			<Container>
				<StyledWrapper>
					<HeaderMenuContainer strings={menuItem} />
					<FirstScreen />
					{itemsBoxs}
					{/* <ItemsContainer iData={itemsData.filter(e => e.itemType === 'itemsType3')} titleType={namesItemsBox !== null ? namesItemsBox[0] : ''} /> */}

				</StyledWrapper>
			</Container>
		</StyledMain>
	);
};

export default Main;
