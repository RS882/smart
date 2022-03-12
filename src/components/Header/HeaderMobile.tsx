import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderStings } from '../../localization/localization';
import Button from '../Button';
import Flex from '../Flex';

import LanguageContainer from '../LanguageChoose/LanguageContainer';

import Logo from './../Logo/Logo';





interface HeaderMobileProps {
	strings: IHeaderStings;
}

const StyledHeaderMobele = styled(Flex)`
	/* padding: 10px 0; */
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		//display:none;
	};
	`

const StyledLoginBtn = styled(Button)`
		margin-right:10px;
	`

const HeaderMobile: FC<HeaderMobileProps> = (props) => {
	return (
		<StyledHeaderMobele margin={'0 10px 0 15px'} justufy={'space-between'}>
			<Logo />
			<Flex>
				<StyledLoginBtn>{props.strings.btnEnter}</StyledLoginBtn>
				<LanguageContainer />
			</Flex>
		</StyledHeaderMobele>
	);
};

export default HeaderMobile;