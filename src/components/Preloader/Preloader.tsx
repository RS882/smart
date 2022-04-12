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

const Preloader: FC = (props) => {
	return (
		<StyledSpiner>
			<StyledImg src={spiner} alt="spiner" />
		</StyledSpiner>
	);
};

export default Preloader;