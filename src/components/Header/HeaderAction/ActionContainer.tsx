import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectActionCount } from './../../../redux/ActionSlice';
import HeaderActions from './HeaderActions';
import { IActionArray } from '../../../types/HeaderTypes';



const ActionsContainer: FC = () => {

	const conuts = useSelector(selectActionCount);
	const actionArray: IActionArray[] = [{ name: 'viewed', classIcon: '_icon-eye1' },
	{ name: 'favorites', classIcon: '_icon-hart_empty', classIconActive: '_icon-hart_full', },
	{ name: 'compare', classIcon: '_icon-compare', }, { name: 'cart', classIcon: '_icon-cart' },];

	return (

		<HeaderActions conuts={conuts} actionArray={actionArray} />

	);
};

export default ActionsContainer;