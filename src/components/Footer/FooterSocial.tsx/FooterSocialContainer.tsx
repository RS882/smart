import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

interface socialArrayProps {
	url: string;
	classItem: string;
}

const IFooterSocialContainer = styled(Flex)`
	border-top: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column: 1/3; 
  	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-column: 1/5; 
  
	};
`;

const FooterSocialContainer: FC = (props) => {
	const socialArray: socialArrayProps[] = [{ url: '#', classItem: '_icon-twitter' },
	{ url: '#', classItem: '_icon-facebook' }, { url: '#', classItem: '_icon-instagram' },];
	const SocialElems = socialArray.map((e, i) => )
	return (
		<IFooterSocialContainer direction='column' align='flex-start' justufy='flex-start'>

		</IFooterSocialContainer>
	);
};

export default FooterSocialContainer;