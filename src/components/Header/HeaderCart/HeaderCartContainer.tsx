import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCartCount } from '../../../redux/ActionSlice';
import Flex from '../../Flex';
import HeaderAction from '../HeaderAction/HeaderAction';
import { IActionArray } from '../HeaderAction/HeaderActionsContainer';
;


const StyledHeaderCartContainer = styled(Flex)`
	width: 48px;
	height: 48px;
	margin-right:20px;
	display: none;
	@media ${props => props.theme.media?.desktop || '(min-width: 991.98px)'} {
		display: flex;
	};
`;

const HeaderCartContainer = () => {

	const count = useSelector(selectCartCount);
	const ActionArray: IActionArray[] = [{ name: 'cart', classIcon: '_icon-cart', },];
	const actionElements: JSX.Element[] = ActionArray.map((e, i) =>
		<HeaderAction key={e.name + i} name={e.name}
			headerActionClassName={e.classIcon} count={count} />);

	return (
		<StyledHeaderCartContainer>
			{actionElements}
		</StyledHeaderCartContainer>
	);
};

export default HeaderCartContainer;