import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../types/fnTypes';
import Flex from '../Flex';
import CloseMenu from '../Header/DropDownMenu/CloseMenu';

interface IClosePopUpContainer {
	onClickClosePopUp: ArrowFn;
}


const StyledClosePopUpContainer = styled(Flex)`
	position:absolute;	
	top: 10px;
	right:20px;
	width: 48px;
	height: 48px;
	
`

const ClosePopUpContainer: FC<IClosePopUpContainer> = (props) => {
	return (
		<StyledClosePopUpContainer>
			<CloseMenu onClick={props.onClickClosePopUp} />
		</StyledClosePopUpContainer>
	);
};

export default ClosePopUpContainer;