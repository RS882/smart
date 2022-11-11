import React, { FC } from 'react';
import { selectPaymentMethodDetails } from '../../../redux/CartSlice';
import { useAppSelector } from '../../../redux/hooks';
import { ISetNext } from '../Cart';
import PaymentMethodForm from './PaymentMethodForm';
import PaymentMethodShort from './PaymentMethodShort';
import CartItemBox from './../CartItemBox';


interface IPaymentMethodContainer extends ISetNext {
	title: string;
};

const PaymentMethodContainer: FC<IPaymentMethodContainer> = ({ title, isNext, setIsNext }) => {

	const pmMetodDetails = useAppSelector(selectPaymentMethodDetails);


	return (
		<CartItemBox title={title} isNext={isNext} formId='PaymentMethod'
			FullElement={<PaymentMethodForm plHolder={title} setIsNext={setIsNext} />}
			ShortElement={<PaymentMethodShort pmMethod={pmMetodDetails} onClickBtnChange={() => setIsNext(false)} />} />
	);
};

export default PaymentMethodContainer;