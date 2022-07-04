import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

interface IHeaderActionCount {
	count?: number;
}

const StyledHeaderActionCount = styled(Flex) <IHeaderActionCount>`
	position: absolute;
	bottom: 28px;
	left: 25px;
	font-size: 14px;
	line-height: 100%;
	background-color:${props => props.theme.color.darkBlue};
	height: 30px;
	min-width:40px;
	border-radius: 64px;
	padding: 2px 7px 4px ;
	color: ${props => props.theme.color.text.mainLight || '#fff'};
	display: ${props => props.count ? 'flex' : 'none'};
	font-family: ${props => props.theme.font.family.main};
`

const HeaderActionCount: FC<IHeaderActionCount> = (props) => {

	return (
		<>

			<StyledHeaderActionCount {...props} >
				{props.count}

			</StyledHeaderActionCount>
		</>
	);
};

export default HeaderActionCount;