import React, { FC } from 'react';
import { routeObj } from '../../routeObj';
import Breadcrumbs from './Breadcrumbs';

const BreadcrumbsContainer: FC = () => {
	//const url = useLocation().pathname;
	const url = '/advantages/howToBuy/iwuwuqiu/uoppp/939382/1ssss';

	const urlArr = url.split('/').map(e => '/' + e)

	//const text = e.slice(1)



	console.log(urlArr);
	const linkArr = routeObj.filter(el => urlArr.includes(el.path));
	console.log(linkArr);


	return (
		<div>
			<Breadcrumbs link={url} text={url} />
		</div>
	);
};

export default BreadcrumbsContainer;