import React, { FC } from 'react';
import styled from 'styled-components';

const StyledRememberMeFalse = styled.div`
	width: 100%;
	height: 100%;
	border: 1.5px solid ${props => props.theme.color.cardBorder || '#EAEAF0'};
`

const RememberMe: FC = (props) => {
	return (
		<StyledRememberMeFalse />
	);
};

export default RememberMe;