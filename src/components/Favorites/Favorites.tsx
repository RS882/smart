import React from 'react';
import styled from 'styled-components';
import Favorits from '../PrivateOffice/Favorits';
import { StyledMain } from './../Main/Main';
import Container from './../Container';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { StyledBreadcrumbs, StyledDestopMenu, StyledPrivateOfficeBox, StyledTitel } from './../PrivateOffice/PrivateOffice';
import UserMenuContainer from '../Header/UserMenu/UserMenuContainer';
import LoginInFavoritesPage from './loginInFavoritesPage';
import { useAppSelector } from '../../redux/hooks';
import { selectIsLogSuccess } from '../../redux/LoginSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


const StyledFavoritesWrapper = styled.main`
	width: 100%;
`;
const StyledLoginBox = styled(StyledDestopMenu)`
		border: 1px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
	border-radius: 8px;
	margin-left:20px;
	max-height:	170px;
`
const Favorites = () => {

	const isLogin = useAppSelector(selectIsLogSuccess);
	const navigate = useNavigate()

	useEffect(() => {
		isLogin && navigate('/privateOffice/favorites');
	}, [isLogin])


	const text = ['Home', 'Favorites'];
	return (

		<StyledMain>
			<Container>

				<StyledPrivateOfficeBox>
					<StyledBreadcrumbs>
						<Breadcrumbs text={text} />
					</StyledBreadcrumbs>

					<StyledTitel>{'Favorites'}</StyledTitel>
					<StyledLoginBox>
						<LoginInFavoritesPage />
					</StyledLoginBox>


					<StyledFavoritesWrapper>
						<Favorits />
					</StyledFavoritesWrapper>




				</StyledPrivateOfficeBox>
			</Container>
		</StyledMain>
	);
};

export default Favorites;