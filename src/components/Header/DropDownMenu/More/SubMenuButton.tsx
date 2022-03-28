import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../../types/fnTypes';


interface ISubMenuButtonProps {
	isSubMenuOpen: boolean;
};

interface ISubMenuButton extends ISubMenuButtonProps {
	onClickSubMenuBtn: ArrowFn;
};

const StyledSubMenuButton = styled.div`
	font-size:6px;
`;

const StyledSubMenuButtonWrapper = styled.button<ISubMenuButtonProps>`
	height: 12px;
	width: 14px;
	transition:transform 0.3s ease 0s;
	transform: ${props => props.isSubMenuOpen ? 'rotate(180deg)' : 'none'};

`;

const SubMenuButton: FC<ISubMenuButton> = (props) => {
	const { onClickSubMenuBtn, ...rest } = props;
	return (
		<StyledSubMenuButtonWrapper onClick={onClickSubMenuBtn} {...rest}>
			<StyledSubMenuButton className='_icon-arrow_down'>
			</StyledSubMenuButton>
		</StyledSubMenuButtonWrapper>
	);
};

export default SubMenuButton;