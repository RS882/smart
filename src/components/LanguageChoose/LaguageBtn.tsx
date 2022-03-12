import React, { FC } from 'react';

import Flex from '../Flex';
import Button, { ButtonProps } from './../Button';


interface ILanguageBtn extends ButtonProps {

}


const LanguageBtn: FC<ILanguageBtn> = (props) => {
	return (
		<Button {...props} width='40px' texTransform='uppercase'>
			<Flex margin='0 10px' >{props.children}</Flex>
		</Button>
	);
};

export default LanguageBtn;