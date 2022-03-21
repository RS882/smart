import React, { FC } from 'react';
import Flex from '../../Flex';
import { useSelector } from 'react-redux';
import { selectActionCount } from './../../../redux/ActionSlice';
import styled from 'styled-components';
import HeaderActions from './HeaderActions';
import { IActionArray } from '../../../types/HeaderTypes';


const StyledHeaderAC = styled(Flex)`
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display: flex;
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