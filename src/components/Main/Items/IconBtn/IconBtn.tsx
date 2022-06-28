import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks';
import { selectAddItemToCart } from '../../../../redux/ItemSlice';
import { ArrowFn } from '../../../../types/fnTypes';



interface IIconBtn {
	isCartBtn?: boolean;
	isItemInCart?: boolean;
	iconClass: string;
	iconColor?: string;
	callBack: ArrowFn;

};
interface IIconFavorProps {
	colorIcon?: string;
};

interface IIconCart {
	isItem?: boolean;
	disabled?: boolean;
	className?: string;
};

const StyledIconBtn = styled.button`
	width:48px;
	height: 48px;
	border-radius:4px;
`;

const StyledBox = styled.div`
	width: 100%;
	height:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:20px;
	transition:all 0.3s ease 0s;
	border-radius:4px;
`
const StyledIconFAvorit = styled(StyledBox) <IIconFavorProps>`
	border: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	color: ${props => props.colorIcon || props.theme.color.divider || '#C8CACB'};
	&:hover{
			border: 2px solid ${props => props.theme.color.blue || '#2A5275'};
	}
`;


const StyledIconCart = styled(StyledBox) <IIconCart>`
	color: ${props => props.isItem ? props.theme.color.darkBlue : '#fff'};
	background-color: ${props => props.isItem ? props.theme.color.lightBlue : props.theme.color.blue || '#4878A6'};
	border: 1px solid  ${props => props.isItem ? '#fff' : ''};
	&:hover{
		background-color: ${props => props.isItem ? props.theme.color.lightBlue : props.theme.color.darkBlue || '#2A5275'};
		border: 1px solid  ${props => props.isItem ? props.theme.color.darkBlue : ''};
	}

`;


const IconBtn: FC<IIconBtn> = (props) => {

	const cartProps: IIconCart = {
		className: props.iconClass,
		isItem: props.isItemInCart,
		disabled: useAppSelector(selectAddItemToCart),
	};

	return (
		<StyledIconBtn onClick={props.callBack}>
			{props.isCartBtn ?
				<StyledIconCart {...cartProps} /> :
				<StyledIconFAvorit className={props.iconClass} colorIcon={props.iconColor} />
			}

		</StyledIconBtn>
	);
};

export default IconBtn;