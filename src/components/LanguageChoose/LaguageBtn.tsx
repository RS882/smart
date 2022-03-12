import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Button, { ButtonProps } from './../Button';


interface LanguageBtn extends ButtonProps {

}



const LanguageBtn: FC<LanguageBtn> = (props) => {
	return (
		<Button {...props} width='40px' texTransform='uppercase'>
			<Flex margin='0 10px' >{props.children}</Flex>
		</Button>
	);
};

export default LanguageBtn;