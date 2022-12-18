import React from 'react';

const News = React.lazy(() => import('../..//components/News/News'));
const GeneralInformation = React.lazy(() => import('../PrivateOffice/GeneralInformation'));
const PersonalData = React.lazy(() => import('../PrivateOffice/PersonalData'));

export const routePrivOff = [
	{ path: '', Component: News, linkText: 'General information', },
	{ path: 'generalInformation', Component: GeneralInformation, linkText: 'General information', },
	{ path: 'personalData', Component: PersonalData, linkText: 'Personal data', },
	{ path: 'shoppingHistory', Component: News, linkText: 'Shopping history', },
	{ path: 'favorites', Component: News, linkText: 'Favorites', },
	{ path: 'changePassword', Component: News, linkText: 'Change password', },
];