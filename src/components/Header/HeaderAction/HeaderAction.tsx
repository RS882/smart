import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../../Flex';
import HeaderActionCount from './HeaderActionCount';



interface IHeaderAction {
	headerActionClassName?: string;
	count?: number;
	name?: string;
}

export const StyledHeaderAction = styled(Flex) <IHeaderAction>`
position: relative;
width: 48px;
height: 48px;
color: ${props => props.className === '_icon-hart_full' ?
		(props.theme.color.red || '#F15152') :
		(props.theme.color.text.second || '#838688')};

`

const HeaderAction: FC<IHeaderAction> = (props) => {

	return (
		<NavLink to={'/' + props.name}>
			<StyledHeaderAction className={props.headerActionClassName}>
				<HeaderActionCount count={props.count} />
			</StyledHeaderAction>
		</NavLink>
	);
};

export default HeaderAction;