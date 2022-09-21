import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectCartTextBtnNext } from '../../redux/LanguageSlice';
import { ArrowFn } from '../../types/fnTypes';
import Button from '../Button';


interface INextBtnCart {
	onClickNextBtnCart: ArrowFn;
}

const StyledBtnNext = styled.div`
	padding-bottom:25px;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width:200px;
		margin-bottom:40px;
		border-bottom: 1px solid transparent;
	};

`;
const BtnNext: FC<INextBtnCart> = ({ onClickNextBtnCart }) => {
	const btnNextText = useAppSelector(selectCartTextBtnNext);
	return (
		<StyledBtnNext>
			<Button width='100%' height='48px' onClick={onClickNextBtnCart}>{btnNextText}</Button>
		</StyledBtnNext>
	);
};

export default BtnNext;