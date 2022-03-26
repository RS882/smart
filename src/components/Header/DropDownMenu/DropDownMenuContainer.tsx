import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import CloseMenu from './CloseMenu';
import { useAppDispatch, useAppSelector } from './../../../redux/hooks';
import { closeMenu } from '../../../redux/MenuSlice';
import { selectIsMenu } from './../../../redux/MenuSlice';
import { changeIsModal } from '../../../redux/ModalSlice';
import More from './More/More';
import TitleMenu from './TitleMenu';

interface DropDownMenuProps {
	isOpen?: boolean;
	title: string;
}

const StyledDropDownMenu = styled(Flex) <DropDownMenuProps>`

	position: fixed;
	top: ${props => props.isOpen ? '0' : '100%'};
	left: 0;
	width: 100%;
	height: calc(100% - 20px - 64px) ;
	margin-top:20px;
	z-index: 200;
	background-color: ${props => props.theme.color.lightBlue || '#EDF2F6'};
	border-radius: 8px 8px 0px 0px;
	transition: top 0.5s ease 0s;

	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin: 20px 20px 0 20px;
		width: calc(100% - 40px) ;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:none;
	};
`;


const DropDownMenu: FC<DropDownMenuProps> = (props) => {

	const dispatch = useAppDispatch();
	const onCloseMenu = () => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
	};

	const isMenuStatus = useAppSelector(selectIsMenu);
	const isOpen: boolean = Object.values(isMenuStatus).includes(true);


	return (
		<StyledDropDownMenu isOpen={isOpen} {...props} >
			<CloseMenu onClick={onCloseMenu} />
			<TitleMenu title={props.title} />
			{isMenuStatus.isCatalog && 'Catalog'}
			{isMenuStatus.isScearch && 'Scearch'}
			{isMenuStatus.isMore && <More />}
		</StyledDropDownMenu>
	)
}
export default DropDownMenu;

