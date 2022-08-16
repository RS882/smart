import React, { FC, Suspense } from 'react';
import PreloaderContainer from '../Preloader/PreloaderContainer';

const WithSuspense = <P extends object>(Component: React.ComponentType<P>): FC<P> => (props) => {
	return (
		<Suspense fallback={< PreloaderContainer />} >
			<Component {...props} />
		</Suspense >
	)
};
export default WithSuspense;