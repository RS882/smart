import React, { FC, useEffect, useRef } from 'react';

import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';
import Flex from '../../Flex';
import HeaderActionCount from './HeaderActionCount';



interface IHeaderAction {
	headerActionClassName?: string;
	count?: number;
	name?: string;

	onClick: ArrowFn;
};

interface IHederActionIcon {
	headerActionClassName?: string;
}

export const StyledHeaderAction = styled(Flex) <IHederActionIcon>`
	position: relative;
	width: 48px;
	height: 48px;
	color: ${props => props.className === '_icon-hart_full' ?
		(props.theme.color.red || '#F15152') :
		(props.theme.color.text.second || '#838688')};

`;

const StyledNavLinkAction = styled.button <IHeaderAction>`
	display:${props => props.name === 'cart' && 'none'};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:${props => props.name === 'cart' && 'block'}
	};
`;

const HeaderAction: FC<IHeaderAction> = (props) => {
	const { headerActionClassName, ...rest } = props;

	const cartRef = useRef<HTMLDivElement>(null);


	useEffect(() => {

		if (props.name === 'cart') {
			const rect = cartRef.current !== null && cartRef.current.getBoundingClientRect();
			console.log(rect);

		}

	}, []);

	return (
		<StyledNavLinkAction {...rest} >
			<div ref={cartRef}>
				<StyledHeaderAction className={headerActionClassName}>
					<HeaderActionCount count={rest.count} />
				</StyledHeaderAction>
			</div>
		</StyledNavLinkAction>
	);
};

export default HeaderAction;