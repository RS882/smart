import React, { FC } from 'react';

import HeaderBottomBtnItem from './HeaderBottomBtnItem';

import HeaderBottomNLItem from './HeaderBottomnNLItem';

export interface IHeaderBottomItem {
	classItem: string;
	itemText?: string | any;
	name: string;
};


interface IHeaderBottom {
	NlArray: IHeaderBottomItem[];
	BtnArray: IHeaderBottomItem[];
};



const HeaderBottom: FC<IHeaderBottom> = (props) => {

	const onClickBottomItem = (name: string) => {

	};

	const NlElements: JSX.Element[] = props.NlArray.map((e, i) =>
		<HeaderBottomNLItem key={e.name + i} classItem={e.classItem} itemText={e.itemText} name={e.name} />
	);
	const BtnElements: JSX.Element[] = props.BtnArray.map((e, i) =>
		<HeaderBottomBtnItem key={e.name + i} onClickBottomItem={() => onClickBottomItem(e.name)}
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