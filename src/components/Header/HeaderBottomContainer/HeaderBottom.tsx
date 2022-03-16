import React, { FC } from 'react';

import HeaderBottomBtnItem from './HeaderBottomBtnItem';

import HeaderBottomNLItem from './HeaderBottomnNLItem';
import { useSelector } from 'react-redux';
import { selectIsMoreFull, selectIsCartFull } from './../../../redux/ActionSlice';

export interface IHeaderBottomItem {
	classItem: string;
	itemText?: string | any;
	name: string;
	isCartFull?: boolean;
	isMoreFull?: boolean;
};


interface IHeaderBottom {
	NlArray: IHeaderBottomItem[];
	BtnArray: IHeaderBottomItem[];
};


const HeaderBottom: FC<IHeaderBottom> = (props) => {

	const isMoreFull = useSelector(selectIsMoreFull);
	const isCartFull = useSelector(selectIsCartFull);


	const onClickBottomItem = (name: string) => {
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