import React, { FC } from 'react';
import { IAction } from '../../../redux/ActionSlice';
import Flex from '../../Flex';
import { IActionArray } from '../../../types/HeaderTypes';
import HeaderAction from './HeaderAction';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../../redux/MenuSlice';
import { changeIsModal } from '../../../redux/ModalSlice';


interface IHeaderActions {
	conuts: IAction["counts"];
	actionArray: IActionArray[];
	onClickAction?: () => void;
}

const HeaderActions: FC<IHeaderActions> = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onClickAction1 = (actionName: string) => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
		navigate(`/${actionName}`);
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