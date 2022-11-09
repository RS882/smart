import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';
import ShortShow from '../ShortShow';

interface IPaymentMethodShort {
	pmMethod: string;
	onClickBtnChange: ArrowFn;
};

const StyledPMMethod = styled.div`
	font-weight: 600;
	font-size: 24px;
`;

const PaymentMethodShort: FC<IPaymentMethodShort> = ({ pmMethod, onClickBtnChange }) => {
	return (
		<ShortShow cangeOrderData={onClickBtnChange}>
			<StyledPMMethod>{pmMethod}</StyledPMMethod>
		</ShortShow>
	);
};

export default React.memo(PaymentMethodShort);