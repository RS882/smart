import React, { FC } from 'react';
import CartItemBox from '../CartItemBox';
import RecipientForm from './RecipientForm';

interface IRecipientContainer {
	title: string;
}

const ReciepientContainer: FC<IRecipientContainer> = ({ title }) => {


	return (

		<CartItemBox title={title} FullElement={<RecipientForm />} />

	);
};

export default React.memo(ReciepientContainer);