import React, { FC } from 'react';

import styled from 'styled-components';

import Flex from '../../Flex';
import { showPhoneNum } from '../../../utilits/functions';
import HeaderTel from './HeaderTel';


export interface IHeaderTel {
	workTime: string[];
}

const StyledHeaderTel = styled(Flex)`
	width: 486px;
	margin-right:58px;
	display: none;
	@media (min-width: 1300px) {
		display: flex;
	};
	
`;


const HeaderTelContainer: FC<IHeaderTel> = (props) => {

	return (
		<StyledHeaderTel >
			<HeaderTel workTime={props.workTime} showPhoneNum={showPhoneNum} />
		</StyledHeaderTel>
	);
};

export default HeaderTelContainer;