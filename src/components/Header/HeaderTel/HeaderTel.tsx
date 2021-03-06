import React, { FC } from 'react';
import styled from 'styled-components';
import { telFn } from '../../../utilits/functions';
import Flex from '../../Flex';
import { IHeaderTel, IHeaderTelProps } from '../../../types/HeaderTypes';



interface IHTel extends IHeaderTel, IHeaderTelProps {
	showPhoneNum: telFn;
}

const StyledWorkTime = styled.div`
	color: ${props => props.theme.color.text.second || '#838688'};
	
`;

const StyledHT = styled(Flex)`
	width: 100%;
	
`;

const StledTelLink = styled.a<IHeaderTelProps>`
	font-size:${props => props.fontSize || '16px'};
	font-weight:${props => props.fontWeight || '500'};
	margin-bottom:${props => props.marginBottom || '0'};
	transition:color 0.3s ease 0s;
	&:hover{
		color:${props => props.theme.color.yellow}
	}
`;

const HeaderTel: FC<IHTel> = (props) => {

	const tels: string[] = ['+380000000000', '+380000000001'];
	const time: string[] = ['10:00', '21:00'];
	const telElems: JSX.Element[] = tels.map((e, i) =>
		<StledTelLink key={e + i} href={`tel: ${e}`} {...props}>{props.showPhoneNum(e)}</StledTelLink>)
	const wTime: string[] = props.workTime !== null ? props.workTime : ['', ''];

	return (
		<StyledHT justufy='space-between' direction={props.direction} >
			{telElems}

			< StyledWorkTime > {wTime[0] + time[0] + wTime[1] + time[1]}</StyledWorkTime>
		</StyledHT >
	);
};


export default HeaderTel;