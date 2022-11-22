import React, { FC } from 'react';
import { ISetIsNext, ISetNext } from '../Cart';
import CartItemBox from '../CartItemBox';
import RecipientForm from './RecipientForm';

interface IRecipientContainer extends ISetNext {
	title: string;
}

const ReciepientContainer: FC<IRecipientContainer> = ({ title, setIsNext, isNext }) => {


	const onNextClick = () => {
		setIsNext(true);

	};

	return (

		<CartItemBox title={title} FullElement={<RecipientForm setIsNext={setIsNext} isNext={isNext} />} />

	);
};

export default React.memo(ReciepientContainer);