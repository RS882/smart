import React, { FC } from 'react';
import styled from 'styled-components';
import { SocialArrayProps } from '../../../../types/footerTypes';
import Flex from '../../../Flex';
import FooterSocialItem from './FooterSocialItem';

const StyledFooterSocialContainer = styled(Flex)`
	
	padding-bottom:20px ;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
	 	grid-column: 2/3;
		grid-row:1/3;
		padding-bottom:0px ;
		justify-content:flex-end;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		justify-content:center;
  	};
`;

const FooterSocialContainer: FC = (props) => {
	const socialArray: SocialArrayProps[] = [{ url: '#', classItem: '_icon-twitter' },
	{ url: '#', classItem: '_icon-facebook' }, { url: '#', classItem: '_icon-instagram' },];

	const SocialElems = socialArray.map((e, i) =>
		<FooterSocialItem key={e.classItem + i} url={e.url} classItem={e.classItem} />);

	return (
		<StyledFooterSocialContainer justufy='flex-start' >
			{SocialElems}
		</StyledFooterSocialContainer>
	);
};

export default FooterSocialContainer;