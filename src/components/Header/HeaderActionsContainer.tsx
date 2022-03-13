import React from 'react';
import Flex from '../Flex';
import HeaderAction from './HeaderAction';

interface IActionArray {
	classIcon: string;
	classIconActive?: string;
	count: number;
}

const HeaderActionsContainer = () => {


	const ActionArray: IActionArray[] = [{ classIcon: '', count: 0, },]


	return (
		<Flex>
			<HeaderAction />
		</Flex>
	);
};

export default HeaderActionsContainer;