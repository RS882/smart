import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

interface ITitle {
	title: string;
};

const StyledTitleMenu = styled(Flex)`
	position:absolute;
	top: 20px;
	left: 20px;
	text-transform:capitalize;
	font-weight: 700;
	font-size: 28px;
	line-height: 130%;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		top: 50px;
		left: 50px;
	};
`

const TitleMenu: FC<ITitle> = (props) => {
	return (
		<StyledTitleMenu>
			{props.title}
		</StyledTitleMenu>
	);
};

export default TitleMenu;