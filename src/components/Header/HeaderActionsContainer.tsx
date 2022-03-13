import React from 'react';
import Flex from '../Flex';
import HeaderAction from './HeaderAction';

interface IActionArray {
	name: string,
	classIcon: string;
	classIconActive?: string;
	count: number;
}

const HeaderActionsContainer = () => {


	const ActionArray: IActionArray[] = [{ name: 'viewed', classIcon: '_icon-eye1', count: 0, },
	{ name: 'favorites', classIcon: '_icon-hart_empty', classIconActive: '_icon-hart_full', count: 5, },
	{ name: 'compare', classIcon: '_icon-compare', count: 0, },];

	const actionElements = ActionArray.map((e, i) => {
		const classAction = e.classIconActive && e.count ? e.classIconActive : e.classIcon;
		return <HeaderAction key={e.name + i} headerActionClassName={classAction} count={e.count} />
	})
	return (
		<Flex>
			{actionElements}
		</Flex>
	);
};

export default HeaderActionsContainer;