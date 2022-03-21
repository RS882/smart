import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import Button, { ButtonProps } from './../Button';



const StyledLanguageBtn = styled(Button)`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		width: 48px;
		height: 48px;
	};
`;

const LanguageBtn: FC<ButtonProps> = (props) => {
	return (
		<StyledLanguageBtn {...props} width='40px' texTransform='uppercase'>
			<Flex margin='0 10px' >{props.children}</Flex>
		</StyledLanguageBtn>
	);
};

export default LanguageBtn;