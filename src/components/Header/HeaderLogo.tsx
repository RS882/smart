import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const HeaderLogo = () => {
	return (
		<NavLink to={'/'}>
			<Logo />
		</NavLink>
	);
};

export default HeaderLogo;