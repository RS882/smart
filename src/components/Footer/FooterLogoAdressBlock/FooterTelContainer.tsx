import React, { FC } from 'react';
import styled from 'styled-components';

import { IHeaderTel } from '../../../types/HeaderTypes';
import { showPhoneNum } from '../../../utilits/functions';
import HeaderTel from '../../Header/HeaderTel/HeaderTel';

const StyledFooterTelContainer = styled.div`
margin-bottom:20px;
`

const FooterTelContainer: FC<IHeaderTel> = (props) => {
	return (
		<StyledFooterTelContainer>
			<HeaderTel workTime={props.workTime} showPhoneNum={showPhoneNum}
				direction='column' fontSize='20px' fontWeight='600' marginBottom='10px' />
		</StyledFooterTelContainer>
	);
};

export default FooterTelContainer;