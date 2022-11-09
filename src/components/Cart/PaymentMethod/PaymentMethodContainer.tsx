import React, { FC } from 'react';
import { selectPaymentMethodDetails } from '../../../redux/CartSlice';
import { useAppSelector } from '../../../redux/hooks';
import BtnNext from '../BtnNext';
import { ISetNext } from '../Cart';
import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import PaymentMethodForm from './PaymentMethodForm';
import PaymentMethodShort from './PaymentMethodShort';


interface IPaymentMethodContainer extends ISetNext {
	title: string;
};

const PaymentMethodContainer: FC<IPaymentMethodContainer> = ({ title, isNext, setIsNext }) => {

	const pmMetodDetails = useAppSelector(selectPaymentMethodDetails);

	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			{!isNext ?
				<PaymentMethodForm plHolder={title} setIsNext={setIsNext} /> :
				<PaymentMethodShort pmMethod={pmMetodDetails} onClickBtnChange={() => setIsNext(false)} />}
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext type='submit' form='PaymentMethod' />}
	</>
	);
};

export default PaymentMethodContainer;