import React, { FC } from 'react';
import Modal from '../Modal/Modal';
import Preloader from './Preloader';

const PreloaderContainer: FC = (props) => {
	return (
		<div>
			<Modal opacity={'0.4'} isModal={true} isOpen={false} />
			<Preloader />
		</div>
	);
};

export default PreloaderContainer;