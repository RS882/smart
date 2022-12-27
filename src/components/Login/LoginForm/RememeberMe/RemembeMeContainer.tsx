import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';
import RememberMe from './RememberMe';

interface IRemembeMe {
	text?: string;
	value: boolean;
};

const StyledRemembeMeWrapper = styled.div`
	display:flex;
`;
const StyledRemembeMeBox = styled.div`
	width: 20px;
	height: 20px;
	margin: 0 7px 0 2px;
`;
const RemembeMeContainer: FC<IRemembeMe> = (props) => {



	return (
		<StyledRemembeMeWrapper>
			<StyledRemembeMeBox><RememberMe value={props.value} /></StyledRemembeMeBox>
			{props.text}
		</StyledRemembeMeWrapper>
	);
};

export default RemembeMeContainer;