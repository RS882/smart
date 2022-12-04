import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectLangStiringsHeaderMenuItem } from '../../../redux/LanguageSlice';
import { IMenuItem } from '../../../types/LocalizationTypes';
import Container from '../../Container';
import HeaderMenuItems from './HeaderMenuItems';


// interface IHeaderMenuContainer {
// 	strings: IMenuItem;
// };



const StyledHeaderMenuContainer = styled.div`
	height: 60px;
	width: 100%;
	background-color:${props => props.theme.color.menuBlue || '#0E1821'};
	display: none;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		display:block;
		margin-top: 80px;
	};
`;





const HeaderMenuContainer: FC = (props) => {

	const menuItem = useAppSelector(selectLangStiringsHeaderMenuItem);

	return (
		<StyledHeaderMenuContainer>
			<Container>
				<HeaderMenuItems strings={menuItem} />
			</Container>

		</StyledHeaderMenuContainer>
	);
};

export default HeaderMenuContainer;