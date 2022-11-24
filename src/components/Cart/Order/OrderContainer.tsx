
import React, { FC, useEffect } from 'react';

import { selectItemInCart } from '../../../redux/ActionSlice';
import { setOrderItems } from '../../../redux/CartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectitemsData } from '../../../redux/ItemSlice';
import { selectCartTextOrder } from '../../../redux/LanguageSlice';
import { ISetNext } from '../Cart';
import CartItemBox from '../CartItemBox';
import Order from './Order';
import OrderShort from './OrderShort';



interface IOrederContainer extends ISetNext {
	setTotalPrise: (totalPrise: string) => void;

};

//  component of the ordered goods in the basket
const OrderContainer: FC<IOrederContainer> = ({ setTotalPrise, setIsNext, isNext }) => {
	const dispatch = useAppDispatch();
	// The text of the section order
	const titleText = useAppSelector(selectCartTextOrder);
	// array ID of goods in the basket
	const orderItem = useAppSelector(selectItemInCart);

	// Choosing goods that are in the order
	const items = useAppSelector(selectitemsData).filter((e) => orderItem.includes(e.id));

	// The final price of all selected goods
	const totalPrise = items.reduce((prev, e) => {
		const dicsountPrise: number = +(+e.prise - (+e.prise * e.discount / 100)).toFixed(2);
		const itemCount: number = orderItem.filter((el) => el === e.id).length;
		return prev + Number((dicsountPrise * itemCount).toFixed(2));
	}, 0);


	useEffect(() => {
		// We transfer the amount of all goods to the local Store
		setTotalPrise(totalPrise.toFixed(2));
	}, [totalPrise]);
	// Action when pressing the picture or describing the goods
	const onClickItem = (id: string) => {
		console.log(id);
	};
	const onNextClick = () => {
		setIsNext(true);
		dispatch(setOrderItems(orderItem));
	};
	const onChangeClick = () => {
		setIsNext(false)
	};


	return (<>
		<CartItemBox title={titleText?.title} isNext={isNext} onClickNextBtnCart={onNextClick}
			FullElement={<Order items={items} orderItem={orderItem} onClickItem={onClickItem} />}
			ShortElement={<OrderShort items={items} onClickImg={onClickItem} cangeOrderData={onChangeClick} />} />

	</>
	);
};

export default React.memo(OrderContainer);