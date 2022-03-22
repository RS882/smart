import React, { FC } from 'react';
import styled from 'styled-components';
import { strings } from '../../localization/localization';
import Container from '../Container';
import FooterLogoAdressBlock from './FooterLogoAdressBlock/FooterLogoAdressBlock';


const StyledFooterContainer = styled.div`
	width: 100%;
	margin-bottom:64px;
	padding: 0 10px;
	background-color: ${props => props.theme.color.lightBlue || '#EDF2F6'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 20px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		margin-bottom:0px;
		padding: 0 10px;
	};
`;

const StyledFooterWrapper = styled.div`

	display: grid;
	grid-template-columns: 1fr ;
	margin-top:50px;
	gap: 40px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-template-columns: repeat(2,1fr) ;
		grid-template-rows:repeat(3,auto) ;
		margin-top:40px;
		gap: 60px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-template-columns: repeat(4,1fr) ;
		grid-template-rows:repeat(2,auto) ;
		gap: 0px;
	};
`

const Span2 = styled.span`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column: 1/2; 
  		grid-row: 2/3;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-column: 3/4; 
  		grid-row: 1/2;
	};
`
const Span3 = styled.span`
	
`
const Span4 = styled.span`
	
`
const SpanFooter = styled.span`
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-column: 1/3; 
  	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-column: 1/5; 
  
	};
`

const FooterContainer: FC = () => {
	return (
		<StyledFooterContainer>
			<Container>
				<StyledFooterWrapper>
					<FooterLogoAdressBlock workTime={strings.header.sundry.workTime} address={strings.footer.address} />
					<Span2>footer2</Span2>
					<Span3>footer3</Span3>
					<Span4>footer4</Span4>
					<SpanFooter>footerFooter</SpanFooter>
				</StyledFooterWrapper>
			</Container>
		</StyledFooterContainer>
	);
};

export default FooterContainer;