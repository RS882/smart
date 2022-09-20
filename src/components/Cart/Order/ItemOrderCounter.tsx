import React, { FC } from 'react';
import styled from 'styled-components';


interface IMinus {
	isBlack?: boolean;
};
interface IItemOrderCounter extends IMinus {
	itemCount: number;
	plusOne: () => void;
	minusOne: () => void;

};



const StyledItemOrderCountContaoner = styled.div`

	display: flex;
	justify-content:center;
	align-items:center;
`;

const StyledBtnConter = styled.button.attrs<IMinus>(props => ({ disabled: props.isBlack, })) <IMinus>`
	width:20px;
	height: 20px;
	display: flex;
	justify-content:center;
	align-items:center;
	margin-right:5px;
	position:relative;
	cursor: ${props => props.isBlack ? 'auto' : 'pointer'};
`;

const StyledMinus = styled.span <IMinus>`
	position:absolute;
	width:70%;
	height:1px;
	background-color:${props => props.isBlack ? '#000' : props.theme.color.divider || '#C8CACB'};;
	top: 50%;
	left: 50%;
	transform:translateX(-50%);
	
`;

const StyledPlus = styled.span`
	position:absolute;
	height:70%;
	width:1px;
	background-color:#000;
	top: 50%;
	left: 50%;
	transform:translate(-50%,-50%);
`;

const StyledCount = styled.div`
	width:48px;
	height: 48px;
	border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	border-radius: 8px;
	font-size: 16px;
	line-height: 130%;
	display: flex;
	justify-content:center;
	align-items:center;
	margin-right:5px;
`;



const ItemOrderCounter: FC<IItemOrderCounter> = ({ itemCount, plusOne, minusOne }) => {

	return (
		<StyledItemOrderCountContaoner>
			<StyledBtnConter onClick={minusOne} isBlack={itemCount == 1}><StyledMinus isBlack={itemCount !== 1} /></StyledBtnConter>
			<StyledCount>{itemCount}</StyledCount>
			<StyledBtnConter onClick={plusOne} isBlack={false}><StyledMinus isBlack={true} /><StyledPlus /></StyledBtnConter>
		</StyledItemOrderCountContaoner>
	);
};

export default React.memo(ItemOrderCounter);