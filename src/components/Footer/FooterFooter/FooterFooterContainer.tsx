import React, { FC } from 'react';
import styled from 'styled-components';
import { IFooter } from '../../../types/LocalizationTypes';
import FooterLabel from './FooterLabel';
import FooterSocialContainer from './FooterSocial.tsx/FooterSocialContainer';

interface FooterFooterProps {
	items: IFooter
};

const StyledWrapper = styled.div`
	display: grid;
	border-top: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	padding:20px 0;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column: 1/3; 
  		grid-template-columns: repeat(2,1fr) ;
		grid-template-rows:repeat(2,1fr) ;
		padding: 30px 0;
	
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-column: 1/5; 
		grid-template-columns: repeat(3,1fr) ;
		grid-template-rows:1fr ;
		margin-top:20px;
		padding:20px 0;

	};
`;

const StyledRights = styled.div`
	margin-bottom:10px;
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		justify-self: start;
		align-self: center;
	}
`;

const StyledDev = styled.div`
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		justify-self: end;
		align-self: center;
	}
`;

const FooterFooterContainer: FC<FooterFooterProps> = (props) => {
	return (
		<StyledWrapper>
			<FooterSocialContainer />
			<StyledRights>
				<FooterLabel item={`Smart © 2021 ${props.items.rights}`} />
			</StyledRights>
			<StyledDev>
				<FooterLabel item={`${props.items.dev}: rs.com`} />
			</StyledDev>
		</StyledWrapper>
	);
};

export default FooterFooterContainer;