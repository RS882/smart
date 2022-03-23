import React, { FC } from 'react';

import HeaderBottomBtnItem from './HeaderBottomBtnItem';

import HeaderBottomNLItem from './HeaderBottomnNLItem';
import { selectIsMoreFull, selectIsCartFull } from './../../../redux/ActionSlice';
import { IHeaderBottomItem } from '../../../types/HeaderTypes';
import { useAppSelector } from '../../../redux/hooks';
import { useAppDispatch } from './../../../redux/hooks';
import { changeIsModal } from '../../../redux/ModalSlice';




interface IHeaderBottom {
	NlArray: IHeaderBottomItem[];
	BtnArray: IHeaderBottomItem[];
};


const HeaderBottom: FC<IHeaderBottom> = (props) => {

	const isMoreFull: boolean = useAppSelector(selectIsMoreFull);
	const isCartFull: boolean = useAppSelector(selectIsCartFull);

	const disptch = useAppDispatch();

	const onClickBottomItem = (name: string) => {
		disptch(changeIsModal(true));
		name === 'search' && console.log('search');
		name === 'more' && console.log('more');
	};

	const NlElements: JSX.Element[] = props.NlArray.map((e, i) =>
		<HeaderBottomNLItem key={e.name + i} isCartFull={isCartFull} classItem={e.classItem} itemText={e.itemText} name={e.name} />
	);
	const BtnElements: JSX.Element[] = props.BtnArray.map((e, i) =>
		<HeaderBottomBtnItem key={e.name + i} isMoreFull={isMoreFull} onClickBottomItem={() => onClickBottomItem(e.name)}
			classItem={e.classItem} itemText={e.itemText} name={e.name} />
	)

	return (
		<>
			{NlElements}
			{BtnElements}
		</>
	);
};

export default HeaderBottom;