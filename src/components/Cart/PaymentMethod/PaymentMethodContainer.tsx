import React, { FC } from 'react';
import { selectPaymentMethodDetails, setIsPayMethodValided } from '../../../redux/CartSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { ISetNext } from '../Cart';
import PaymentMethodForm from './PaymentMethodForm';
import PaymentMethodShort from './PaymentMethodShort';
import CartItemBox from './../CartItemBox';


interface IPaymentMethodContainer extends ISetNext {
	title: string;
};

const PaymentMethodContainer: FC<IPaymentMethodContainer> = ({ title, isNext, setIsNext }) => {

	const pmMetodDetails = useAppSelector(selectPaymentMethodDetails);
	const dispatch = useAppDispatch();

	const onNextClick = () => {
		setIsNext(true);
		dispatch(setIsPayMethodValided(true));
	};
	const onChangeClick = () => {
		setIsNext(false)
		dispatch(setIsPayMethodValided(false));
	};


	return (
		<CartItemBox title={title} isNext={isNext} formId='PaymentMethod'
			FullElement={<PaymentMethodForm plHolder={title} setIsNext={onNextClick} />}
			ShortElement={<PaymentMethodShort pmMethod={pmMetodDetails} onClickBtnChange={onChangeClick} />} />
	);
};

export default PaymentMethodContainer;