import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

interface ITitle {
	title: string;
};

const StyledTitleMenu = styled(Flex)``

const TitleMenu: FC<ITitle> = (props) => {
	return (
		<StyledTitleMenu>
			{props.title}
		</StyledTitleMenu>
	);
};

export default TitleMenu;