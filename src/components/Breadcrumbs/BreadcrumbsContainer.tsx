import React, { FC } from 'react';
import { routeObj } from '../../routeObj';

const BreadcrumbsContainer = () => {
	//const url = useLocation().pathname;
	const url = '/advantages/howToBuy/iwuwuqiu/uoppp/939382/1ssss';

	const urlArr = url.split('/').map(e => '/' + e)

	//const text = e.slice(1)



	console.log(urlArr);
	const linkArr = routeObj.filter(el => urlArr.includes(el.path));
	console.log(linkArr);


	return (
		<div>

		</div>
	);
};

export default BreadcrumbsContainer;