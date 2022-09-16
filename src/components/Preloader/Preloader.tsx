import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import spiner from './../../assets/spiner/spinner.svg';



const StyledSpiner = styled(Flex)`
	position:fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index:500;
`;

const StyledImg = styled.img`
	
	width: 40%;
	height: 40%;
`
// Preloader spiner
const Preloader: FC = () => {
	return (
		<StyledSpiner>
			<StyledImg src={spiner} alt="spiner" width='100' height='100' />
		</StyledSpiner>
	);
};

export default React.memo(Preloader);