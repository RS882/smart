import React, { FC } from 'react';
import Flex from '../../Flex';
import HeaderAction from './HeaderAction';
import { useSelector } from 'react-redux';
import { selectActionCount } from './../../../redux/ActionSlice';
import styled from 'styled-components';

interface IActionArray {
	name: string,
	classIcon: string;
	classIconActive?: string;
};

interface IHeaderActionsContainer {

}
const StyledHeaderAC = styled(Flex)`
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			display: flex;
	};
`


const HeaderActionsContainer: FC<IHeaderActionsContainer> = () => {

	const conuts = useSelector(selectActionCount);

	const ActionArray: IActionArray[] = [{ name: 'viewed', classIcon: '_icon-eye1' },
	{ name: 'favorites', classIcon: '_icon-hart_empty', classIconActive: '_icon-hart_full', },
	{ name: 'compare', classIcon: '_icon-compare', },];

	const actionElements: JSX.Element[] = ActionArray.map((e, i) => {
		const countAction: number = Object.entries(conuts).filter(el => e.name === el[0])[0][1];
		const classAction: string = e.classIconActive && countAction ? e.classIconActive : e.classIcon;
		return <HeaderAction key={e.name + i} name={e.name} headerActionClassName={classAction} count={countAction} />
	});

	return (
		<StyledHeaderAC>
			{actionElements}
		</StyledHeaderAC>
	);
};

export default HeaderActionsContainer;