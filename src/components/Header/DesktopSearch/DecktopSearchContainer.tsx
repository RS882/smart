import React, { FC } from 'react';
import styled from 'styled-components';
import { openDesktopScearch } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';
import Flex from '../../Flex';
import Modal from '../../Modal/Modal';
import CloseMenu from '../DropDownMenu/CloseMenu';
import CloseMenuContainer from '../DropDownMenu/CloseMenuContaine';
import Scearch from '../DropDownMenu/Scearch/Scearch';
import Container from './../../Container';
import { useDispatch } from 'react-redux';


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

const StyledClose = styled.div`
	margin-top:22px;
`;

const StyledScearch = styled.div`
	flex:1 1 100%;
	margin-top:16px;
`

const DecktopSearchContainer: FC = (props) => {

	const dispatch = useDispatch();
	const closeScearch = () => {
		dispatch(openDesktopScearch(false));
		dispatch(changeIsBodyLock(false))
	};
	return (
		<div>
			<StyledSCearch>
				<Container>
					<StyledScearchWrapper align='flex-start'>
						<StyledScearch>
							<Scearch />
						</StyledScearch>
						<StyledClose>
							<CloseMenu onClick={closeScearch} />
						</StyledClose>
					</StyledScearchWrapper>
				</Container>
			</StyledSCearch>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</div>
	);
};

export default DecktopSearchContainer;