import React, { FC } from 'react';
import styled from 'styled-components';

interface ITitle {
	title?: string;
}

const StyledTitle = styled.h3`
	display:flex;
	align-items:center;
	padding-left: 20px;
	height: 68px;
	background-color:${props => props.theme.color.lightBlue || '#EDF2F6'};
	font-weight: 600;
	font-size: 24px;
	line-height: 120%;
	border-radius: 4px 4px 0 0;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding-left: 30px;
	};
`;

const TitleForm: FC<ITitle> = (props) => {
	return (
		<StyledTitle> {props.title}</StyledTitle>
	);
};

export default TitleForm;