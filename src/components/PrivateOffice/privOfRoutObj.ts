import React from 'react';

const News = React.lazy(() => import('../..//components/News/News'));


export const routePrivOff = [
	{ path: 'generalInformation', Component: News, linkText: 'General information', },
	{ path: 'personalData', Component: News, linkText: 'Personal data', },
	{ path: 'shoppingHistory', Component: News, linkText: 'Shopping history', },
	{ path: 'favorites', Component: News, linkText: 'Favorites', },
	{ path: 'changePassword', Component: News, linkText: 'Change password', },
];