import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Flex from '../Flex';
import Logo from './Logo/Logo';


interface HeaderProps {

};

const StyledHeader = styled.header`
 position:fixed;
 top: 0;
 left: 0;
 max-height:60px;
 z-index:100;
 
  width: 100%;
 
`;

const ContainerHeader = styled(Container)`

`;

const Header: FC<HeaderProps> = () => {
	return (<>
		<StyledHeader>
			<ContainerHeader>
				<Flex margin={'10px 10px 10px 15px'} justufy={'space-between'}>
					<Logo />

				</Flex>
			</ContainerHeader>
		</StyledHeader>

	</>
	);
};

export default Header;