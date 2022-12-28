import React from 'react';
import styled from 'styled-components';
import Favorits from '../PrivateOffice/Favorits';


const Margin1 = styled.main`
	margin: 150px;
`
const Favorites = () => {
	return (
		<Margin1>

			Favorites
			<Favorits />
		</Margin1>
	);
};

export default Favorites;