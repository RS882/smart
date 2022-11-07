import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectCartTextBtnNext } from '../../redux/LanguageSlice';
import { ArrowFn } from '../../types/fnTypes';
import Button from '../Button';
import { IBtnStyleProps } from './BtnChange';


interface INextBtnCart extends IBtnStyleProps {
	onClickNextBtnCart?: ArrowFn;
	type?: string;
	form?: string;
	isDisabled?: boolean;
}

const StyledBtnNext = styled.div`
	padding-bottom:25px;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width:200px;
		margin-bottom:20px;
		border-bottom: 1px solid transparent;
	};

`;
// Component NEXT button
const BtnNext: FC<INextBtnCart> = ({ onClickNextBtnCart, type = 'button', form, isDisabled = false, ...props }) => {
	const btnNextText = useAppSelector(selectCartTextBtnNext);

	return (
		<StyledBtnNext>
			<Button width='100%' height='48px' onClick={onClickNextBtnCart} disabled={isDisabled}
				type={type} form={form || ''}>{btnNextText}
			</Button>
		</StyledBtnNext>
	);
};

export default React.memo(BtnNext);