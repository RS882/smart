import React, { FC } from 'react';
import styled from 'styled-components';
import { telFn } from '../../../utilits/functions';

import Flex from '../../Flex';
import { IHeaderTel } from './HeaderTelContainer';


interface IHTel extends IHeaderTel {
	showPhoneNum: telFn;
}

const StyledWorkTime = styled.div`
	color: ${props => props.theme.color.text.second || '#838688'};
	
`;

const StyledHT = styled(Flex)`
	width: 100%;
`

const HeaderTel: FC<IHTel> = (props) => {
	const tels: string[] = ['+380000000000', '+380000000001'];

	const time: string[] = ['10:00', '21:00'];
	const telElems = tels.map((e, i) => <a key={e + i} href={`tel: ${e}`} >{props.showPhoneNum(e)}</a>)


	return (
		<StyledHT justufy='space-between'>
			{telElems}
			<StyledWorkTime> {props.workTime[0] + time[0] + props.workTime[1] + time[1]}</StyledWorkTime>
		</StyledHT>
	);
};


export default HeaderTel;