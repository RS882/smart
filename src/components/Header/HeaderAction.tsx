import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



interface IHeaderAction {
	headerActionClassName?: string;
	count?: number;
	name?: string;
}

const StyledHeaderAction = styled.div<IHeaderAction>`
width: 48px;
height: 48px;
border: 1px solid #000;
color: ${props => props.className === '_icon-hart_full' ?
		(props.theme.color.red || '#F15152') :
		(props.theme.color.text.second || '#838688')};
`

const HeaderAction: FC<IHeaderAction> = (props) => {

	return (
		<NavLink to={'/' + props.name}>
			<StyledHeaderAction className={props.headerActionClassName} />
		</NavLink>
	);
};

export default HeaderAction;