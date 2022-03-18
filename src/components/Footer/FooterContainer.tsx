import React from 'react';
import styled from 'styled-components';
import Container from '../Container';


const StyledFooterContainer = styled.div`
	border: 1px solid #000;
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
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		grid-template-columns: repeat(2,1fr) ;
		grid-template-rows:repeat(3,auto) ;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		grid-template-columns: repeat(4,1fr) ;
		grid-template-rows:repeat(2,auto) ;
	};
`

const Span1 = styled.span`
	
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

const FooterContainer = () => {
	return (
		<StyledFooterContainer>
			<Container>
				<StyledFooterWrapper>
					<Span1>footer1</Span1>
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