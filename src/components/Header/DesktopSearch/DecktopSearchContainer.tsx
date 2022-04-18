import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { openDesktopScearch } from '../../../redux/MenuSlice';
import { changeIsBodyLock } from '../../../redux/ModalSlice';
import Flex from '../../Flex';
import Modal from '../../Modal/Modal';
import CloseMenu from '../DropDownMenu/CloseMenu';
import Scearch from '../DropDownMenu/Scearch/Scearch';
import Container from './../../Container';
import { useDispatch } from 'react-redux';



interface StyledScearchBoxProps {
	isShow: boolean;
};

const StyledScearchBox = styled.div<StyledScearchBoxProps>`
	position:fixed;
	top:${props => props.isShow ? '0' : '-80px'} ;
	transition:top 0.3s ease 0s;
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

	const [isShow, setIsShow] = useState(false);
	const dispatch = useDispatch();

	const closeScearch = () => {
		setIsShow(false);
	};

	const closeModal = () => {
		if (!isShow) {
			dispatch(openDesktopScearch(false));
			dispatch(changeIsBodyLock(false));
		};
	};

	useEffect(() => {
		setIsShow(true);
	}, [])
	return (
		<>
			<StyledScearchBox isShow={isShow} onTransitionEnd={closeModal}>
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
		</>
	);
};

export default DecktopSearchContainer;