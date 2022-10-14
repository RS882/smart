import React, { FC } from 'react';
import styled from 'styled-components';

interface IRadioProps {
	isChecked: boolean;
};

interface IRadioLabel extends IRadioProps {
	label: string
};

const StyledRadioDot = styled.div<IRadioProps>`
	height:20px;
	width:20px;
	border-radius:50%;
	border: 2px solid  ${props => props.isChecked ?
		props.theme.color.blue || '#4878A6' :
		props.theme.color.cardBorder || '#EAEAF0'};
	position: relative;
	transition: border 0.3s ease 0s;
	&::before{
		content:'';
		position:absolute;
		display: ${props => props.isChecked ? 'block' : 'none'};
		top: 50%;
		left: 50%;
		transform:translate(-50%, -50%);
		height:12px;
		width:12px;
		border-radius:50%;
		background-color: ${props => props.theme.color.blue || '#4878A6'};
		z-index: 5;
	};
`;
const StyledLabels = styled.div`
	display: flex;
	align-items:center;
`;
const StyledTextLebel = styled.div`
	margin-left:10px;
`;

// A stylized radio
const RadioLabel: FC<IRadioLabel> = ({ isChecked, label }) => {
	return (
		<StyledLabels>
			<StyledRadioDot isChecked={isChecked} />
			<StyledTextLebel>{label}</StyledTextLebel>
		</StyledLabels>
	);
};
export default RadioLabel;