import React, { FC } from 'react';
import { useLocation } from 'react-router';
import { routeObj } from '../../routeObj';
import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsContainer: FC = () => {
	const url = useLocation().pathname;
	//const url = '/advantages/howToBuy/iwuwuqiu/uoppp/939382/1ssss';

	// const urlArr = url.split('/').map(e => '/' + e)

	// console.log(urlArr);
	// const linkArr = routeObj.filter(el => urlArr.includes(el.path));
	// //console.log(linkArr);
	const text = ['главная', 'избранное'];

	return (
		<>
			<Breadcrumbs text={text} />
		</>
	);
};

export default BreadcrumbsContainer;