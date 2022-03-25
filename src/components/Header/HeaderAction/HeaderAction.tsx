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

`;

const StyledNavLinkAction = styled(NavLink) <IHeaderAction>`
	display:${props => props.name === 'cart' && 'none'};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:${props => props.name === 'cart' && 'block'}
	};
`;

const HeaderAction: FC<IHeaderAction> = (props) => {
	const { headerActionClassName, ...rest } = props;

	return (
		<StyledNavLinkAction {...rest} to={'/' + rest.name}>
			<StyledHeaderAction className={headerActionClassName}>
				<HeaderActionCount count={rest.count} />
			</StyledHeaderAction>
		</StyledNavLinkAction>
	);
};

export default HeaderAction;