import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../../types/fnTypes';
import Flex from '../../../Flex';
import { IMenuMore } from './MoreMenuItem';
import SubMenuButton from './SubMenuButton';
import WithoutSubmenuItem, { WithoutSubmenuItemProps } from './WithoutSubmenuItem';


interface StyledWithSubMenuprops {
	isSubMenuOpen: boolean;
}

interface WithSubMenuProps extends IMenuMore {

	onClickMenuItemMore: (e: string) => void;
}

const StyledWithSubMenu = styled(Flex) <StyledWithSubMenuprops>`
	width: 100%;
	padding: 0 0 0 10px;
	display: ${props => props.isSubMenuOpen ? 'flex' : 'none'};
	
`;
const StyledWithSubMenuTitle = styled.div`
	width: 100%;
`;
const StyledWithSubMenuWrapper = styled(Flex)`
	width: 100%;
`;

const WithSubMenu: FC<WithSubMenuProps> = (props) => {

	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


	const menuItem: JSX.Element[] | undefined = props.menuItem[1].subMenu && props.menuItem[1].subMenu.map((e, i) =>
		<WithoutSubmenuItem key={`WithSubMenu` + i} menuItem={e}
			onClickMenuItemMore={props.onClickMenuItemMore} />);

	const onClickSubMenuBtn: ArrowFn = () => {
		setIsSubMenuOpen(!isSubMenuOpen)
	};


	return (
		<StyledWithSubMenuWrapper direction='column' align='flex-start' justufy='flex-start'>
			<StyledWithSubMenuTitle >
				<SubMenuButton btnText={props.menuItem[1].menuText}
					onClickSubMenuBtn={onClickSubMenuBtn} isSubMenuOpen={isSubMenuOpen} />
			</StyledWithSubMenuTitle>
			<StyledWithSubMenu isSubMenuOpen={isSubMenuOpen}
				direction='column' align='flex-start' justufy='flex-start'>
				{menuItem}
			</StyledWithSubMenu>
		</StyledWithSubMenuWrapper>
	);
};

export default WithSubMenu;