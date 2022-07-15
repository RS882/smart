import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import Container from './../Container';
import FirstScreen from './FirstScreen/FirstScreen';
import HeaderMenuContainer from './../Header/HeaderMenu/HeaderMenuContainer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectLangStiringsHeaderMenuItem } from '../../redux/LanguageSlice';
import { getItem } from './../../redux/Thunk/thunkItem';
import store from '../../redux/store';
import ItemsContainer from './Items/ItemsContainer';
import { selectitemsData } from '../../redux/ItemSlice';

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

	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem)
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getItem(1));
	}, []);



	return (
		<StyledMain>
			<Container>
				<StyledWrapper>
					<HeaderMenuContainer strings={menuItem} />
					<FirstScreen />
					<ItemsContainer iData={itemsData.filter(e => e.salehit)} titleType='Хиты продаж' />

				</StyledWrapper>
			</Container>
		</StyledMain>
	);
};

export default Main;
