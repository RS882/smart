import React, { FC } from 'react';
import styled from 'styled-components';
import { IMenuItem } from '../../../types/LocalizationTypes';
import Container from '../../Container';
import HeaderMenuItems from './HeaderMenuItems';


interface IHeaderMenuContainer {
	strings: IMenuItem;
};



const StyledHeaderMenuContainer = styled.div`
	height: 60px;
	width: 100%;
	background-color:${props => props.theme.color.menuBlue || '#0E1821'};

	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display:block;
	};
`;


const HeaderMenuContainer: FC<IHeaderMenuContainer> = (props) => {



	return (
		<StyledHeaderMenuContainer>
			<Container>
				<HeaderMenuItems strings={props.strings} />
			</Container>

		</StyledHeaderMenuContainer>
	);
};

export default HeaderMenuContainer;