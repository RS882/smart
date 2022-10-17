import React, { FC } from 'react';
import styled from 'styled-components';
import { IItemData } from '../../redux/ItemSlice';
import { ArrowFn } from '../../types/fnTypes';
import BtnChange from './BtnChange';


interface IOrderShort {

	cangeOrderData: ArrowFn;
};

const StyledOrderShortContainer = styled.div`
	display: flex;
	flex-direction:column;
	margin-top:20px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		flex-direction:row;
		justify-content: space-between;
		margin-top:30px;
	};
`;


const StyledBtnChange = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
				align-self:flex-end;
			};
`;

// template  List of goods in the basket if the Next button is pressed
const ShortShow: FC<IOrderShort> = ({ children, cangeOrderData }) => {

	return (
		<StyledOrderShortContainer>{children}<StyledBtnChange>
			<BtnChange onClickCangeBtnCart={cangeOrderData} />
		</StyledBtnChange>
		</StyledOrderShortContainer>
	);
};

export default ShortShow;