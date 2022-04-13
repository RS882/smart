import React, { FC } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import Preloader from './Preloader';


const StyledPreloderContainer = styled.div`
	z-index:500;
`
const PreloaderContainer: FC = (props) => {
	return (
		<StyledPreloderContainer>
			<Modal opacity={'0.6'} isModal={true} isOpen={false} />
			<Preloader />
		</StyledPreloderContainer>
	);
};

export default PreloaderContainer;