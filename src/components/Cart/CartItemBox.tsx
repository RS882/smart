import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../types/fnTypes';
import BtnNext from './BtnNext';


interface ICartItemBox {
	title: string;
	isNext?: boolean;
	FullElement: JSX.Element;
	ShortElement?: JSX.Element;
	onClickNextBtnCart?: ArrowFn;
	formId?: string;
};

export const StyledCartItemContainer = styled.div`
	padding:30px 0;
	
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding:30px;
		margin-bottom:40px;
		border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
		border-radius: 8px;
	};
`;
export const StyledCartItemTitle = styled.div`
	font-weight: 700;
	font-size: 20px;
	line-height: 120%;
	@media ${props => props.theme.media?.tablet || '(width>= 767.98px)'} {
		font-size: 24px;
	};
	@media ${props => props.theme.media?.desktop || `(width>= 991.98px)`} {
		font-size: 28px;
	};
`;
// Box-component for basket blocks
const CartItemBox: FC<ICartItemBox> = ({ title, isNext = true, FullElement, ShortElement, onClickNextBtnCart, formId }) => {




	return (
		<>
			<StyledCartItemContainer>
				<StyledCartItemTitle>{title}</StyledCartItemTitle>
				{!isNext ? FullElement : ShortElement || FullElement}
			</StyledCartItemContainer>
			{isNext ? null : <BtnNext type={formId ? 'submit' : 'text'} form={formId} onClickNextBtnCart={onClickNextBtnCart} />}
		</>
	);
};

export default CartItemBox;