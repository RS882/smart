import React, { FC } from 'react';
import styled from 'styled-components';
import { IHeaderStings } from '../../../localization/localization';
import Button from '../../Button';
import { ArrowFn } from '../../types';

import { theme } from './../../../theme';

interface IHeaderSeach {
	btnSearch: string;
	onClickSearch: ArrowFn;
}

const StyledHeaderSeachWrapper = styled.div`
	width: 107px;
	height: 42px; 
	border-bottom: 1px solid ${props => props.theme.color.divider};
`;

const StyledScearchIcon = styled.div`
	font-size:24px;
	margin-right:12px;
`;

const HeaderSeach: FC<IHeaderSeach> = (props) => {
	return (
		<StyledHeaderSeachWrapper>
			<Button onClick={props.onClickSearch} width='100%' height='36px' color={theme.color.text.second}
				border='none' lineHeight='130%' bgColor=' transparent'
				borderRadius='none' hoverBgColor='none ' hoverColor='none' >
				<StyledScearchIcon className='_icon-search'></StyledScearchIcon>
				<div>{props.btnSearch}</div>
			</Button>
		</StyledHeaderSeachWrapper>
	);
};

export default HeaderSeach;