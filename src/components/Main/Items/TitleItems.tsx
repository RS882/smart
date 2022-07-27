import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { selectViewAllItems } from '../../../redux/LanguageSlice';
import { ArrowFn } from '../../../types/fnTypes';


interface ITitleItems {
	title: string;
	viewAllItem: ArrowFn;
	isAll: boolean;
};

const StyledItemsTitle = styled.div`
	display:flex;
	justify-content:space-between;
	margin:50px 0 20px 0;
	padding: 0 20px;
@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
	margin:60px 0 30px 0;
	justify-content:flex-start;

	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		margin:80px 0 40px 0;
	};
`;

const StyledTitle = styled.div`
	font-weight: 700;
	font-size:24px;
	padding:7px 0;
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 28px;
		margin-right:20px;
	};
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		font-size: 36px;
		margin-right:30px;
	};
`;
const StyledViewAllBtn = styled.button`
	
	display:flex;
	color:${props => props.theme.color.darkBlue || '#2A5275'};
	 align-items:flex-end;
	
	
`;
const StyledBtnText = styled.div`
	margin-right:5px;
	&:hover{
		text-decoration:underline;
	}
	
`;
const StyledBtnArrow = styled.div`
	
`;

const TitleItems: FC<ITitleItems> = (props) => {

	const viewAllTaet = useAppSelector(selectViewAllItems)

	return (
		<StyledItemsTitle>
			<StyledTitle>{props.title}</StyledTitle>
			{!props.isAll ? <StyledViewAllBtn onClick={props.viewAllItem} >
				<StyledBtnText>{viewAllTaet}</StyledBtnText>
				<StyledBtnArrow className='_icon-arrow-right' />
			</StyledViewAllBtn> : null}
		</StyledItemsTitle>
	);
};

export default TitleItems;