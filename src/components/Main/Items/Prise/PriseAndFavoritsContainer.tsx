import React, { FC } from 'react';
import styled from 'styled-components';
import FavoriteContainer from './FavoriteContainer';
import PriseContainer from './PriseContainer';

export interface IPriseProps {
	prise: string;
	discount: number;
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
			<FavoriteContainer />
		</StyledPriseAndFavorit>
	);
};

export default PriseAndFavoritsContainer;