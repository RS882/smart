import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from './../Flex';


interface IHeaderAction {
	HeaderActionClassName?: string;
}

const StyledHeaderAction = styled.div`
width: 48px;
height: 48px;
border: 1px solid #000;
`

const HeaderAction: FC<IHeaderAction> = (props) => {
	return (

		<StyledHeaderAction className={props.HeaderActionClassName} />

	);
};

export default HeaderAction;