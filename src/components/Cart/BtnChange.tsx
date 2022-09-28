import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectCartTextBtnChange, selectCartTextBtnNext } from '../../redux/LanguageSlice';
import { ArrowFn } from '../../types/fnTypes';
import Button from '../Button';


interface ICangeBtnCart {
	onClickCangeBtnCart: ArrowFn;
}

const StyledBtnNext = styled.div`
	margin-top:20px;
	padding-bottom:25px;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width:200px;
		padding-bottom: 15px;
		border-bottom: 1px solid transparent;
		margin-top:0px;
		
	};

`;
// Component CHANGE button
const BtnChange: FC<ICangeBtnCart> = ({ onClickCangeBtnCart }) => {
	const btnText = useAppSelector(selectCartTextBtnChange);
	return (
		<StyledBtnNext>
			<Button width='100%' height='48px' bgColor='#fff'
				color='#4878A6' border='1px solid #4878A6'
				hoverBgColor='#4878A6' hoverColor='#fff'
				onClick={onClickCangeBtnCart}>{btnText}</Button>
		</StyledBtnNext>
	);
};

export default React.memo(BtnChange);