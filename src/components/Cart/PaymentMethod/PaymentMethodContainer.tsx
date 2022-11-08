import React, { FC } from 'react';
import BtnNext from '../BtnNext';
import { ISetNext } from '../Cart';
import { StyledCartItemContainer, StyledCartItemTitle } from '../Order/OrderContainer';
import PaymentMethodForm from './PaymentMethodForm';


interface IPaymentMethodContainer extends ISetNext {
	title: string;
};

const PaymentMethodContainer: FC<IPaymentMethodContainer> = ({ title, isNext, setIsNext }) => {


	return (<>
		<StyledCartItemContainer>
			<StyledCartItemTitle>{title}</StyledCartItemTitle>
			<PaymentMethodForm plHolder={title} setIsNext={setIsNext} />
		</StyledCartItemContainer>
		{isNext ? null : <BtnNext type='submit' form='PaymentMethod' />}
	</>
	);
};

export default PaymentMethodContainer;