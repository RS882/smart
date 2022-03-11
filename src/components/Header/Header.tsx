import React, { FC } from 'react';
import styled from 'styled-components';

import Container from '../Container';
import HeaderBottom from './HeaderBottom';

import HeaderMobile from './HeaderMobile';
import { strings } from './../../localization/localization';
import { useAppSelector } from '../redux/hooks';
import { selectActiveLanguage, selectLanguages } from '../redux/appSlice';

interface HeaderProps {

};

const StyledHeader = styled.header<HeaderProps>`
	position: fixed;
	top: 0;
	left: 0;
	max-height:60px;
	z-index:100;
   width: 100%;
 `;



const Header: FC<HeaderProps> = (props) => {

	const activeLanguage = useAppSelector(selectActiveLanguage);
	const languages = useAppSelector(selectLanguages);
	console.log(languages);


	return (<>
		<StyledHeader>
			<Container>
				<HeaderMobile strings={strings.header}
					activeLanguage={activeLanguage}
					languages={languages} />
			</Container>
			<HeaderBottom />
		</StyledHeader>

	</>
	);
};

export default Header;