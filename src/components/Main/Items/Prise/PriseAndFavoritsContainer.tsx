import React, { FC } from 'react';
import styled from 'styled-components';
import FavoriteContainer from './FavoriteContainer';
import PriseContainer from './PriseContainer';

export interface IPriseProps {
	prise: string;
	discount: number;
	idItem: number;
	isFavorite: boolean | undefined;
	isCompare: boolean | undefined;
};

const StyledPriseAndFavorit = styled.div`
	border: 1px solid #000;
	display:flex;
	justify-content: space-between;
	margin-bottom:20px;
`;


const PriseAndFavoritsContainer: FC<IPriseProps> = (props) => {




	return (
		<StyledPriseAndFavorit>
			<PriseContainer {...props} />
			<FavoriteContainer id={props.idItem} isFavorite={props.isFavorite} isCompare={props.isCompare} />
		</StyledPriseAndFavorit>
	);
};

export default PriseAndFavoritsContainer;