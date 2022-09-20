import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { StyledMain } from './../Main/Main';
import { selectCartTextTitle } from './../../redux/LanguageSlice';

import { useAppSelector } from '../../redux/hooks';
import OrderContainer from './Order/OrderContainer';


const StyledCartContainer = styled.div`
	//border: 1px solid #000;
	display:flex;
	padding: 0 10px;
	display: grid;
`;

const StyledTitle = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 130%;
	margin-top:30px;
	margin-bottom:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top:50px;
		font-size: 28px;
	};
	
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		margin-top:60px;
		margin-bottom:50px;
		font-size: 36px;
	};
`;

const Cart: FC = (props) => {

	const titleText = useAppSelector(selectCartTextTitle);


	return (
		<StyledMain>
			<Container>
				<StyledCartContainer>
					<StyledTitle>{titleText}</StyledTitle>
					<OrderContainer />
				</StyledCartContainer>
			</Container>
		</StyledMain>
	);
};

export default React.memo(Cart);
