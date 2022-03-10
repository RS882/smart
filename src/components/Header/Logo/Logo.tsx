import React from 'react';

import Flex from '../../Flex';
import logo from './../../../assets/icon/logo/logo.svg'



const Logo = () => {
	return (
		<Flex>
			<img src={logo} alt='logo' width='124' height='40' />
		</Flex>
	);
};

export default Logo;