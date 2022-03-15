import React, { FC } from 'react';
import Flex from '../../Flex';
import HeaderAction from './HeaderAction';
import { useSelector } from 'react-redux';
import { selectActionCount } from './../../../redux/ActionSlice';
import styled from 'styled-components';
import HeaderActions from './HeaderActions';

export interface IActionArray {
	name: string,
	classIcon: string;
	classIconActive?: string;
};


const StyledHeaderAC = styled(Flex)`
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: flex;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		/* margin-right:0px; */
	};
`


const HeaderActionsContainer = () => {

	const conuts = useSelector(selectActionCount);
	const actionArray: IActionArray[] = [{ name: 'viewed', classIcon: '_icon-eye1' },
	{ name: 'favorites', classIcon: '_icon-hart_empty', classIconActive: '_icon-hart_full', },
	{ name: 'compare', classIcon: '_icon-compare', }, { name: 'cart', classIcon: '_icon-cart' },];

	return (
		<StyledHeaderAC>
			<HeaderActions conuts={conuts} actionArray={actionArray} />
		</StyledHeaderAC>
	);
};

export default HeaderActionsContainer;