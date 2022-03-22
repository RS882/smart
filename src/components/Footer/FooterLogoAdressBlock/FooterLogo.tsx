import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../Header/HeaderLogo';


const StyledFooterLogo = styled.div`
	margin-bottom:30px;
	
`;
const FooterLogo = () => {
	return (
		<StyledFooterLogo>
			<HeaderLogo />
		</StyledFooterLogo>
	);
};

export default FooterLogo;