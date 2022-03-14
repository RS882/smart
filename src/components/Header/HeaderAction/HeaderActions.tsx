import React, { FC } from 'react';
import { IAction } from '../../../redux/ActionSlice';
import Flex from '../../Flex';
import HeaderAction from './HeaderAction';
import { IActionArray } from './HeaderActionsContainer';

interface IHeaderActions {
	conuts: IAction["counts"];
}

const HeaderActions: FC<IHeaderActions> = (props) => {


	const ActionArray: IActionArray[] = [{ name: 'viewed', classIcon: '_icon-eye1' },
	{ name: 'favorites', classIcon: '_icon-hart_empty', classIconActive: '_icon-hart_full', },
	{ name: 'compare', classIcon: '_icon-compare', },];

	const actionElements: JSX.Element[] = ActionArray.map((e, i) => {
		const countAction: number = Object.entries(props.conuts).filter(el => e.name === el[0])[0][1];
		const classAction: string = e.classIconActive && countAction ? e.classIconActive : e.classIcon;
		return <HeaderAction key={e.name + i} name={e.name} headerActionClassName={classAction} count={countAction} />
	});

	return (
		<Flex>
			{actionElements}
		</Flex>
	);
};

export default HeaderActions;