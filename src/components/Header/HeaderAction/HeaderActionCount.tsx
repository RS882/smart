import React, { FC } from 'react';
import styled from 'styled-components';

interface IHeaderActionCount {
	count?: number;
}

const StyledHeaderActionCount = styled.div`
position: absolute;
top: 0;
left: 0;
font-size: 14px;
line-height: 100%;
background-color:${props => props.theme.color.darkBlue};
height: 20px;
min-width: 20px;
color: ${props => props.theme.color.text.mainLight};
	
`

const HeaderActionCount: FC<IHeaderActionCount> = (props) => {
	return (
		<StyledHeaderActionCount >
			{props.count}
		</StyledHeaderActionCount>
	);
};

export default HeaderActionCount;