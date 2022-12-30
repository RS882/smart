import React, { FC } from 'react';

import Flex from '../../Flex';
import { IActionArray } from '../../../types/HeaderTypes';
import HeaderAction from './HeaderAction';
import { useNavigate } from 'react-router';

import { closeMenu } from '../../../redux/MenuSlice';
import { changeIsModal } from '../../../redux/ModalSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectFavoritedItem, selectIsCartFull } from '../../../redux/ActionSlice';
import { setOrderMessage } from '../../../redux/CartSlice';



interface IHeaderActions {
	conuts: {
		viewed: number;
		favorites: number;
		compare: number;
		cart: number;
	};
	actionArray: IActionArray[];
	onClickAction?: () => void;
}

const HeaderActions: FC<IHeaderActions> = (props) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const isCartFull = useAppSelector(selectIsCartFull);
	const favotiteItem = useAppSelector(selectFavoritedItem)

	const onClickAction1 = (actionName: string) => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
		if (!isCartFull && actionName === 'cart') {
			navigate(`/`);
			dispatch(setOrderMessage('Your basket is empty'))
		} else if (favotiteItem.length === 0 && actionName === 'favorites') {
			navigate(`/`);
			dispatch(setOrderMessage('You have no selected goods'));
		} else {
			navigate(`/${actionName}`)
		}


		// navigate(`/${actionName}`);
	}


	const actionElements: JSX.Element[] = props.actionArray.map((e, i) => {
		const countAction: number = Object.entries(props.conuts).filter(el => e.name === el[0])[0][1];

		const classAction: string = e.classIconActive && countAction ? e.classIconActive : e.classIcon;
		return <HeaderAction key={e.name + i} name={e.name} onClick={() => onClickAction1(e.name)}
			headerActionClassName={classAction} count={countAction} />
	});

	return (
		<Flex>
			{actionElements}
		</Flex>
	);
};

export default HeaderActions;