import React, { FC } from 'react';
import styled from 'styled-components';
import { openDesktopScearch, selectIsDesktopScearch } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';
import Flex from '../../Flex';
import Modal from '../../Modal/Modal';
import CloseMenu from '../DropDownMenu/CloseMenu';
import Scearch from '../DropDownMenu/Scearch/Scearch';
import Container from './../../Container';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';


interface StyledScearchBoxProps {
}

const StyledScearchBox = styled.div<StyledScearchBoxProps>`
	position:fixed;
	top: -90px;
	transition:top 1s ease 0s;
	left: 0;
	width: 100%;
	z-index:400;
	min-height: 80px;
	background-color:${props => props.theme.color.bg.main || '#fff'};
	animation: down 1s ease forwards;
	@keyframes down {
		0% { top:-90px}
		100%{top:0px}
	}


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
			<StyledScearchBox >
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
			</StyledScearchBox>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
		</div>
	);
};

export default DecktopSearchContainer;