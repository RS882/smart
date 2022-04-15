import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import Modal from '../../Modal/Modal';
import CloseMenu from '../DropDownMenu/CloseMenu';
import CloseMenuContainer from '../DropDownMenu/CloseMenuContaine';
import Scearch from '../DropDownMenu/Scearch/Scearch';
import Container from './../../Container';


const StyledSCearch = styled.div`
	position:fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index:400;
	min-height: 80px;
	background-color:${props => props.theme.color.bg.main || '#fff'};
`;

const StyledScearchWrapper = styled(Flex)`
	width: 100%;
	min-height: 80px;
`;
const DecktopSearchContainer: FC = (props) => {

	const closeScearch = () => {
		console.log('close');

	};
	return (
		<div>
			<StyledSCearch>
				<Container>
					<StyledScearchWrapper>
						<Scearch />
						<CloseMenu onClick={closeScearch} />
					</StyledScearchWrapper>
				</Container>
			</StyledSCearch>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</div>
	);
};

export default DecktopSearchContainer;