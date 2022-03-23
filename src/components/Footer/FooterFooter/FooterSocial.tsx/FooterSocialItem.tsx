import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';
import { SocialArrayProps } from '../../../../types/footerTypes';


const StyledFooterSocialItem = styled(Flex)`
width: 48px;
height: 48px;
`;

const StyledSocialItem = styled.div`
	color: ${props => props.theme.color.blue || '#4878A6'};
	transition: color 0.3s ease 0s;
	&:hover{
		color: ${props => props.theme.color.darkBlue || '##2A5275'};
	};
`;

const FooterSocialItem: FC<SocialArrayProps> = (props) => {
	return (
		<StyledFooterSocialItem>
			<a href={props.url}> <StyledSocialItem className={props.classItem}></StyledSocialItem></a>
		</StyledFooterSocialItem>
	);
};

export default FooterSocialItem;