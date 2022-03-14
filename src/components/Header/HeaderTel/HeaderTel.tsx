import React, { FC } from 'react';

import styled from 'styled-components';

import Flex from '../../Flex';
import { showPhoneNum } from './../../../utilits/functions';


interface IHeaderTel {
	workTime: string[];
}

const StyledHeaderTel = styled(Flex)`
	width: 486px;
	margin-right:58px;
	
`;

const StyledWorkTime = styled.div`
	color: ${props => props.theme.color.text.second || '#838688'};
	
`

const HeaderTel: FC<IHeaderTel> = (props) => {

	const tels: string[] = ['+380000000000', '+380000000001'];

	const time: string[] = ['10:00', '21:00'];
	const telElems = tels.map((e, i) => <a key={e + i} href={`tel: ${e}`} >{showPhoneNum(e)}</a>)


	return (
		<StyledHeaderTel justufy='space-between'>
			{telElems}
			<StyledWorkTime> {props.workTime[0] + time[0] + props.workTime[1] + time[1]}</StyledWorkTime>
		</StyledHeaderTel>
	);
};

export default HeaderTel;