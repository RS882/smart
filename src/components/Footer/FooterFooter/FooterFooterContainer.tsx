import React, { FC } from 'react';

import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { IFooter } from '../../../types/LocalizationTypes';
import FooterLabel from './FooterLabel';
import FooterSocialContainer from './FooterSocial.tsx/FooterSocialContainer';
import { selectIsCartPage } from './../../../redux/CartSlice';

interface FooterFooterProps {
	items: IFooter
};
interface IFooterFooterProps {
	isCartOpen: boolean;
};

const StyledWrapper = styled.div<IFooterFooterProps>`
	display: grid;
	border-top: ${props => props.isCartOpen ? '' : `1px solid ${props.theme.color.divider || '#C8CACB'}`};
		padding:20px 0;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column: 1/3; 
  		grid-template-columns: repeat(2,1fr) ;
		grid-template-rows: ${props => props.isCartOpen ? '1fr' : 'repeat(2,1fr)'} ;
		padding: 30px 0;
	
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-column: 1/5; 
		grid-template-columns: ${props => props.isCartOpen ? 'repeat(2,1fr)' : 'repeat(3, 1fr)'} ;
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

const StyledDev = styled.div<IFooterFooterProps>`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		justify-self: ${props => props.isCartOpen ? 'end' : 'start'};	
		align-self: center;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		justify-self: end;
		align-self: center;
	}
`;

const FooterFooterContainer: FC<FooterFooterProps> = (props) => {


	const isCartOpen = useAppSelector(selectIsCartPage);


	return (
		<StyledWrapper isCartOpen={isCartOpen}>
			{isCartOpen ? null : <FooterSocialContainer />}
			<StyledRights>
				<FooterLabel item={`Smart © 2021 ${props.items.rights}`} />
			</StyledRights>
			<StyledDev isCartOpen={isCartOpen}>
				<FooterLabel item={`${props.items.dev}: rs.com`} />
			</StyledDev>
		</StyledWrapper>
	);
};

export default React.memo(FooterFooterContainer);