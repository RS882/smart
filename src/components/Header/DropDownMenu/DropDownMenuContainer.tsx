import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import CloseMenu from './CloseMenu';
import { useAppDispatch, useAppSelector } from './../../../redux/hooks';
import { closeMenu } from '../../../redux/MenuSlice';
import { selectIsMenu, IIsPage } from './../../../redux/MenuSlice';
import { changeIsModal } from '../../../redux/ModalSlice';
import More from './More/More';
import TitleMenu from './TitleMenu';
import { IDporMenu } from '../../../types/LocalizationTypes';
import { strings } from './../../../localization/localization';
import Scearch from './Scearch/Scearch';

interface DropDownMenuProps {
	isOpen?: boolean;

}
interface IDropDownProps {
	isOpen?: boolean;
}

const StyledDropDownMenu = styled.div <IDropDownProps>`
	position: fixed;
	top: ${props => props.isOpen ? '0' : '100%'};
	left: 0;
	width: 100%;
	height: calc(100% - 20px - 64px) ;
	margin-top:20px;
	z-index: 200;
	overflow-y:auto;
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
const StyledMenuWrapper = styled(Flex)`
width: 100%;

	padding: 20px ;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 50px ;
	};
`

const DropDownMenu: FC<DropDownMenuProps> = (props) => {

	const dispatch = useAppDispatch();
	const onCloseMenu = () => {
		dispatch(closeMenu());
		dispatch(changeIsModal(false));
	};

	const isMenuStatus = useAppSelector(selectIsMenu);
	const isOpen: boolean = Object.values(isMenuStatus).includes(true);

	const title: IDporMenu = strings.header.dropMenu;

	const setItemTitle = (isMenu: IIsPage, title: IDporMenu) => {
		if (isMenu.isCatalog) return title.title.catalog;
		if (isMenu.isScearch) return title.title.search;
		if (isMenu.isMore) return title.title.more;
		return '';
	}

	return (
		<StyledDropDownMenu isOpen={isOpen} >
			<CloseMenu onClick={onCloseMenu} />
			<StyledMenuWrapper justufy='flex-start' align='flex-start' direction='column'>
				<TitleMenu title={setItemTitle(isMenuStatus, title)} />
				{isMenuStatus.isCatalog ? 'Catalog' : null}
				{isMenuStatus.isScearch ? <Scearch /> : null}
				{isMenuStatus.isMore ? <More /> : null}
			</StyledMenuWrapper>
		</StyledDropDownMenu>
	)
}
export default DropDownMenu;

