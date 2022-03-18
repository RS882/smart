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
`

const FooterContainer = () => {
	return (
		<StyledFooterContainer>
			<Container>
				<StyledFooterWrapper>
					<span>footer1</span>
					<span>footer2</span>
					<span>footer3</span>
					<span>footer4</span>
				</StyledFooterWrapper>
			</Container>
		</StyledFooterContainer>
	);
};

export default FooterContainer;