import React, { FC } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import Preloader from './Preloader';

const StyledPreloderContainer = styled.div`
	z-index:500;
`;
// Container for a preloder with a modal window
const PreloaderContainer: FC = () => {
	return (
		<StyledPreloderContainer>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
			<Preloader />
		</StyledPreloderContainer>
	);
};
export default React.memo(PreloaderContainer);