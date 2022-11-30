import React, { FC } from 'react';
import { IRouteobj } from '../routeObj';
import { Route } from 'react-router-dom';
import WithSuspense from './HOC/WithSuspense';

export interface IRouteComp {
	routes: IRouteobj[]
};



const RouteComponent: FC<IRouteComp> = ({ routes }) => {

	// We get route elements from an object with investments
	const getRouteElement = (route: IRouteobj[]): JSX.Element[] => route.map((e, i) =>
		<Route key={e.linkText + i} path={e.path} element={WithSuspense(e.Component)({ ...e.componentProps })}>
			{e.childrRout !== undefined ? getRouteElement(e.childrRout) : null}
		</Route>
	)
		;
	return (
		<>
			{getRouteElement(routes)}
		</>
	);
};

export default RouteComponent;