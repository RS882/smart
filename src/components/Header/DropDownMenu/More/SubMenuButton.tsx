import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../../types/fnTypes';


interface ISubMenuButtonProps {
	isSubMenuOpen: boolean;

};

interface ISubMenuButton extends ISubMenuButtonProps {
	onClickSubMenuBtn: ArrowFn;
	btnText?: string;
};

const StyledSubMenuButton = styled.div<ISubMenuButtonProps>`
	font-size:6px;
	height: 100%;
	width: 14px;

	transition:transform 0.3s ease 0s;
	transform: ${props => props.isSubMenuOpen ? 'rotate(180deg)' : 'none'};
`;

const StyledSubMenuButtonWrapper = styled.button`
	display:flex;
	width: 100%;
	justify-content:space-between;
	align-items:center;
	padding: 15px  0;
	border-bottom: 1px solid ${props => props.theme.color.divider || '#C8CACB'};
	
`;

const SubMenuButton: FC<ISubMenuButton> = (props) => {
	const { onClickSubMenuBtn, ...rest } = props;
	return (
		<StyledSubMenuButtonWrapper onClick={onClickSubMenuBtn} >
			{rest.btnText}
			<StyledSubMenuButton {...rest} className='_icon-arrow_down'>
			</StyledSubMenuButton>
		</StyledSubMenuButtonWrapper>
	);
};

export default SubMenuButton;