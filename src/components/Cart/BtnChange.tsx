import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectCartTextBtnChange, selectCartTextBtnNext } from '../../redux/LanguageSlice';
import { ArrowFn } from '../../types/fnTypes';
import Button from '../Button';

export interface IBtnStyleProps {
	isBottomBd?: boolean;
}

interface ICangeBtnCart extends IBtnStyleProps {
	onClickCangeBtnCart: ArrowFn;
	type?: string;
	textBtn?: string;

}

const StyledBtnNext = styled.div<IBtnStyleProps>`
	margin-top:20px;
	padding-bottom:${props => props.isBottomBd ? '25px' : '0'};
	border-bottom: 1px solid ${props => props.isBottomBd ? props.theme.color.divider || '#C8CACB' : 'transparent'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width:200px;
		padding-bottom: 15px;
		border-bottom: 1px solid transparent;
		margin-top:0px;
		
	};

`;
// Component CHANGE button
const BtnChange: FC<ICangeBtnCart> = ({ onClickCangeBtnCart, type = 'button',
	isBottomBd = true, textBtn }) => {
	const btnText = useAppSelector(selectCartTextBtnChange);
	return (
		<StyledBtnNext isBottomBd={isBottomBd}>
			<Button width='100%' height='48px' bgColor='#fff'
				color='#4878A6' border='1px solid #4878A6'
				hoverBgColor='#4878A6' hoverColor='#fff' type={type}
				onClick={onClickCangeBtnCart}>{textBtn || btnText}</Button>
		</StyledBtnNext>
	);
};

export default React.memo(BtnChange);